import { NgModule, forwardRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NameParser } from './admin/nameParser.service';
import { UnreviewedTalkComponent  } from './home/unreviewedTalk.component';
import { TalkDurationPipe } from './common/talkDuration.pipe'

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
    UnreviewedTalkComponent,
    TalkDurationPipe
  ],
  providers: [
    NameParser
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UnreviewedTalkComponent
  ]
})
export class AppModule { }
