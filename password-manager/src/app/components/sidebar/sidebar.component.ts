// sidebar.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isSidebarVisible: boolean = true; // Tracks sidebar visibility

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Toggle sidebar visibility
  }
}
