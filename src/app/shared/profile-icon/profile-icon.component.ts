import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-icon',
  standalone: true,
  imports: [],
  templateUrl: './profile-icon.component.html',
  styleUrl: './profile-icon.component.scss'
})
export class ProfileIconComponent {
  @Input() url_icon: string = "";
  @Input() name: string = "";
  @Input() address: string = "";
  @Input() slogan: string = "";
}
