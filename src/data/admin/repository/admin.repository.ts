import { injectable } from "inversify";
import { DBConnection } from "src/database.connection";

@injectable()
export class AdminRepository {
  constructor (private readonly _db: DBConnection){

  }

  
}