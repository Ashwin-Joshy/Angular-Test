import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service/info-service';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clickMe(){
    const service=new Myservice();
    service.onclick('Box1');
  }
}
