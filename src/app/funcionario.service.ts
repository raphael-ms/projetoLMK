import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';
import { BancoFuncionario } from './banco-funcionarios';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {


  getFuncionario(id: number): Observable<Funcionario>{
    return of (this.bancoFuncionario.funcionarios.find(funcionario => funcionario.id === id));
  }

  getFuncionarioObj(id: number): Funcionario{
    return this.bancoFuncionario.funcionarios.find(funcionario => funcionario.id === id);
  }

  getFuncionarios(): Observable<Funcionario[]>{
    return of (this.bancoFuncionario.funcionarios);
  }


  adicionarFuncionario (funcionario: Funcionario): Observable<Funcionario> {
    this.bancoFuncionario.funcionarios.push(funcionario);
    return of (funcionario);
  }

  editarFuncionario (funcionarioOriginal: number, funcionarioAtualizado: Funcionario): Observable<Funcionario> {
    this.bancoFuncionario.funcionarios[funcionarioOriginal-1] = funcionarioAtualizado;
    return of (funcionarioAtualizado);
  }

  constructor(private bancoFuncionario: BancoFuncionario) {}
}
