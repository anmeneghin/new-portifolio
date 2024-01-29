import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a class="semi-transparent-button btn-left" [routerLink]="['/home']"
      ><i class="fa-solid fa-angles-left"></i> Home
    </a>
    <a class="semi-transparent-button btn-right" [routerLink]="['/about']"
      >About <i class="fa-solid fa-angles-right"></i
    ></a>

    <div class="cards grid grid-cols-1 gap-10 md:grid-cols-2">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h2 class="text-white card-title">Languages</h2>
          <div class="grid grid-cols-1 gap-1 md:grid-cols-2">
            <span class="font-semibold shadow-md badge badge-lg badge-success"
              >Javascript</span
            ><span class="font-semibold shadow-md badge badge-lg badge-success"
              >Typescript</span
            ><span class="font-semibold shadow-md badge badge-lg badge-success"
              >Php</span
            >
          </div>
        </div>
      </div>
      <div
        class="card bg-gradient-to-br from-purple-900 to-fuchsia-800 shadow-md hover:shadow-lg transition-shadow duration-300 card"
        style="width: 18rem;"
      >
        <div class="card-body">
          <h2 class="text-white card-title">Front-end</h2>
          <div class="grid grid-cols-1 gap-1 md:grid-cols-2">
            <span class="font-semibold shadow-md badge badge-lg badge-success"
              >Angular 17+</span
            ><span class="font-semibold shadow-md badge badge-lg badge-success"
              >Scss</span
            ><span class="font-semibold shadow-md badge badge-lg badge-success"
              >Flexbox</span
            >
            <span class="font-semibold shadow-md badge badge-lg badge-success"
              >Grid layout</span
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {}
