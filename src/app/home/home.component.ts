import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenuMobileComponent } from '@app/menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuMobileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  openMenuMobile = signal(false);
  downloadCV() {
    let link = document.createElement('a');

    link.setAttribute('type', 'hidden');
    link.href = 'assets/resume_amanda.pdf';
    link.download = 'resume_amanda.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
