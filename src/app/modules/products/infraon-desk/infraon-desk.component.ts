import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-desk',
  templateUrl: './infraon-desk.component.html',
  styleUrls: ['./infraon-desk.component.css']
})
export class InfraonDeskComponent implements OnInit {
  prodName = "Desk";
  prodURL = "/infraon-desk"
  prodIcon = "./../../.../../../../assets/img/homepage/product-icons/Desk.svg"
  dataObj!: object;

  constructor() {
    this.dataObj = {
      "name" : this.prodName,
      "url" : this.prodURL,
      "img" : this.prodIcon
    }
  }

  ngOnInit(): void {
  }

}
