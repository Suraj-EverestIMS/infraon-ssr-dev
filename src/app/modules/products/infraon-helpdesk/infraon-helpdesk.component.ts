import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-helpdesk',
  templateUrl: './infraon-helpdesk.component.html',
  styleUrls: ['./infraon-helpdesk.component.css']
})
export class InfraonHelpdeskComponent implements OnInit {
  prodName = "Helpdesk";
  prodURL = "/infraon-helpdesk"
  prodIcon = "./../../.../../../../assets/img/homepage/product-icons/helpdesk.svg"
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
