// angular
import { ChangeDetectionStrategy, OnInit } from '@angular/core';

// app
import { AnalyticsService } from '../../frameworks/analytics/index';
import { BaseComponent, Config, LogService } from '../../frameworks/core/index';

/**
 * This class represents the main application component.
 */
@BaseComponent({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
export class AppComponent implements OnInit {
  constructor(public analytics: AnalyticsService, public logger: LogService) {
    logger.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
  }

  ngOnInit() {
    App.init();
    Layout.init();
    Demo.init();
    QuickSidebar.init();
  }
}
