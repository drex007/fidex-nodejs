import { AdminServices } from "@logic/admin/admin-service/admin.service";
import { controller, httpGet } from "inversify-express-utils";

@controller('/administrator')
export class AdminControllers {
  constructor (private readonly _adminServices: AdminServices ){

  }
  @httpGet('/')
  async index(req: Request, res: Response){

  }

}

