import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuerreroListComponent } from './guerrero-list/guerrero-list.component';
import { GuerreroEditComponent } from './guerrero-edit/guerrero-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuerreroCreateComponent } from './guerrero-create/guerrero-create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GuerreroDetailComponent } from './guerrero-detail/guerrero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GuerreroListComponent,
    GuerreroEditComponent,
    GuerreroCreateComponent,
    NavbarComponent,
    GuerreroDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
