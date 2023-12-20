export class HttpException extends Error{
  constructor(public readonly msg:string, public statusCode:number){
    super(msg)

  }
}