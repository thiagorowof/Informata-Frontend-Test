import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any [], filterString: string, propNome: string): any[] {
    const resultado: any = []

    if(!value || filterString === '' || propNome === ''){
      return value
    }
    value.forEach((a:any)=>{
      if(a[propNome].trim().toLowerCase().includes(filterString.toLocaleLowerCase())) {
        resultado.push(a);
      }
    })

    return resultado

  }


}
