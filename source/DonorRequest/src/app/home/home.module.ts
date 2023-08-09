import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home.component';
import { MatCardModule} from "@angular/material/card";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CarouselModule,
    MatCardModule,
    RouterModule

  ]
})
export class HomeModule { }
