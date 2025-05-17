import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-password-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-detail.component.html'
})
export class PasswordDetailComponent {
  id = '';
  password: any = { title: '', username: '', password: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private passwordService: PasswordService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit() {
    this.passwordService.getPassword(this.id).subscribe((data) => {
      this.password = data;
    });
  }

  updatePassword() {
    this.passwordService.updatePassword(this.id, this.password).subscribe(() => {
      this.router.navigate(['/passwords']);
    });
  }
}
