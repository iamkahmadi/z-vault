import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // 👈 Add this
import { PasswordService } from '../../services/password.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-password-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // 👈 Add RouterModule
  templateUrl: './password-list.component.html',
})
export class PasswordListComponent {
  passwords: any[] = [];
  newPassword = { title: '', username: '', password: '' };
  showAddForm = false;

  constructor(
    private passwordService: PasswordService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loadPasswords();
  }

  loadPasswords() {
    this.passwordService.getPasswords().subscribe({
      next: (data) => (this.passwords = data),
      // error: () => this.authService.logout()
    });
  }

  addPassword() {
    this.passwordService.addPassword(this.newPassword).subscribe({
      next: () => {
        this.loadPasswords();
        this.newPassword = { title: '', username: '', password: '' };
        this.showAddForm = false;
      }
    });
  }

  deletePassword(id: string) {
    this.passwordService.deletePassword(id).subscribe({
      next: () => this.loadPasswords()
    });
  }

  // Copy to Clipboard Function
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      alert('Failed to copy: ' + err);
    });
  }

}
