import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdNavbarComponent } from './product-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProdNavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProdNavbarComponent]
})
export class ProductNavbarModule { }
