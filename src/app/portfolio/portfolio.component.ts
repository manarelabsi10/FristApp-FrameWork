import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  currentImageSrc: string =""; 
  isLayerHidden: boolean = true;
  imageSrc(eventInfo: MouseEvent): void {
    const targetElement = eventInfo.target as HTMLElement;
    const parentElement = targetElement.closest('.contant') as HTMLElement;
    const imgElement = parentElement.querySelector('img') as HTMLImageElement;

    if (imgElement) {
      const imageSrc = imgElement.src; 
      this.imageLayer(imageSrc); 
    }
  }

  imageLayer(imagePath: string): void {
    this.currentImageSrc = imagePath;
    console.log('Image Path:', this.currentImageSrc);
  }
 

}
