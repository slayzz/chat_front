import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    SimpleFormComponent,
  ],
  exports: [
    PageNotFoundComponent,
    SimpleFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CommonComponentsModule {
}
