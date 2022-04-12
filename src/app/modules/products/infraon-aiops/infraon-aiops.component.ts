import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/_services/state.service';

@Component({
  selector: 'app-infraon-aiops',
  templateUrl: './infraon-aiops.component.html',
  styleUrls: ['./infraon-aiops.component.css']
})
export class InfraonAiopsComponent implements OnInit {
  prodName = "AIOps";
  prodURL = "/infraon-aiops"
  prodIcon = "./../../.../../../../../assets/img/homepage/product-icons/aiops.svg"
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
