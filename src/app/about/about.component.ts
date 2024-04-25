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
            Front-end developer with experience in Angular and its applications
            in single SPA, focusing on the creation of new projects and
            optimizing the applications developed.
            <!-- Desenvolvedora Front-end com experiência em Angular e suas
            aplicações em single-spa, com foco na criação de novos projetos e na
            otimização das aplicações desenvolvidas. -->
            <br />
            I also have experience in PHP, refactoring and rewriting
            applications for optimize frontend performance and user experience.
            <br />
            As a resilient, cooperative and productive person, I am in constant
            learning, I enjoy working with styling applications and I always up
            to date with news about web design and web development.
            <!-- Também tenho experiencia em PHP, refatorando e reescrevendo
            aplicações para otimizar o desempenho do frontend e da experiencia do usuario. <br /> -->
            <!-- Como uma pessoa resiliente, cooperativa e produtiva, estou em
            constante aprendizado, gosto de trabalhar com estilização de
            aplicações e sempre busco estar a par de novidades sobre web desing
            e desenvolvimento web. -->
          </p>
          <p class="about-close">&lt;/about&gt;</p>
          <hr />
          <div class="info">
            <b>Age: </b> 25
            <br />
            <b>Email: </b>
            <a class="email" href="mailto:anm3219@gmail.com"
              ><font>anm3219&#64;gmail.com</font></a
            >
            <br />
            <b>Resume: </b>
            <a class="resume" (click)="downloadCV()">
              <i class="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
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
