import { NgModule, forwardRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NameParser } from './admin/nameParser.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule
    // RouterModule.forRoot([], {useHash: true})
  ],
  declarations: [
    AppComponent,
    
  ],
  providers: [
    NameParser
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
