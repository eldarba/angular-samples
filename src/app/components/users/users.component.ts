import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allowAdd = false;
  msg = "disabled";
  usersCreationStatus = "no users added";
  userName = "the name";
  msg1:string;

  color;

  constructor() { }

  ngOnInit() {

    setTimeout(()=>{
      this.allowAdd = true;
      this.msg = "Add Users";
    }, 3500);
  }

  addUser(){
    this.usersCreationStatus = "users added";
  }

  

}
