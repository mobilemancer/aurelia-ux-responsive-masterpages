import { autoinject } from 'aurelia-framework';
import { UxResponsiveUtilities } from '@aurelia-ux/grid';

@autoinject
export class TopBar {
  constructor(public uxResponsive: UxResponsiveUtilities) { }
}

