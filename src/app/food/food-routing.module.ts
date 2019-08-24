import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { OptionsComponent } from './options/options.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FoodCreateComponent } from './food-create/food-create.component';
const routes: Routes = [
    { path: 'food', component: FoodMenuComponent },
    { path: 'food/create', component: OptionsComponent },

    {
        path: 'food/update/:id',
        component: OptionsComponent
    },
    {
        path: 'food/gallery',
        component: GalleryComponent
    },
    { path: 'food/delete/:id', component: FoodMenuComponent },
    { path: 'food/creator', component: FoodCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FoodRoutingModule { }
