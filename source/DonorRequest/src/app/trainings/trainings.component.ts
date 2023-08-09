import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss'],
})
export class TrainingsComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  certifications: any;
  trainings: any;
  loading = true;
  ngOnInit(): void {
    forkJoin([this.getTrainings(), this.getCertifications()])
      .pipe(delay(500))
      .subscribe((res) => {
        this.trainings = res[0];
        this.certifications = res[1];
        this.loading = false;
      });
  }

  getTrainings(): Observable<any> {
    return this.httpClient.get('assets/data/trainings.json');
  }
  getCertifications(): Observable<any> {
    return this.httpClient.get('assets/data/certifications.json');
  }
}
