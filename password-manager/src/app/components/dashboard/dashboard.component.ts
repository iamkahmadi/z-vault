import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  userEmail = '';
  passwordCount = 0;

  constructor(private authService: AuthService, private passwordService: PasswordService, private router: Router) {}

  ngOnInit() {
    // const user = this.authService.getCurrentUser(); // Assuming user is stored in localStorage or service
    const user = {
      email: "check@gmail.com"
    }
    this.userEmail = user?.email || 'Unknown';
    this.loadPasswordCount();
  }

  loadPasswordCount() {
    this.passwordService.getPasswords().subscribe({
      next: (data) => {
        this.passwordCount = data.length;
      }
    });
  }

  goToChangePassword() {
    this.router.navigate(['/passwords']);
  }

  logout() {
    this.authService.logout();
  }
}
