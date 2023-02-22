import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

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
   * Si les étapes de l'interval sont un tableau de valeurs
   */
  @Input() isRangeStepValues: boolean = false;

  /**
   * Saut de valeur
   */
  @Input() step: number = 1;

  /**
   * Valeurs numériques correspondant aux étapes
   */
  @Input() stepValues: number[] = [];

  /**
   * Couleur principale
   */
  @Input() primaryColor: string = '#000000';

  /**
   * Couleur secondaire
   */
  @Input() secondaryColor: string = '#FFFFFF';

  /**
   * Evènement de changement de l'interval
   */
  @Output() onIntervalChange: EventEmitter<any> = new EventEmitter();

  @ViewChild("sliderTrack", { read: ElementRef, static: true })
  sliderTrackRef!: ElementRef;
  @ViewChild("sliderOne", { read: ElementRef, static: true })
  sliderOneRef!: ElementRef;
  @ViewChild("sliderTwo", { read: ElementRef, static: true })
  sliderTwoRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {

    // Initialisation et vérif des valeurs si isRangeStepValues est true
    if(this.isRangeStepValues){
      this.stepValues.sort((a,b) => a - b);
      this.min = 0;
      this.max = this.stepValues.length - 1;
      this.step = 1;
    }
    
    this.sliderOneRef.nativeElement.max = this.max;
    this.sliderOneRef.nativeElement.min = this.min;
    this.sliderOneRef.nativeElement.value = this.min;
    
    this.sliderTwoRef.nativeElement.max = this.max;
    this.sliderTwoRef.nativeElement.min = this.min;
    this.sliderTwoRef.nativeElement.value = this.max;

    this.fillColor();
  }
  
  /**
   * Modification du curseur min
   */
  slideOne(): void {
    if(parseInt(this.sliderTwoRef.nativeElement.value) - parseInt(this.sliderOneRef.nativeElement.value) <= 0){
      this.sliderOneRef.nativeElement.value = this.sliderTwoRef.nativeElement.value;
    }

    this.fillColor();
    
    this.onIntervalChange.emit({min: this.getMin(), max: this.getMax()});
  }
  
  /**
   * Modification du curseur max
   */
  slideTwo(): void {
    if(parseInt(this.sliderTwoRef.nativeElement.value) - parseInt(this.sliderOneRef.nativeElement.value) <= 0){
      this.sliderTwoRef.nativeElement.value = this.sliderOneRef.nativeElement.value;
    }

    this.fillColor();
    
    this.onIntervalChange.emit({min: this.getMin(), max: this.getMax()});
  }

  /**
   * Remplissage du slider + déclenchement du callback
   */
  fillColor(): void {    
    let percent1 = ((this.sliderOneRef.nativeElement.value - this.min) / (this.max - this.min)) * 100;
    let percent2 = ((this.sliderTwoRef.nativeElement.value - this.min) / (this.max - this.min)) * 100;

    this.sliderTrackRef.nativeElement.style.background = `linear-gradient(to right, ${this.primaryColor} ${percent1}% , ${this.secondaryColor} ${percent1}% , ${this.secondaryColor} ${percent2}%, ${this.primaryColor} ${percent2}%)`;
  }

  /**
   * Détermination min
   * @returns Min value
   */
  getMin(): number {
    if(this.isRangeStepValues){
      return this.stepValues[this.sliderOneRef.nativeElement.value];
    } else {
      return this.sliderOneRef.nativeElement.value;
    }
  }
  
  /**
   * Détermination max
   * @returns Max value
   */
  getMax(): number {
    if(this.isRangeStepValues){
      return this.stepValues[this.sliderTwoRef.nativeElement.value];
    } else {
      return this.sliderTwoRef.nativeElement.value;
    }
  }
  

}
