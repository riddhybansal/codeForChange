import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { delay, Observable } from 'rxjs';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
})
export class DonationComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  donations: any;
  loading = true;

  ngOnInit(): void {
    this.getDonations()
      .pipe(delay(500))
      .subscribe((res) => {
        this.donations = res;
        this.loading = false;
      });
  }

  getDonations(): Observable<any> {
    return this.httpClient.get('assets/data/donations.json');
  }
}
