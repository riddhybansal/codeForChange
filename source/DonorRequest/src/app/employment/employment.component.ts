import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { IJob } from 'src/shared/models/job.model';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss'],
})
export class EmploymentComponent implements OnInit {
  jobs: any;
  loading = true;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getJobs()
      .pipe(delay(500))
      .subscribe((res) => {
        this.jobs = res;
        this.loading = false;
      });
  }

  getTagArray(tags: string): string[] {
    return tags.split(',');
  }

  getJobs(): Observable<IJob> {
    return this.httpClient.get('assets/data/jobs.json');
  }
}
