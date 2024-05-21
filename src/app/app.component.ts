import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { slideInAnimation } from './animation';
import { AboutComponent } from './about/about.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MenuMobileComponent,
    AboutComponent,
    ProjectsComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'portifolio';
  contexts = inject(ChildrenOutletContexts);
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

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
