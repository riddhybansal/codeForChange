import { Component } from '@angular/core';
import { GlobalValuesService } from 'src/shared/global-values.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'donor-requestor-ui';
  transparentHeader:boolean=false;
  isHomeComponent:boolean=false;
  constructor(
    private globalValuesService: GlobalValuesService 
    
  ) {
    this.globalValuesService.transparentHeader.subscribe(
      (value:boolean) =>{
        this.transparentHeader=value;
      }
    )
    this.globalValuesService.isHomeComponent.subscribe(
      (value:boolean) =>{
        this.isHomeComponent=value;
      }
    )
   }

}
