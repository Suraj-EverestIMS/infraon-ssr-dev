import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loading-overlay" *ngIf="loading">
      <div class="cubes">
          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
          <div class="sk-cube sk-cube4"></div>
          <div class="sk-cube sk-cube5"></div>
          <div class="sk-cube sk-cube6"></div>
          <div class="sk-cube sk-cube7"></div>
          <div class="sk-cube sk-cube8"></div>
          <div class="sk-cube sk-cube9"></div>
      </div>
    </div>
  `,
  styles: [`
    .loading-overlay {
      position: absolute;
      width: 100%;
      height: 100vh;
      background-color: #fff;
      z-index: 9;
      top : 0;
    }
    .cubes {
      width: 40px;
      height: 40px;
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100vh - 50%);
    }
    
    .cubes .sk-cube {
      width: 33%;
      height: 33%;
      background-color: #0D51D9;
      float: left;
      animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    }
    
    .cubes .sk-cube1 {
      animation-delay: 0.2s;
    }
    
    .cubes .sk-cube2 {
      animation-delay: 0.3s;
    }
    
    .cubes .sk-cube3 {
      animation-delay: 0.4s;
    }
    
    .cubes .sk-cube4 {
      animation-delay: 0.1s;
    }
    
    .cubes .sk-cube5 {
      animation-delay: 0.2s;
    }
    
    .cubes .sk-cube6 {
      animation-delay: 0.3s;
    }
    
    .cubes .sk-cube7 {
      animation-delay: 0s;
    }
    
    .cubes .sk-cube8 {
      animation-delay: 0.1s;
    }
    
    .cubes .sk-cube9 {
      animation-delay: 0.2s;
    }


    @keyframes sk-cubeGridScaleDelay {
      0%,
      70%,
      100% {
      transform: scale3D(1, 1, 1);
      }
      35% {
      transform: scale3D(0, 0, 1);
      }
    }
  `]
})
export class LoaderComponent implements OnInit {

  loading = true
  
  constructor() { 
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

  ngOnInit(): void {
  }

}
