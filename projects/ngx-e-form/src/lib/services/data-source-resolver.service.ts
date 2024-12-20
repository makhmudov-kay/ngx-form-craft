import { Injectable } from '@angular/core';
import { Observable, of, isObservable } from 'rxjs';
import { DataSourceType } from '../models/data-source.type';

@Injectable({ providedIn: 'root' })
export class DataSourceResolverService {
  resolveDataSource(
    dataSource: DataSourceType
  ): Observable<Array<{ label: string; value: any }>> {
    if (isObservable(dataSource)) {
      return dataSource;
    }
    return of(dataSource);
  }
}
