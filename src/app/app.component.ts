import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileIconComponent } from './shared/profile-icon/profile-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileIconComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'social-links-profile-main';

  links = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram"
  ];
}
