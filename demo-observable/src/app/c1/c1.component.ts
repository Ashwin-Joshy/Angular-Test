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
    res.next("10")
    res.next("20")
    res.next("30")
    res.next("40")
    res.next("50")
    res.next("60")
    res.next("70")
    res.next("80")
    res.next("90")
  } )
  constructor() { }

  ngOnInit(): void {
    this.myObservable.subscribe((value)=>{
      console.log(value);
    })
  }

}
