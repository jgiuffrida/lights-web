import { OutletBox } from './outlet-box';

export class Outlet {
    id: number;
    status: boolean;
    label: string;
    box: OutletBox;

    constructor(id, status, box: OutletBox, label?: string) {
        this.id = id;
        this.status = status;
        this.box = box;
        this.label = label || 'Outlet ' + this.id;
    }
}