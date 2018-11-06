/**
 * @file Primary module that is bootstraped at startup
 * @author Tristan Mastrodicasa
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { GameOptionsComponent } from './partials/game-options/game-options.component';
import { RegionOptionsComponent } from './partials/region-options/region-options.component';

import { DoubleBarInterfaceComponent } from './interfaces/double-bar-interface/double-bar-interface.component';
import { MinimalBackInterfaceComponent } from './interfaces/minimal-back-interface/minimal-back-interface.component';

import { EventBrowseComponent } from './pages/event-browse/event-browse.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { SignInUsernameComponent } from './pages/sign-in-username/sign-in-username.component';
import { EventsComponent } from './pages/events/events.component';
import { EventViewerComponent } from './pages/event-viewer/event-viewer.component';
import { ProfileViewerComponent } from './pages/profile-viewer/profile-viewer.component';
import { SearchComponent } from './pages/search/search.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { MoreOptionsComponent } from './pages/more-options/more-options.component';
import { EventFormComponent } from './pages/event-form/event-form.component';
import { ProfileFormComponent } from './pages/profile-form/profile-form.component';
import { AccountFormComponent } from './pages/account-form/account-form.component';
import { NotificationSettingsComponent } from './pages/notification-settings/notification-settings.component';
import { SubscriptionListComponent } from './pages/subscription-list/subscription-list.component';
import { AboutComponent } from './pages/about/about.component';
import { SignInPasswordComponent } from './pages/sign-in-password/sign-in-password.component';


@NgModule({
  declarations: [
    AppComponent,
    GameOptionsComponent,
    RegionOptionsComponent,
    DoubleBarInterfaceComponent,
    MinimalBackInterfaceComponent,
    EventBrowseComponent,
    LoadingComponent,
    SignInUsernameComponent,
    EventsComponent,
    EventViewerComponent,
    ProfileViewerComponent,
    SearchComponent,
    NotificationsComponent,
    MoreOptionsComponent,
    EventFormComponent,
    ProfileFormComponent,
    AccountFormComponent,
    NotificationSettingsComponent,
    SubscriptionListComponent,
    AboutComponent,
    SignInPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
