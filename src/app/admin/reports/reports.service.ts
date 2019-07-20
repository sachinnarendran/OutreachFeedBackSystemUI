import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';

@Injectable()
export class ReportsService {
    constructor(private apiService: ApiService) {
    }

    getEventSummary(): Observable<any> {
        return this.apiService.get("Reports/GetEventSummary");
    }
}