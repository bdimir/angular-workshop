import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListGenerator } from './shared/list-generator.service';
import { EmployeeListModule } from './employee-list/employee-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    EmployeeListModule
  ],
  providers: [ListGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }
