import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { INPUT_TYPE_MAPPER, InputComponentModel } from './input.component.model';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() data!: InputComponentModel;
  @Input() formGroup!: FormGroup;
  @Input() formControl!: string;

  INPUT_TYPE_MAPPER = INPUT_TYPE_MAPPER;
}
