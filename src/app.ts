import { autoinject, PLATFORM } from 'aurelia-framework';
import { RouterConfiguration } from 'aurelia-router';

export class App {
  message = 'Hello World!';

  configureRouter(config: RouterConfiguration): void {
    config.map([
      // User page
      {
        route: "user",
        name: "user",
        moduleId: PLATFORM.moduleName("./modules/user/info"),
        layoutViewModel: PLATFORM.moduleName("resources/layouts/adaptive"),
        nav: true,
        title: "User Info",
        settings: { auth: false }
      }
    ]);
  }
}
