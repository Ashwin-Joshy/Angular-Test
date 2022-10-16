import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  myObservable= new Observable( res=>{
    console.log('observable');
    
  } )
  constructor() { }

  ngOnInit(): void {
  }

}
