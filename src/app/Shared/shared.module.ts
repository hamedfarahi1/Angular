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
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NumberInputDirective } from './number-input.directive';



@NgModule({
  declarations: [Value, GetTimeValue, NumberInputDirective],
  imports: [CommonModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
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
    MatPaginatorModule,
    MatDatepickerModule,
    MatIconModule,
    MatMenuModule,
    MatCarouselModule,
    NumberInputDirective
  ]
})
export class SharedModule { }
