import {TranslateLoader} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';
import * as json from './../languages/en_US.json';

export class LanguageTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(json.default);
  }
}
