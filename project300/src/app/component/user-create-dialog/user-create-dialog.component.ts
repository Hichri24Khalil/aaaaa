import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserModel } from '../user/user.model';



@Component({
  selector: 'app-User-create-dialog',
  templateUrl: 'User-create-dialog.component.html',
  styleUrls: ['User-create-dialog.component.scss'],
})
export class UserCreateDialogComponent {
  newUser: UserModel = new UserModel('', '', '', '', '', false);

  constructor(public dialogRef: MatDialogRef<UserCreateDialogComponent>) {}

  onSaveClick(): void {
    this.dialogRef.close(this.newUser);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
