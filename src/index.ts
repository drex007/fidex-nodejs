import { App } from "./server.application";
import { Container } from "inversify";
import 'reflect-metadata'

export const runserver =() =>{
  const app = new App();
  app.setup()

}

runserver();