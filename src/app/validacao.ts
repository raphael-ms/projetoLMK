import { Injectable } from '@angular/core';

@Injectable()
export class Validacao{

  validadorDeDatasCompleto(dataEmbarque: string, dataDesembarque: string): boolean{
    var converterDataEmbarque = new Date(dataEmbarque);
    var converterDataDesembarque = new Date(dataDesembarque);

    //ALGUMA DATA MAIOR QUE DIA ATUAL
    if (converterDataEmbarque.getTime() >= Date.now() || converterDataDesembarque.getTime() >= Date.now() ){
      alert("A DATA DE EMBARQUE E DESEMBARQUE DEVE SER MENOR OU IGUAL A DATA DE HOJE!");
      return false;
    }
    //DATA VAZIA
    if (!dataEmbarque){
      alert("INFORME A DATA DE EMBARQUE!");
      return false;
    }
    //DATA EMBARQUE > DESEMBARQUE
    if (converterDataEmbarque > converterDataDesembarque){
      alert("A DATA DE EMBARQUE DEVE SER MENOR QUE A DATA DE DESEMBARQUE");
      return false;
    }

    return true;
  }


    validadorDeDataDesembarque(campoData: string,dataEmbarque: Date, dataDesembarque: Date): boolean{
      var converterDataEmbarque = new Date(dataEmbarque);
      var converterDataDesembarque = new Date(dataDesembarque);

      if (!campoData){
        alert("PREENCHA A DATA CORRETAMENTE!");
        return false;
      }

      if (converterDataDesembarque.getTime() > Date.now()){
        alert("A DATA DEVE SER MENOR OU IGUAL A DATA DE HOJE!");
        return false;
      }
      if (converterDataEmbarque >= converterDataDesembarque){
        alert("A DATA DE DESEMBARQUE DEVE SER MAIOR QUE A DATA DE EMBARQUE");
        return false;
      }
      return true;
    }

    validadorDeDataEmbarque(campoData: string,dataEmbarque: Date): boolean{
      var converterDataEmbarque = new Date(dataEmbarque);

      if (!campoData){
        alert("PREENCHA A DATA CORRETAMENTE!");
        return false;
      }

      if (converterDataEmbarque.getTime() >= Date.now()){
        alert("A DATA DEVE SER MENOR OU IGUAL A DATA DE HOJE!");
        return false;
      }

      return true;
    }

}
