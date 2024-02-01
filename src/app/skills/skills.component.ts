import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: ` <a
      class="semi-transparent-button btn-left"
      [routerLink]="['/home']"
      ><i class="fa-solid fa-angles-left"></i> Home
    </a>
    <div class="content">
      <h1 class="titulo mb-4">Skills</h1>
      <div class="cards grid grid-cols-1 gap-10 md:grid-cols-2">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h2 class="text-white card-title">Languages</h2>
            <div class="grid grid-cols-1 gap-1 md:grid-cols-2">
              <span class="font-semibold shadow-md badge badge-lg badge-success"
                >Javascript</span
              ><span
                class="font-semibold shadow-md badge badge-lg badge-success"
                >Typescript</span
              ><span
                class="font-semibold shadow-md badge badge-lg badge-success"
                >PHP</span
              >
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h2 class="text-white card-title">Front-end</h2>
            <div class="grid grid-cols-1 gap-1 md:grid-cols-2">
              <span class="font-semibold shadow-md badge badge-lg badge-success"
                >Angular 17+</span
              ><span
                class="font-semibold shadow-md badge badge-lg badge-success"
                >Single SPA</span
              ><span
                class="font-semibold shadow-md badge badge-lg badge-success"
                >Scss</span
              ><span
                class="font-semibold shadow-md badge badge-lg badge-success"
                >Bootstrap</span
              ><span
                class="font-semibold shadow-md badge badge-lg badge-success"
                >Flexbox</span
              >
              <span class="font-semibold shadow-md badge badge-lg badge-success"
                >Grid layout</span
              >
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h2 class="text-white card-title">Databases</h2>
            <div class="grid grid-cols-1 gap-1 md:grid-cols-2">
              <span class="font-semibold shadow-md badge badge-lg badge-success"
                >Oracle</span
              ><span
                class="font-semibold shadow-md badge badge-lg badge-success"
                >MySQL</span
              >
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h2 class="text-white card-title">Others</h2>
            <div class="grid grid-cols-1 gap-1 md:grid-cols-2">
              <span class="font-semibold shadow-md badge badge-lg badge-success"
                >Linux</span
              ><span
                class="font-semibold shadow-md badge badge-lg badge-success"
                >Docker</span
              >
              <span class="font-semibold shadow-md badge badge-lg badge-success"
                >Git</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="semi-transparent-button btn-right" [routerLink]="['/about']"
      >About <i class="fa-solid fa-angles-right"></i
    ></a>`,
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {}
