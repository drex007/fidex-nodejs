import { Container } from "inversify";
import { DBConnection } from "./database.connection";
import { AdminRepository } from "@data/admin/repository/admin.repository";
import { AdminServices } from "@logic/admin/admin-service/admin.service";


export const container = new Container({
  defaultScope:"Singleton"
})

//Binding for Database
container.bind(DBConnection).toSelf()

//You can bind Other Repository
container.bind(AdminRepository).toSelf()
container.bind(AdminServices).toSelf()