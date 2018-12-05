import { autoinject } from "aurelia-framework";
import { UxResponsiveUtilities } from '@aurelia-ux/grid';

@autoinject
export class OneColumn {
  constructor(public uxResponsive: UxResponsiveUtilities) { }
}
