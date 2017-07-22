import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { DialogsModule } from './dialog/dialogs.module';
import { OnlyEnglishPipe } from './only-english.pipe';
import { DialogComponent } from './dialog2/dialog.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    OnlyEnglishPipe,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    FormsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCardModule,
    MdGridListModule,
    DialogsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
