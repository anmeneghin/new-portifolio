import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a class="semi-transparent-button btn-left" [routerLink]="['/skills']"
      ><i class="fa-solid fa-angles-left"></i> Skills
    </a>
    <div class="content">
      <h1 class="mb-4 titulo">About</h1>
      <div class="card">
        <div class="card-body">
          <p class="about-open">&lt;about&gt;</p>
          <p class="sobre">
            Desenvolvedora Front-end há 4 anos. Tenho experiência em Angular e
            suas aplicações em single-spa, sendo para desevolver novos projetos
            ou melhorar ainda mais o que foi desenvolvido, pois estou em
            constante aprendizado. Gosto de trabalhar com estilização de
            aplicações e aprecio buscar novidades sobre web desing. Tenho
            experiencia em PHP, refatorando aplicações para otimizar o
            desempenho de frontend.
          </p>
          <p class="about-close">&lt;/about&gt;</p>
          <hr />
          <div class="info">
            <b>Idade: </b> 25 anos
            <br />
            <b>Email: </b>
            <a class="email" href="mailto:anm3219@gmail.com"
              ><font>anm3219&#64;gmail.com</font></a
            >
            <br />
            <b>Currículo: </b> <a><i class="fa-solid fa-download"></i></a>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
