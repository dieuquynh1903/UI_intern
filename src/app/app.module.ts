import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DefautComponent } from './layouts/defaut/defaut.component';
// import { DashboardComponent } from './modules/dashboard/dashboard.component';
//import {MatButtonModule} from '@angular/material/button';
import { DefautModule } from './layouts/defaut/defaut.module';


@NgModule({
  declarations: [
    AppComponent,
   // EmpAddEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //MatButtonModule
    DefautModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
