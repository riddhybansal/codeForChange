import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay } from 'rxjs';
import { IProduct } from 'src/shared/models/product.model';

@Component({
  selector: 'app-sell-portal',
  templateUrl: './sell-portal.component.html',
  styleUrls: ['./sell-portal.component.scss'],
})
export class SellPortalComponent implements OnInit {
  products: any;
  loading = true;

  constructor(public router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getProducts()
      .pipe(delay(500))
      .subscribe((res) => {
        this.products = res;
        console.log(this.products)
        this.loading = false;
      });
  }

  getProducts(): Observable<any> {
    return this.httpClient.get('assets/data/sellProducts.json');
  }
}
