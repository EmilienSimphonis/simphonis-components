import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type Item = {
  id: string;
  description: string;
  selected?: boolean;
  disabled?: boolean;
  iconUrl ?: string;
  imageUrl ?: string;
}

enum ItemType {
  BUTTON = "button",
  CHECKBOX = "checkbox"
}

@Component({
  selector: 'simphonis-input-selection',
  templateUrl: './simphonis-input-selection.component.html',
  styleUrls: ['./simphonis-input-selection.component.scss']
})
export class SimphonisInputSelectionComponent implements OnInit {

  /**
   * Liste d'items
   */
  @Input() list: Item[] = [];

  /**
   * Si plusieurs items sont sélectionnables
   */
  @Input() isSelectionMultiple: boolean = false;

  /**
   * Si l'affichage des options est sous forme de checkbox ou bien de boutons
   */
  @Input() type: ItemType = ItemType.CHECKBOX;

  /**
   * Si l'item a un icon
   */
  @Input() hasSelectorIcon: boolean = false;
  
  /**
   * Si l'item a une image
   */
  @Input() hasSelectorImage: boolean = false;

  /**
   * Nom du formulaire
   */
  @Input() name: string = 'radio';

  /**
   * Affichage des items en ligne
   */
  @Input() inline: boolean = true;

  /**
   * Item sélectionné
   */
  selectedItem: any;

  /**
   * Si la sélection est multiple, items sélectionnés
   */
  selectedItems: any[] = [];

  /**
   * Envoi de l'évènement de selection d'item
   */
  @Output() onSelectionChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Selection de l'item
   * @param item 
   */
  selectItem(item: Item){
    if(!item.disabled){
      if(this.isSelectionMultiple){
        if(this.selectedItems && this.selectedItems.find(i => i.id === item.id)){
          this.selectedItems.splice(this.selectedItems.findIndex(i => i.id === item.id), 1);
        } else {
          this.selectedItems.push(item);
        }
        this.onSelectionChange.emit(this.selectedItems);
      } else {
        this.selectedItem = this.selectedItem?.id === item.id ? null : item;
        this.onSelectionChange.emit(this.selectedItem);
      }
    }
  }

  log(event: any){
    console.log(event)
  }

  zoomIn(item: any){
    console.log(item)
  }

}
