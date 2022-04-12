import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-uptime',
  templateUrl: './infraon-uptime.component.html',
  styleUrls: ['./infraon-uptime.component.css']
})
export class InfraonUptimeComponent implements OnInit {
  prodName = "Uptime";
  prodURL = "/infraon-uptime"
  prodIcon = "./../../.../../../../assets/img/homepage/product-icons/Uptime.svg"
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
