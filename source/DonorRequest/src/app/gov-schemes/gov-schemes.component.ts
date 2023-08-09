import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-gov-schemes',
  templateUrl: './gov-schemes.component.html',
  styleUrls: ['./gov-schemes.component.scss']
})
export class GovSchemesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  schemes: any;
  loading = true;
  ngOnInit(): void {
    forkJoin([this.getSchemes()])
      .pipe(delay(500))
      .subscribe((res) => {
        this.schemes = res[0];
        this.loading = false;
      });

}
getSchemes(): Observable<any> {
  return this.httpClient.get('assets/data/schemes.json');
}

}