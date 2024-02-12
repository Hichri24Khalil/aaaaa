// src/app/UserModel.model.ts

export class UserModel {
    constructor(
      public id: string,
      public email: string,
      public password: string,
      public name: string,
      public address: string,
      public isAdmin: boolean
    ) {}
  }
  