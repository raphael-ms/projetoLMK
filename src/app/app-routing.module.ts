import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioComponent }      from './funcionario/funcionario.component';
import { CadastrarFuncionarioComponent }   from './cadastrar-funcionario/cadastrar-funcionario.component';
import { DetalhesFuncionarioComponent } from './detalhes-funcionario/detalhes-funcionario.component';
const routes: Routes = [
  { path: 'funcionarios', component: FuncionarioComponent },
  { path: '', redirectTo: '/cadastrar', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarFuncionarioComponent},
  { path: 'detalhes/:id', component: DetalhesFuncionarioComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
