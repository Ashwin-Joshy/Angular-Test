import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent implements OnInit {
  title='hello'
  today= Date.now();
  constructor() { }

  ngOnInit(): void {
  }
  obj={
    "id": 1,
    "name": "Leanne Graham",
    "date": "2020-01-01",
    "salary": 1000
  }
}
