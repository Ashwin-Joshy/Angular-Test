import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service/info-service';

@Component({
  selector: 'app-box3',
  templateUrl: './box3.component.html',
  styleUrls: ['./box3.component.css']
})
export class Box3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clickMe(){
    const service=new Myservice();
    service.onclick('Box3');
  }
}
