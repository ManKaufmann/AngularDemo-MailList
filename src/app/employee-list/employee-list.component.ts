import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
    this.employees=[{
      id:1,
      firstName:"Manuel",
      lastname:"Kaufmann",
      emailID:"manuel.kaufmann@hotmail.com"
    }
    ,{
        id:2,
        firstName:"John",
        lastname:"Cana",
        emailID:"canagmail.com"
      },
      {
        id:3,
        firstName:"Test",
        lastname:"Brunch",
        emailID:"canagmail.com"
      },
      {
        id:4,
        firstName:"Test2 lokal change",
        lastname:"delite",
        emailID:"delite.com"
      }
      ,{
        id:2,
        firstName:"Master",
        lastname:"1",
        emailID:"c"
      }

      ,{
        id:2,
        firstName:"Master",
        lastname:"2 ",
        emailID:" lokal change"
      }



    ]
  }

}
