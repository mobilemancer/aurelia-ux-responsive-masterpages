import { autoinject, PLATFORM } from 'aurelia-framework';
import { RouterConfiguration } from 'aurelia-router';

export class App {
  message = 'Hello World!';

  configureRouter(config: RouterConfiguration): void {
    config.map([
      // Home
      {
        route: "home",
        name: "home",
        moduleId: PLATFORM.moduleName("./modules/home/home"),
        layoutViewModel: PLATFORM.moduleName("resources/layouts/adaptive"),
        nav: true,
        title: "Home",
        settings: { auth: false }
      },
      // User page
      {
        route: "user-info",
        name: "user-info",
        moduleId: PLATFORM.moduleName("./modules/user/info"),
        layoutViewModel: PLATFORM.moduleName("resources/layouts/adaptive"),
        nav: true,
        title: "User Info",
        settings: { auth: false }
      }
    ]);
  }
}
