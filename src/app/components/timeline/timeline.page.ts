import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

  @Input() data: any[];
  @Input() side: string;
  @Input() titleUpper: boolean;

  constructor() { }

  ngOnInit() {
    if (!this.data) {
      this.data = [];
    }
    if (!this.side) {
      this.side = 'left';
    }
  }

}
