import { Funcionario } from './funcionario';
import { Injectable } from '@angular/core';

@Injectable()
export class BancoFuncionario {

//POVOANDO O BANCO PARA TESTES INICIAIS.
public funcionarios: Funcionario[] = [
  { id: 1, nome: 'Raphael', funcao: 'Engenheiro', empresa: 'Halliburton', dataEmbarque: new Date("02-01-2018"), dataDesembarque: new Date("02-14-2018")},
  { id: 2, nome: 'Marcus', funcao: 'Engenheiro', empresa: 'Halliburton', dataEmbarque: new Date("02-04-2018"), dataDesembarque: new Date("02-14-2018")},
  { id: 3, nome: 'Andrei', funcao: 'Engenheiro', empresa: 'Halliburton', dataEmbarque: null, dataDesembarque: null},
  { id: 4, nome: 'Wagner', funcao: 'Engenheiro', empresa: 'Halliburton', dataEmbarque: null, dataDesembarque: null},
  { id: 5, nome: 'Tony', funcao: 'Engenheiro', empresa: 'Halliburton', dataEmbarque: null, dataDesembarque: null},
  { id: 6, nome: 'Pedro', funcao: 'Engenheiro', empresa: 'Halliburton', dataEmbarque: null, dataDesembarque: null},
  { id: 7, nome: 'Roberto', funcao: 'Engenheiro', empresa: 'Halliburton', dataEmbarque: null, dataDesembarque: null},
];

}
