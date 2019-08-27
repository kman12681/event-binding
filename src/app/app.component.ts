import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gamePieces = [{type: '', number: 0}];

  onIntervalUpdate(event) {
    if (event.number % 2 === 0) {
      this.gamePieces.push({ number: event.number, type: 'even' });
    } else {
      this.gamePieces.push({ number: event.number, type: 'odd' });
    }
  }
}
