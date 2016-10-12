import { Injectable } from '@angular/core';
import { Outlet } from './outlet';
import { OutletBox } from './outlet-box';
import { $WebSocket } from 'angular2-websocket/angular2-websocket';
import { environment } from '../environments/environment';
import * as _ from 'lodash';

@Injectable()
export class OutletsService {
    private outletMap: Object;
    private socketMap: Object;
    constructor() {
        this.outletMap = this.parseOutlets(environment.outletboxes);
        this.connect();
    }
    getOutlets() {
        return this.outletMap;
    };

    parseOutlets(boxes: OutletBox[]): Outlet[] {
        let currentOutlet = 1,
            outlets;
        _.forEach(boxes, (box: OutletBox) => {
            _.times(box.outletCount, () => {
                outlets[currentOutlet] = new Outlet(currentOutlet, false, box);
                currentOutlet++;
            });
        });
        return outlets;
    }

    connect(): void {
        _.each(environment.outletboxes, (box) => {
            console.log(box.url+'/status');
            this.socketMap[box.url] = new $WebSocket(box.url + '/status');
        });

        console.log(this.socketMap);
    }

    setOutlet(outlet: Outlet) {}

}