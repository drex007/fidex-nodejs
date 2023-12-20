import mongoose from "mongoose";
import dotenv from 'dotenv'
import { injectable } from "inversify";

dotenv.config()


const MONGODB_PASSWORD: string = process.env.MONGO_DB_PASSWORD || ""
const MONGODB_USERNAME: string = process.env.MONGO_DB_USERNAME || ""

const MONOGO_URL = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.ytncu2a.mongodb.net/?retryWrites=true&w=majority`


@injectable()
export class DBConnection {
  async connect(){
    mongoose.Promise = Promise;
    mongoose.connect(MONOGO_URL);
    mongoose.connection.on('connected', ()=>{
      console.log('DBCONNECTED');
    
    });

  
    mongoose.connection.on('error', (error:Error) =>{
      console.log(error, 'DB connectetion error')
    });

   
  }


}