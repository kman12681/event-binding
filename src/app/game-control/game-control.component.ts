import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalUpdate = new EventEmitter<{
    number: number;
  }>();

  interval = 0;
  timer: any;

  onGameStart() {
    this.timer = setInterval(() => {
      this.timerRun();
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.timer);
  }

  timerRun() {
    this.intervalUpdate.emit({
      number: this.interval++
    });
  }
}
