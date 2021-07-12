import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HighlightDirective } from './directives/highlight.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { ExampleComponent } from './components/example/example.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { UserComponent } from './components/user/user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    CapitalizePipe,
    MyDirectiveDirective,
    ExampleComponent,
    DashboardComponent,
    AdminComponent,
    NotFoundComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCommonModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
