import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { cartIcon, favoriteIcon, signIn, signOut, userIcon } from './config';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconComponent } from '../../../core/components/icon/icon.component';
import { DialogComponent } from '../../../core/components/dialog/dialog.component';

@Component({
  selector: 'app-navigation-icons',
  standalone: true,
  imports: [MatMenuModule, ReactiveFormsModule, IconComponent],
  templateUrl: './navigation-icons.component.html',
  styleUrl: './navigation-icons.component.scss'
})
export class NavigationIconsComponent {
  userIcon = userIcon;
  cartIcon = cartIcon;
  favoriteIcon = favoriteIcon;
  signIn = signIn;
  signOut = signOut;
  logged = false;

  formGroup!: FormGroup;

  constructor (private dialog: MatDialog, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.formGroup,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
