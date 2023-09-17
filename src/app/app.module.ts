import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorDialogComponent } from './pages/components/error-dialog/error-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NotFoundComponent } from './pages/404/404.component';
import { BodyComponent } from './pages/layouts/body/body.component';
import { HeaderComponent } from './pages/layouts/header/header.component';
import { IndexComponent } from './pages/freelancer/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './pages/components/user/user-card.component';
import { UpdateComponent } from './pages/freelancer/update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './pages/freelancer/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent,
    NotFoundComponent,
    BodyComponent,
    HeaderComponent,
    IndexComponent,
    UserCardComponent,
    UpdateComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
