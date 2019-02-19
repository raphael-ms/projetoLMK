import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';
import { BancoFuncionario } from '../banco-funcionarios';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'lmk-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  funcionario: Funcionario;


  //RESETAR O FUNCIONARIO
  resetar(): void{
    this.funcionario = {id: null, nome: null, funcao: null, empresa: null,
                        dataEmbarque: null, dataDesembarque: null};
  }


  //ADICIONANDO NOVO FUNCIONARIO
    adicionarFuncionario(nome: string, funcao: string, empresa: string): void {
    this.resetar();
    //RETIRA OS ESPAÇOS EM BRANCO ANTES E DEPOIS DA STRING
    nome = nome.trim();
    funcao = funcao.trim();
    empresa = empresa.trim();

    this.funcionario.id = this.bancoFuncionario.funcionarios.length +1;
    this.funcionario.nome = nome;
    this.funcionario.empresa = empresa;
    this.funcionario.funcao = funcao;

    //SE HOUVER ALGUM CAMPO EM BRANCO, NÃO SALVA
    if (!nome || !funcao || !empresa ) { alert("Funcionário não salvo, falta de argumentos!"); return; }

    this.funcionarioService.adicionarFuncionario(this.funcionario);
    this.resetar();
    }


    voltar(): void {
        this.location.back();
    }

  constructor(private funcionarioService: FuncionarioService,
              private bancoFuncionario: BancoFuncionario,
              private route: ActivatedRoute,
              private location: Location,) { }

  ngOnInit() {
  }

}
