import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLayoutComponent } from './new-layout.component';
import { RouterModule } from '@angular/router';


const routes = [{ path: '', component: NewLayoutComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [NewLayoutComponent]
})
export class NewLayoutModule { }
