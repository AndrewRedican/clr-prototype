import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettingStartedComponent } from './getting-started.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: GettingStartedComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [GettingStartedComponent]
})
export class GettingStartedModule { }
