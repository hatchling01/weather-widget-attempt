import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForecastWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastWidgetMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
