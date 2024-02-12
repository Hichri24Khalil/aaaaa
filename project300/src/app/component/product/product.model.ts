// src/app/user.model.ts

export class Product {
    constructor(
      public id:string,
      public name:string,
      public price:number,
      public tags: string[],
      public favorite:boolean,
      public stars: number,
      public imageUrl: string,
      public origins: string[],
      public cookTime:string,
    ) {}
  }
  