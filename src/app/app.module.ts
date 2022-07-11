import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from './client/add-header-interceptor';
import { AuthService } from './services/auth.service';
import { ConfigurationService } from './configuration.service';
import { NewestComponent } from './page/newest/newest.component';
import { AllComponent } from './page/all/all.component';

const InitialiseConfig = (appConfig: ConfigurationService) => {
  return () => {
    return appConfig.loadConfig();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NewestComponent,
    AllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddHeaderInterceptor,
    multi: true,
    deps: [AuthService]
  },
  {
    provide: APP_INITIALIZER,
    useFactory: InitialiseConfig,
    multi: true,
    deps: [ConfigurationService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
