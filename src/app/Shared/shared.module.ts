import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FormioModule } from 'angular-formio';
import { RatingModule } from 'ng-starrating';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { GetTimeValue } from './getTime.pipe';
import { NumberInputDirective } from './number-input.directive';
import { RateDialogComponent } from './rate-dialog/rate-dialog.component';
import { RateComponent } from './rate/rate.component';
import { Value } from './ValuePipe.pipe';


@NgModule({
  declarations: [Value, GetTimeValue, NumberInputDirective, GenericFormComponent, RateComponent, RateDialogComponent],
  imports: [CommonModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, MatSelectModule,
    MatCheckboxModule,
    DpDatePickerModule,
    RatingModule,
    MatIconModule,
    FormioModule
  ],
  providers: [],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    CommonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserModule,
    HttpClientModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule, MatSelectModule,
    DpDatePickerModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GetTimeValue,
    Value,
    HttpClientModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatIconModule,
    MatMenuModule,
    MatCarouselModule,
    NumberInputDirective, GenericFormComponent,
    RateComponent,
    FormioModule
  ],
  entryComponents: [RateDialogComponent]
})
export class SharedModule { }
