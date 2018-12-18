import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoubleBarInterfaceComponent } from './interfaces/double-bar-interface/double-bar-interface.component';
import { MinimalBackInterfaceComponent } from './interfaces/minimal-back-interface/minimal-back-interface.component';

import { EventBrowseComponent } from './pages/event-browse/event-browse.component';
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
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    children: [
      {
        path: '',
        children: []
      },
      {
        path: '',
        outlet: 'page',
        component: SignInComponent
      }
    ]
  },
  {
    path: 'sign-up',
    children: [
      {
        path: '',
        children: []
      },
      {
        path: '',
        outlet: 'page',
        component: SignUpComponent
      }
    ]
  },
  {
    path: 'app', // AuthGuard (Make sure logged in)
    children: [
        {
          path: '',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: EventBrowseComponent
            }
          ]
        },
        {
          path: 'search',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: SearchComponent
            }
          ]
        },
        {
          path: 'profile',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: ProfileViewerComponent
            }
          ]
        },
        {
          path: 'profile/:id',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: ProfileViewerComponent
            }
          ]
        },
        {
          path: 'events',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: EventsComponent
            }
          ]
        },
        {
          path: 'event/:id',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: EventViewerComponent
            }
          ]
        },
        {
          path: 'notifications',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: NotificationsComponent
            }
          ]
        },
        {
          path: 'more',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: MoreOptionsComponent
            }
          ]
        },
        {
          path: 'account-settings',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: AccountFormComponent
            }
          ]
        },
        {
          path: 'notification-settings',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: NotificationSettingsComponent
            }
          ]
        },
        {
          path: 'about',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: AboutComponent
            }
          ]
        },
        {
          path: 'edit-profile',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: ProfileFormComponent
            }
          ]
        },
        {
          path: 'subscriptions',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: SubscriptionListComponent
            }
          ]
        },
        {
          path: 'event-form',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: EventFormComponent
            }
          ]
        },
        {
          path: 'edit-event/:id',
          children: [
            {
              path: '',
              component: DoubleBarInterfaceComponent
            },
            {
              path: '',
              outlet: 'page',
              component: EventFormComponent
            }
          ]
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
