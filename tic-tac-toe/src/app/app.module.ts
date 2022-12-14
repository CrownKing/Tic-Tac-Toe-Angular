import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspacoComponent } from './espaco/espaco.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';

@NgModule({
  declarations: [
    AppComponent,
    EspacoComponent,
    TabuleiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
