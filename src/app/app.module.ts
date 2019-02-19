import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material imports
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatIconModule } from '@angular/material/icon';
//import { MatTooltipModule } from '@angular/material/tooltip';
//import { MatTableModule } from '@angular/material/table';
//import { MatPaginatorModule } from '@angular/material/paginator';
//import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
//import { MatCardModule } from '@angular/material/card';
//import { MatMenuModule } from '@angular/material/menu';
//import { MatExpansionModule } from '@angular/material/expansion';
//import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatDialogModule, MatButtonToggleModule } from '@angular/material';
//import {MatSlideToggleModule} from '@angular/material/slide-toggle';
//import {MatTabsModule} from '@angular/material/tabs';
import { AetherTicketPluginLibModule } from 'aether-ticket-plugin-lib'
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AetherTicketPluginLibModule.initializeLib({siteKey: environment.siteKey}, environment.firebaseTicket),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    /*MatInputModule,
    MatSelectModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
