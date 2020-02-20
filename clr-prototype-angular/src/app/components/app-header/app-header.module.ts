import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppHeaderLinkComponent } from '../app-header-link/app-header-link.component';

@NgModule({
    declarations: [AppHeaderComponent, AppHeaderLinkComponent],
    imports: [RouterModule],
    exports: [AppHeaderComponent]
})
export class AppHeaderModule { }
