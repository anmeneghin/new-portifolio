import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `<a
      class="semi-transparent-button btn-right"
      [routerLink]="['/skills']"
      >Skills <i class="fa-solid fa-angles-right"></i
    ></a>
    <div class="outline">
      <div class="card-home">
        <div class="inner">
          <div class="front">
            <h1 class="titulo-home">Amanda Meneghin</h1>
          </div>
          <div class="back">
            <img src="https://avatars.githubusercontent.com/u/57951450?v=4" />
            <h2 class="titulo-home">Amanda Meneghin</h2>
            <p>Front-end developer</p>
          </div>
        </div>
      </div>
    </div>`,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
