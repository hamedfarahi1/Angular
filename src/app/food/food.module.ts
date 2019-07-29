import { OptionsComponent } from './options/options.component';
import { TableHmdComponent } from './../menu/table-hmd/table-hmd.component';
import { MenuModule } from './../menu/menu.module';
import { SharedModule } from '../Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRoutingModule } from './food-routing.module';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
    declarations: [
        OptionsComponent,
        FoodMenuComponent,
        GalleryComponent
    ],
    providers: [FormData],
    imports: [CommonModule, FoodRoutingModule, SharedModule, MenuModule, FormsModule],
    entryComponents: [TableHmdComponent]
})
export class FoodModule { }
