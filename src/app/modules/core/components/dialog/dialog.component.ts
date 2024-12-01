import { Component, Inject, inject, model } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { confirmPasswordInputConfig, emailInputConfig, nameInputConfig, passwordInputConfig } from './config';
import { InputComponent } from '../input/input.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    InputComponent
  ],
})
export class DialogComponent {
  nameInputConfig = nameInputConfig;
  emailInputConfig = emailInputConfig;
  passwordInputConfig = passwordInputConfig;
  confirmPasswordInputConfig = confirmPasswordInputConfig

  constructor (private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: FormGroup) { }
  
}
