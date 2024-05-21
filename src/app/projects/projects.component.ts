import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
} from '@angular/core';
import { Project } from './project';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projetos = signal<Project[]>([
    {
      id: '1',
      nome: 'Community IoT Device Aplicação',
      descricao: 'Projeto Gerenciamento de Dispositivos IoT',
      imagemPath: '/assets/projetos/iot.png',
      linkGitHub: 'https://github.com/anmeneghin/gerencimento-dispositivos-iot',
    },
    {
      id: '2',
      nome: 'EBOOK Gerado por I.A.s',
      descricao:
        'Projeto com o objetivo de gerar um ebook digital com as facilidades das ferramentas de IA. ',
      imagemPath: '/assets/projetos/ebook-ia.png',
      linkGitHub:
        'https://github.com/anmeneghin/prompts-recipe-to-create-a-ebook',
    },
    {
      id: '3',
      nome: 'Artigo técnico gerado por I.A.s',
      descricao:
        'Projeto com o objetivo de gerar um artigo técnico com um layout rico, leitura agradável e com foco em promover sua autoridade técnica.',
      imagemPath: '/assets/projetos/artigo.png',
      linkGitHub:
        'https://github.com/anmeneghin/prompts-for-article-generate-by-ia',
    },
    {
      id: '4',
      nome: 'Podcast Gerado por I.A.s',
      descricao:
        'Projeto com o objetivo de gerar um podcast utilizando ferramentas de IA através de prompts mais trabalhado.',
      imagemPath: '/assets/projetos/podcast.jpeg',
      linkGitHub:
        'https://github.com/anmeneghin/prompts-for-podcast-generate-by-ia',
    },
  ]);

  length = this.projetos().length;
  pageSize = 4;
  pageIndex = 0;
  pageSizeOptions = [4, 8, 24];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
}
