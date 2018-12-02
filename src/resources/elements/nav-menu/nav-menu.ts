import { bindable, autoinject } from "aurelia-framework";
import { Router, NavModel } from "aurelia-router";
import { UxResponsiveUtilities } from '@aurelia-ux/grid';


@autoinject
export class NavMenu {
  @bindable adminRouter: Router;
  @bindable isChildRouter: boolean;

  public links: NavModel[];

  private fakeAuthenticated = true;
  private fakeAdmin = true;

  constructor(public router: Router, public uxResponsive: UxResponsiveUtilities) { }

  public attached() {
    this.links = this.router.navigation.filter(nav => !nav.settings.auth || (nav.settings.auth && this.fakeAuthenticated) && !(nav.settings.admin && this.fakeAdmin));
  }

  public navigate(url: string) {
    window.location.href = url;
  }
}
