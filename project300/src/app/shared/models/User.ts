export class User{
  id: string;
  email: string;
  name: string;
  address: string;
  token: string;
  isAdmin: boolean;

  constructor(id: string, email: string, name: string, address: string, token: string, isAdmin: boolean) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.address = address;
    this.token = token;
    this.isAdmin = isAdmin;
  }

  static fromJson(json: any): User {
    return new User(
      json.id,
      json.email,
      json.name,
      json.address,
      json.token,
      json.isAdmin
    );
  }
}