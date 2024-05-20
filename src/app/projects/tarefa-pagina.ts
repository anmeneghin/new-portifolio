import { PaginacaoPagina } from './pagination/paginacao-pagina';
import { Project } from './project';

export interface ProjectPagina extends PaginacaoPagina {
  itens: Project[];
}
