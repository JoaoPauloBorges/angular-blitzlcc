import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carrousel } from '../../../shared/models/carrousel';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  urlrender = environment.backendrUrl + 'files/image/';

  logoPath: Observable<string>;
  invertColor = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.logoPath = this.http.get<Carrousel>(environment.backendrUrl + 'carrousel/logo', {observe: 'body'})
    .pipe(tap(resp => this.invertColor = resp.invertColor),
      map( resp => this.urlrender + resp.imagePath)
    );
  }
}