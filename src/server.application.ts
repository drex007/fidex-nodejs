import 'reflect-metadata'
import express from 'express'
import { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import { InversifyExpressServer } from 'inversify-express-utils'
import { container } from './container.bind'
import { DBConnection } from './database.connection'
import '@controllers/index.controllers'
import { HttpException } from './exceptions/http.exceptions'


export class App{
  async setup(){
    //DB CONNECTION
    const _db =  container.get(DBConnection)
    await _db.connect()
   
 
    //SERVER
    const server = new InversifyExpressServer(container)
    server.setErrorConfig((app)=>{
      app.use((err: any, req:Request, res:Response, next:NextFunction)=>{
       if(err instanceof HttpException){
        return res.status(err.statusCode).json({
          data:{},
          error:err?.message
        })

        }
        next()

      })
    })

    server.setConfig((app)=>{
      app.use(express.json())
      app.use(morgan('dev')) 
    })
    const app  = server.build()
    app.listen(5000, ()=> {
      console.log('Server Started');
    })
    



  }
}

