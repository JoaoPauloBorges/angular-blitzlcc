import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paper } from '../../shared/models/paper';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


const API = 'api/papers/topic/';

@Injectable({ providedIn: 'root' })
export class PaperService {


  constructor(private http: HttpClient) { }

  listPaperBySubject(subjectId: string): Observable<Paper[]> {
    return this.http.get<Paper[]>(API + subjectId);
  }
}

