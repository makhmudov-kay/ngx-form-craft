// projects/ngx-dynamic-forms/src/lib/models/data-source.type.ts
import { Observable } from 'rxjs';

export type DataSourceType =
  | Array<{ label: string; value: any }>
  | Observable<Array<{ label: string; value: any }>>;
