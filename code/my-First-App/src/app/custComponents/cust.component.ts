import { Component } from '@angular/core';

@Component({
    selector: 'server-comp',
    templateUrl: './cust.component.html',
    styleUrls: ['./cust.component.css']
})
export class custComponent
{
    custTitle = 'my-cust-title';
    name = 'cust Component'
}