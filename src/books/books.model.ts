export class book {
  constructor(
    public id: string,
    public title: string,
    
    public author:object, //Author object and it's elements.
    public firstName:string,
    public lastName: string,
    public email: string,
    public dateOfBirth :Date,
    
    public yearOfPublication: string,
    public description: string,
    
  ) {}
}

