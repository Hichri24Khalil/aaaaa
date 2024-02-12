import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { USERS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class UserGestionService {

  constructor(private http: HttpClient) { }
  Users: User[] = [
    
  ]
  createUser(UserData: any): Observable<any> {
    console.log(UserData);
    
    return this.http.post<any>(`${USERS_URL}/register`, UserData).pipe(
      
      tap({
        next: (response) => {
          console.log(response);
        },
        error: (errorResponse) => {
          console.log(errorResponse)
        },
      })
    );
  }
  deleteUser(UserId: string): Observable<void> {
    return this.http.delete<void>(`${USERS_URL}/remove/${UserId}`).pipe(
      tap({
        next: (response) => {
          console.log(response);
          
        },
        error: (errorResponse) => {
          console.log(errorResponse)
        },
      })
    );
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${USERS_URL}/`).pipe(
      
      tap({
        next: (response) => {
          this.Users=response;
          console.log(response);

        },
        error: (errorResponse) => {
          console.log(errorResponse)
        },
      })
    );
  }
  
  editUser(UserId: string, updatedData: any): Observable<User> {
    return this.http.put<User>(`${USERS_URL}/edit/${UserId}`, updatedData).pipe(
      
      tap({
        next: (response) => {
          console.log(response);
        },
        error: (errorResponse) => {
          console.log(errorResponse)
        },
      })
    );
  }
}
