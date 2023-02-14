import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'simphonis-input-interval',
  templateUrl: './simphonis-input-interval.component.html',
  styleUrls: ['./simphonis-input-interval.component.scss'],
})
export class SimphonisInputIntervalComponent implements OnInit {
  /**
   * Valeur minimum de l'interval
   */
  @Input() min: number = 0;

  /**
   * Valeur maximum de l'interval
   */
  @Input() max: number = 0;

  /**
   * Unité de l'interval
   */
  @Input() unite: string = '';

  /**
   * Evènement de changement de l'interval
   */
  @Output() onIntervalChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.fillColor();
  }
  
  slideOne(): void {
    let sliderOne = document.getElementById("slider-1") as HTMLInputElement;
    let sliderTwo = document.getElementById("slider-2") as HTMLInputElement;
    let displayValOne = document.getElementById("range1") as HTMLInputElement;

    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= 0){
      sliderOne.value = sliderTwo.value;
    }
    displayValOne.textContent = sliderOne.value;
    this.fillColor();
  }
  
  slideTwo(): void {
    let sliderOne = document.getElementById("slider-1") as HTMLInputElement;
    let sliderTwo = document.getElementById("slider-2") as HTMLInputElement;
    let displayValTwo = document.getElementById("range2") as HTMLInputElement;

    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= 0){
      sliderTwo.value = sliderOne.value;
    }
    displayValTwo.textContent = sliderTwo.value;
    this.fillColor();
  }

  fillColor(): void {
    let sliderOne = document.getElementById("slider-1") as HTMLInputElement;
    let sliderTwo = document.getElementById("slider-2") as HTMLInputElement;
    let sliderTrack = document.querySelector(".slider-track") as HTMLElement;
    
    this.onIntervalChange.emit({min:parseInt(sliderOne.value), max: parseInt(sliderTwo.value)});
    
    let percent1 = (parseInt(sliderOne.value) / this.min) * 100;
    let percent2 = (parseInt(sliderTwo.value) / this.max) * 100;
    sliderTrack.style.background = `linear-gradient(to right, white ${percent1}% , var(--primary) ${percent1}% , var(--primary) ${percent2}%, white ${percent2}%)`;
  }
  

}
