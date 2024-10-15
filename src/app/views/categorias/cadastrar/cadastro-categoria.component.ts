import { Component } from '@angular/core';
import { FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { CadastroCategoria } from '../models/categoria.models';
import { CategoriaService } from '../services/categoria.service';
import { NgIf } from '@angular/common';
import { NoticacaoService } from '../../../core/notificacao/notificacao.service';

@Component({
  selector: 'app-cadastro-categoria',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './cadastro-categoria.component.html',
})
export class CadastroCategoriaComponent {
  categoriaForm: FormGroup;

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private notificacao: NoticacaoService
  ) {
    this.categoriaForm = new FormGroup({
      titulo: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  get titulo(){
    return this.categoriaForm.get('titulo');
  }

  cadastrar() {
    const novaCategoria: CadastroCategoria = this.categoriaForm.value;

    this.categoriaService.cadastrar(novaCategoria).subscribe((res) => {
      this.notificacao.sucesso(
        `O registro ID [${res.id}] foi cadastrado com secusso!`
      );

      this.router.navigate(['/categorias']);
    });
  }
}
