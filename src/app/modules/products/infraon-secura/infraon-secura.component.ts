import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-secura',
  templateUrl: './infraon-secura.component.html',
  styleUrls: ['./infraon-secura.component.css']
})
export class InfraonSecuraComponent implements OnInit {

  prodName = "SecuRA";
  prodURL = "/infraon-secura"
  prodIcon = "./../../.../../../../../assets/img/homepage/product-icons/secura.svg"
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
