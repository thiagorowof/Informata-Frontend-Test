import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export class CrudService<T> {
  constructor(protected http: HttpClient, private URL_API: string) {
  }

  list(): Observable<T[]> {
    return this.http.get<T[]>(this.URL_API).pipe(take(1));
  }

  loadById(id: number): Observable<T> {
    return this.http.get<T>(`${this.URL_API}/${id}`).pipe(take(1));
  }

  private save(record: T): Observable<T> {
    return this.http.post<T>(this.URL_API, record).pipe(take(1));
  }

  private update(record: T): Observable<T> {
    return this.http
      .put<T>(`${this.URL_API}/${record['id']}`, record)
      .pipe(take(1));
  }

  saveOrUpdate(record: T): Observable<T> {
    if (record['id']) {
      return this.update(record);
    }
    return this.save(record);
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.URL_API}/${id}`).pipe(take(1));
  }
}
