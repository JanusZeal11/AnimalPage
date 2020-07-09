import { DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AnimalPageComponent } from './container/animal-page/animal-page.component';
import { PageSectionComponent } from './presentation/page-section/page-section.component';
import { PageItemComponent } from './presentation/page-item/page-item.component';
import { AnimalService } from './services/animal.service';
import { DictionaryService } from './services/dictionary.service';
import { PageLayoutService } from './services/page-layout.service';

@NgModule({
  declarations: [
    AppComponent,
    AnimalPageComponent,
    PageSectionComponent,
    PageItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [
    AnimalService,
    DictionaryService,
    PageLayoutService,
    DecimalPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
