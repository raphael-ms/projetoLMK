import { Component, OnInit, Input } from '@angular/core';
import { Funcionario } from '../funcionario';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BancoFuncionario } from '../banco-funcionarios';
import { Validacao } from '../validacao';

import { FuncionarioService }  from '../funcionario.service';

@Component({
  selector: 'lmk-detalhes-funcionario',
  templateUrl: './detalhes-funcionario.component.html',
  styleUrls: ['./detalhes-funcionario.component.css']
})
export class DetalhesFuncionarioComponent implements OnInit {
  funcionario: Funcionario;
  converterData: Date;


    constructor(private route: ActivatedRoute,
                private funcionarioService: FuncionarioService,
                private location: Location,
                private bancoFuncionario: BancoFuncionario,
                private validacao: Validacao) { }

    ngOnInit() {
      this.getFuncionario();
    }

    getFuncionario(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionarioService.getFuncionario(id)
      .subscribe(funcionario => this.funcionario = funcionario);
  }

  voltar(): void {
      this.location.back();
  }

  embarcarFuncionario(dataEmbarque: string){
    const id = +this.route.snapshot.paramMap.get('id');
    var converterDataEmbarque = new Date(dataEmbarque);
    converterDataEmbarque.setDate(converterDataEmbarque.getDate() +1);
    var funcionarioOriginal = this.funcionarioService.getFuncionarioObj(id);
    if(this.validacao.validadorDeDataEmbarque(dataEmbarque,converterDataEmbarque)){
      var funcionarioAtualizado = funcionarioOriginal;
      funcionarioAtualizado.dataEmbarque = converterDataEmbarque;
      funcionarioAtualizado.dataDesembarque = null;
      this.funcionarioService.editarFuncionario(id,funcionarioAtualizado);

    }

  }

  desembarcarFuncionario(dataDesembarque: string){
    const id = +this.route.snapshot.paramMap.get('id');
    var converterDataDesembarque = new Date(dataDesembarque);
    var funcionarioOriginal = this.funcionarioService.getFuncionarioObj(id);
    converterDataDesembarque.setDate(converterDataDesembarque.getDate() +1);
    if(this.validacao.validadorDeDataDesembarque(dataDesembarque,funcionarioOriginal.dataEmbarque,converterDataDesembarque)){
      var funcionarioAtualizado = funcionarioOriginal;
      funcionarioAtualizado.dataDesembarque = converterDataDesembarque;
      this.funcionarioService.editarFuncionario(id,funcionarioAtualizado);
    }
  }

}
