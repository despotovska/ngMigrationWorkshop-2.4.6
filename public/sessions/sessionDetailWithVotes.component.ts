import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'session-detail-with-votes',
  templateUrl: '/sessions/sessionDetailWithVotes.component.html'
})
export class SessionDetailWithVotesComponent {
  @Input() session: any;
  @Input() initialCollapsed: any;
}
