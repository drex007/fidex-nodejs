import {injectable} from 'inversify'
import { AdminRepository } from "@data/admin/repository/admin.repository";


@injectable()
export class AdminServices{
  constructor ( private readonly _adminRepository: AdminRepository){

  }

}