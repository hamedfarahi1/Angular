import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GetTimeValue } from './getTime.pipe';
import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { Value } from './ValuePipe.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [Value, GetTimeValue],
  imports: [CommonModule,
    MatDialogModule,
    BrowserModule,
    FormsModule],
  providers: [],
  exports: [
    CommonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
    BrowserModule,
    HttpClientModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    DpDatePickerModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GetTimeValue,
    Value,
    HttpClientModule,
    MatPaginatorModule, MatDatepickerModule
  ]
})
export class SharedModule { }
