import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  onLogin() {
    this.http.post(`${this.apiUrl}/auth/login`, {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        this.message = 'Login successful!';
        console.log(res);
      },
      error: (err: any) => {
        this.message = 'Login failed. Please try again.';
        console.error(err);
      }
    });
  }
}
