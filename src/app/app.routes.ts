import { Routes, RouterModule } from '@angular/router';
import { DebugComponent } from './debug.component';
import { LightsComponent } from './lights/lights.component';

const routes: Routes = [
  { path: 'debug', component: DebugComponent },
  { path: '', component: LightsComponent }
];

export const routing = RouterModule.forRoot(routes);