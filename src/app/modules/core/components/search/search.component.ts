import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../input/input.component';
import { searchIconConfig, searchInputConfig } from './config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [InputComponent, IconComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchInputConfig = searchInputConfig;
  searchIconConfig = searchIconConfig;
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createFormControl();
  }

  createFormControl() {
    this.formGroup = this.formBuilder.group({
      search: ['', Validators.required]
    })
  }
}
