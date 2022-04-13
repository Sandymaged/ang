export class Store {
  public name:string|undefined;
  public branches:string[];
  public logo:string;
  constructor(name:string,branches:string[],logo:string){
    this.name=name;
    this.branches=branches;
    this.logo=logo;
  }
}
