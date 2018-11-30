import { autoinject } from "aurelia-framework";
import { UxResponsiveUtilities } from '@aurelia-ux/grid';

@autoinject
export class Adaptive {
  constructor(public uxResponsive: UxResponsiveUtilities) { }
}
