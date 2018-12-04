import { autoinject } from "aurelia-framework";
import { UxResponsiveUtilities } from '@aurelia-ux/grid';

@autoinject
export class TwoColumn {
  constructor(public uxResponsive: UxResponsiveUtilities) {
    console.log(uxResponsive);
  }
}
