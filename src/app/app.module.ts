import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DebugComponent } from './debug.component';
import { LightsComponent } from './lights/lights.component';
import { OutletsService } from './outlets.service';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DebugComponent,
    LightsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    OutletsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
