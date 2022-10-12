import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { ElementListComponent } from './components/element-list/element-list.component';
import { CreateElementComponent } from './components/create-element/create-element.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NewComponentComponent } from './components/new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionListComponent,
    ElementListComponent,
    CreateElementComponent,
    NavigationComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
