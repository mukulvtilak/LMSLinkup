// angular
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// app
//import { AppComponent } from './app/components/app.component';
import { AppComponent } from './app/components/app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { routes } from './app/components/app.routes';

// feature modules
import { CoreModule } from './app/frameworks/core/core.module';
import { AnalyticsModule } from './app/frameworks/analytics/analytics.module';
import { MultilingualModule } from './app/frameworks/i18n/multilingual.module';
import { SampleModule } from './app/frameworks/sample/sample.module';

// config
import { Config, WindowService, ConsoleService } from './app/frameworks/core/index';
Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
if (String('<%= ENV %>') === 'dev') {
  // only output console logging in dev mode
  Config.DEBUG.LEVEL_4 = true;
}

// sample config (extra)
import { AppConfig } from './app/frameworks/sample/services/app-config';
import { MultilingualService } from './app/frameworks/i18n/services/multilingual.service';
// custom i18n language support
MultilingualService.SUPPORTED_LANGUAGES = AppConfig.SUPPORTED_LANGUAGES;

//Layout
import { FooterComponent } from './app/components/layout/footer/footer.component';
import { QuickSidebarComponent } from './app/components/layout/quick-sidebar/quick-sidebar.component';
import { SidebarComponent } from './app/components/layout/sidebar/sidebar.component';
import { TopNavigationBarComponent } from './app/components/layout/top-navigation-bar/top-navigation-bar.component';

//RMS
import { DashboardComponent } from './app/components/dashboard/dashboard.component';

let routerModule = RouterModule.forRoot(routes);

if (String('<%= TARGET_DESKTOP %>') === 'true') {
  Config.PLATFORM_TARGET = Config.PLATFORMS.DESKTOP;
  // desktop (electron) must use hash
  routerModule = RouterModule.forRoot(routes, {useHash: true});
}

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot([
      { provide: WindowService, useValue: window },
      { provide: ConsoleService, useValue: console }
    ]),
    routerModule,
    AnalyticsModule,
    MultilingualModule,
    SampleModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    //Layout
    FooterComponent,
    QuickSidebarComponent,
    SidebarComponent,
    TopNavigationBarComponent,
    //RMS
    DashboardComponent
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    }
  ],
  bootstrap: [AppComponent]
})

export class WebModule { }
