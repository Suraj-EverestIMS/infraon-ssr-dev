import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-itim',
  templateUrl: './infraon-itim.component.html',
  styleUrls: ['./infraon-itim.component.css']
})
export class InfraonItimComponent implements OnInit {
  prodName = "ITIM";
  prodURL = "/infraon-itim"
  prodIcon = "./../../.../../../../assets/img/homepage/product-icons/itim.svg"
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
