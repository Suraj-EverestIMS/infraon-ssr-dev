import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoaderModule } from 'src/app/_directives/loader/loader.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CarouselModule,
    LoaderModule
  ]
})
export class HomepageModule { }
