import { Routes } from "@angular/router";
import { HomeComponent } from "./componets/Home/home.conponent";
import { ProductComponent } from "./componets/Product/product.component";
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';


const routes:Routes=[
    {path: '', component:HomeComponent},
    {path: 'product', component: ProductComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingsModule {}