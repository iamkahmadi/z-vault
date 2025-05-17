import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';  // Import RouterOutlet for nested routes
import { SidebarComponent } from '../sidebar/sidebar.component';  // Assuming sidebar exists

@Component({
  selector: 'app-logged-in-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './logged-in-layout.component.html',
  styleUrls: ['./logged-in-layout.component.css']
})
export class LoggedInLayoutComponent {
  constructor() {}
}
