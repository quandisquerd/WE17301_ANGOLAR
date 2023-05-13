import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './componets/Product/product.component';
import { AppRoutingsModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
