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
      nome: '2Community IoT Device Aplicação',
      descricao: 'Projeto Gerenciamento de Dispositivos IoT',
      imagemPath: '/assets/projetos/iot.png',
      linkGitHub: 'https://github.com/anmeneghin/gerencimento-dispositivos-iot',
    },
    {
      id: '3',
      nome: '3Community IoT Device Aplicação',
      descricao: 'Projeto Gerenciamento de Dispositivos IoT',
      imagemPath: '/assets/projetos/iot.png',
      linkGitHub: 'https://github.com/anmeneghin/gerencimento-dispositivos-iot',
    },
    {
      id: '4',
      nome: '4Community IoT Device Aplicação',
      descricao: 'Projeto Gerenciamento de Dispositivos IoT',
      imagemPath: '/assets/projetos/iot.png',
      linkGitHub: 'https://github.com/anmeneghin/gerencimento-dispositivos-iot',
    },
    {
      id: '5',
      nome: '5Community IoT Device Aplicação',
      descricao: 'Projeto Gerenciamento de Dispositivos IoT',
      imagemPath: '/assets/projetos/iot.png',
      linkGitHub: 'https://github.com/anmeneghin/gerencimento-dispositivos-iot',
    },
    {
      id: '6',
      nome: '6Community IoT Device Aplicação',
      descricao: 'Projeto Gerenciamento de Dispositivos IoT',
      imagemPath: '/assets/projetos/iot.png',
      linkGitHub: 'https://github.com/anmeneghin/gerencimento-dispositivos-iot',
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
