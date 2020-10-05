import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menu: any = [
    {
      nom : "Courses",
      path : 'courses',
      icon : "../../assets/supermarket.png"
    },
    {
      nom : "Todolist",
      path : 'todolist',
      icon : "../../assets/checklist.png"
    },
    {
      nom : "REC",
      path : 'rec',
      icon : "../../assets/checklist.png"
    },
    {
      nom : "Dashboard",
      path : 'camembert',
      icon : "../../assets/checklist.png"
    },

]

  constructor() { }

  ngOnInit() {
  }

}
