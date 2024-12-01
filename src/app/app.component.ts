import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/header/components/view/view.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor (private http: HttpClient) { }
  
  ngOnInit(): void {
    this.http.get('http://localhost:5000/home').subscribe((data: any) => {console.log(data)});
  }
}
