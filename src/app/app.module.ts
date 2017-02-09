import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { GridColumnFilterComponent } from './grid-column-filter.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, GridColumnFilterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
