import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-link',
  templateUrl: './app-header-link.component.html',
  styleUrls: ['./app-header-link.component.scss']
})
export class AppHeaderLinkComponent {
  @Input()
  label: string;

  @Input()
  path: string[];

  active = '';

  onMouseEnter = (): void => {
    this.active = 'active';
  }

  onMouseLeave = (): void => {
    this.active = '';
  }
}
