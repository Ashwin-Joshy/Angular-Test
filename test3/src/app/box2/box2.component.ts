import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service/info-service';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clickMe(){
    const service=new Myservice();
    service.onclick('Box2');
  }
}
