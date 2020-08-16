import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ListService} from '../service/list.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  produtos: Produto[] = [];
  
  constructor(private produtoService: ListService) {}

  getAll(){
    this.produtoService.getAll().subscribe(
      (result: any) => {
        for (let i = 0; i < result.length; i++){
          let produto = result[i] as Produto;
          this.produtos.push(produto);
        }

      },
      error => {
        console.log(error);
      }
    );
    
  }
  ngOnInit() {
    this.getAll();
  }
}