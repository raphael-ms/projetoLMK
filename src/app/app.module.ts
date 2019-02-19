import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { DetalhesFuncionarioComponent } from './detalhes-funcionario/detalhes-funcionario.component';
import { BancoFuncionario } from './banco-funcionarios';
import { Validacao } from './validacao';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    DetalhesFuncionarioComponent,
    CadastrarFuncionarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    BancoFuncionario,
    Validacao
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
