import { Component, OnInit } from '@angular/core';
import { OutletsService } from './outlets.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: []
})
export class DebugComponent {
    constructor( private outletsService: OutletsService ) {}
}
