import { Images } from './../../model/placeholder';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  images: any;
  error: any;
  constructor(private crudservice: CrudService) { 
    this.getter();
  }
  
  ngOnInit(): void {
  }

  getter(){
    this.crudservice.getFotos().subscribe((data: Images) =>{
    this.images = data;
    console.log('o data que recebemos', data);
    console.log('A variavel que preenchemos', this.images);
    }, (error: any) =>{
      this.error = error;
      console.error("ERROR: ", error);
    });
  }

}
