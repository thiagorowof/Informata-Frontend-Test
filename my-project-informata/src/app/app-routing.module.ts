import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';

const routes: Routes = [
	{
		path: '',
		component: CadastroComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [ RouterModule ],
  	declarations: [],
 //  	imports: [
 //    	CommonModule
	// ]
})
export class AppRoutingModule { }
