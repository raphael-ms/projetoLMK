import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';
import { BancoFuncionario } from '../banco-funcionarios';
import { Validacao } from '../validacao';

@Component({
  selector: 'lmk-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
funcionarios: Funcionario[];
funcionario: Funcionario;
funcionariosEmbarcados: Funcionario[];
funcionariosDesembarcados: Funcionario[];

//FAZ BUSCA POR PERIODO DE EMBARQUE, INFORMANDO A DATA DE EMBARQUE E DESEMBARQUE
  buscarPorPeriodo(dataEmbarque: string, dataDesembarque: string){
    var converterDataEmbarque = new Date(dataEmbarque);
    var converterDataDesembarque = new Date(dataDesembarque);

    if(this.validacao.validadorDeDatasCompleto(dataEmbarque, dataDesembarque)){
      this.funcionarios = this.bancoFuncionario.funcionarios
      .filter(funcionario => converterDataEmbarque <= funcionario.dataEmbarque
      && (converterDataDesembarque >= funcionario.dataDesembarque || dataDesembarque === ''));
    }
  }

  //BUSCA OS FUNCIONARIOS EMBARCADOS
  buscarPorFuncionariosEmbarcados(){
      this.funcionariosEmbarcados = this.bancoFuncionario.funcionarios
      .filter(funcionario => funcionario.dataEmbarque != null && funcionario.dataDesembarque === null);
      this.funcionarios = this.funcionariosEmbarcados;
  }

  //BUSCA OS FUNCIONARIOS DESEMBARCADOS
  buscarPorFuncionariosDesembarcados(){
      this.funcionariosDesembarcados = this.bancoFuncionario.funcionarios
      .filter(funcionario => (null === funcionario.dataDesembarque && funcionario.dataEmbarque === null)
                              || funcionario.dataDesembarque != null);
      this.funcionarios = this.funcionariosDesembarcados;
  }



//RETORNA A LISTA ATUALIZADA
getFuncionarios(): void {
  this.funcionarioService.getFuncionarios()
       .subscribe(funcionarios => this.funcionarios = funcionarios);
}

constructor(private funcionarioService: FuncionarioService,
            private bancoFuncionario: BancoFuncionario,
            private validacao: Validacao) { }

  ngOnInit() {
    this.buscarPorFuncionariosDesembarcados();
    this.buscarPorFuncionariosEmbarcados();
    this.getFuncionarios();
  }

}
