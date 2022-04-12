import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-assets',
  templateUrl: './infraon-assets.component.html',
  styleUrls: ['./infraon-assets.component.css']
})
export class InfraonAssetsComponent implements OnInit {
 prodName = "Assets";
  prodURL = "/infraon-asssets"
  prodIcon = "./../../.../../../../assets/img/homepage/product-icons/Infraon-Assests.svg"
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
