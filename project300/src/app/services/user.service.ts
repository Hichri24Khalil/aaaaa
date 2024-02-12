import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';




import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { User } from '../shared/models/User';


const USER_KEY ='User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string = '';

  private userSubject =
  new BehaviorSubject<User>(this.getUserFromLocalStorage());
  currentUser : User | null=null;
  public userObservable:Observable<User>;
  constructor(private http:HttpClient) {
    this.userObservable=this.userSubject.asObservable();
  }
  getUser(): User | null {
    this.userSubject.subscribe((value:User)=>{
      this.currentUser=value;
    }) 
    console.log(this.currentUser);
    return this.currentUser;// Returns the current user or null
  }

  login(userLogin: IUserLogin): Observable<{ user: User, token: string }> {
    const headers2 = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<{ user: User, token: string }>(USER_LOGIN_URL, userLogin,{headers:headers2}).pipe(
      
      tap({
        next: (response) => {
          
          const { user, token } = response;
          console.log(user);
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.setToken(token);

          
        },
        error: (errorResponse) => {
          console.log(errorResponse)
        },
      })
    );
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }





  logout(){
  this.userSubject.next(new User('',"","","","",false));
  localStorage.removeItem(USER_KEY);
  window.location.reload();
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

private getUserFromLocalStorage():User{
  const userJson =localStorage.getItem(USER_KEY);
  console.log(userJson);
  if(userJson) return User.fromJson(userJson);
  return new User('',"","","","",false);
}

}
