import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AvatarModule } from 'ngx-avatar';
import { EmploymentRoutingModule } from './employment-routing.module';
import { EmploymentComponent } from './employment.component';
import { MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    EmploymentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EmploymentRoutingModule,
    CarouselModule,
    MatIconModule,
    AvatarModule,
    MatProgressSpinnerModule
  ]
})
export class EmploymentModule { }
