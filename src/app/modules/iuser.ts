export interface IUser {
  fullname:string,
  email:string,
  phonenumber:number|undefined,
  address:{
    city:string|undefined,
    street:string|undefined
  }
  password:string
}
