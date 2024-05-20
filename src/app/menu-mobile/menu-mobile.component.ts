import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuMobileComponent {
  openMenu = model(false);
}
