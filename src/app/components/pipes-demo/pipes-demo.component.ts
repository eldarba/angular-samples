import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  public birthDate = new Date(1980, 0, 25);
  public str = '0123456789ABCDEF'

  constructor() { }

  ngOnInit() {
  }

}




