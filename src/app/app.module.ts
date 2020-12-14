import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingRoutingModule, routes } from './app-routing/app-routing-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {LanguageTranslateLoader} from './utils/LanguageTranslateLoader';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppRoutingRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useClass: LanguageTranslateLoader
      }
    })
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
