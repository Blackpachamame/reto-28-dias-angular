import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { FormNewItemComponent } from './components/form-new-item/form-new-item.component';
import { CitiesComponent } from './components/cities/cities.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { ContactReactiveComponent } from './components/contact-reactive/contact-reactive.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormNewItemComponent,
    CitiesComponent,
    FilterPipe,
    ContactComponent,
    ContactReactiveComponent,
    HomeComponent,
    NavbarComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
