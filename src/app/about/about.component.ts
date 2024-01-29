import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: ` <a
      class="semi-transparent-button btn-left"
      [routerLink]="['/skills']"
      ><i class="fa-solid fa-angles-left"></i> Skills
    </a>
    <p>about works!</p>`,
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
