import { Routes } from '@angular/router';
import { ListagemNotasComponent } from './listar/listagem-notas.component';
import { CadastroNotaComponent } from './cadastrar/cadastro-nota.component';
import { EdicaoCategoriaComponent } from '../categorias/editar/edicao-categoria.component';
import { ExclusaoCategoriaComponent } from '../categorias/excluir/exclusao-categoria.component';

export const notasRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  { path: 'listar', component: ListagemNotasComponent },
  { path: 'cadastrar', component: CadastroNotaComponent },
  { path: 'editar/:id', component: EdicaoCategoriaComponent },
  { path: 'excluir/:id', component: ExclusaoCategoriaComponent },
];
