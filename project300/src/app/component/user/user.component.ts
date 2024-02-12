import {  Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import {MatIconModule} from '@angular/material/icon';

import { UserModel } from './user.model';
import { UserCreateDialogComponent } from '../user-create-dialog/user-create-dialog.component';
import { UserGestionService } from 'src/app/services/user-gestion.service';
import { User } from 'src/app/shared/models/User';
@Component({
  selector: 'app-ngbd-alert',
  standalone: true,
  imports: [ NgFor, NgIf,FormsModule,MatIconModule],
  templateUrl: 'User.component.html',
  styleUrls : ['User.component.scss'],
  styles: [
    
  ],
})
export class UserComponent {
  images : String[] = [
    'assets/images/UserModels/UserModel1.jpg',
    'assets/images/UserModels/UserModel2.jpg',
    'assets/images/UserModels/UserModel3.jpg',
    'assets/images/UserModels/UserModel4.jpg',
    'assets/images/UserModels/UserModel5.jpg',
  ];
 
  constructor(public dialog: MatDialog,public _userGestion:UserGestionService) {}
  filteredUsers: User[] = this._userGestion.Users;
  newUser: UserModel = new UserModel('', '', '', '', '', false);
  searchTerm: string = '';
  editingUserIndex: number = -1;
  ngOnInit():void{
    this.getUsers();
  }
  getUsers(): void {
    this._userGestion.getUsers().subscribe(
      (users) => {
        this.filteredUsers=users;
        
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  addUser() {
    if (
      this.newUser.name &&
      this.newUser.email &&
      this.newUser.password &&
      this.newUser.address
    ) {
      
      this.newUser = new UserModel('', '', '', '', '', false); // Reset the newUserModel object
    }
  }

  
  chooseRandomElement(): String  {
    
  
    const randomIndex = Math.floor(Math.random()*4); // Generate a random index
    return 'assets/images/UserModels/UserModel4.jpg'; // Return the element at the random index
  }

 
  

  editUser(userId: string, updatedData: any) {
    this._userGestion.editUser(userId, updatedData).subscribe(
      (editedProduct) => {
        // Handle successful product edit response here
        console.log('User edited successfully:', editedProduct);

        // You can perform further actions, such as updating the UI
      },
      (error) => {
        // Handle product edit error here
        console.error('User edit failed:', error);

        // Display an error message to the user if needed
      }
    );
  }

  

  removeUser(userId: string) {
    this._userGestion.deleteUser(userId).subscribe(
      () => {
        // Handle successful product deletion response here
        console.log('User deleted successfully');
        this.filteredUsers=this.filteredUsers.filter(item => item.id !== userId);

        // You can perform further actions, such as updating the UI
      },
      (error) => {
        // Handle product deletion error here
        console.error('User deletion failed:', error);

        // Display an error message to the user if needed
      }
    );
  }
  
  applyFilter(): void {
    // Filter the Product list based on the search term
    this.filteredUsers = this._userGestion.Users.filter((User) =>
      User.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(UserCreateDialogComponent, {
      width: '400px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      
        if (result.name != "" && result.email != "") {
          this._userGestion.createUser(result).subscribe(() =>{
            console.log("shit");
            
          });
        }
      }
    );
  }
}

