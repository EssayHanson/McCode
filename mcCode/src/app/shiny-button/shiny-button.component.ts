import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shiny-button',
  templateUrl: './shiny-button.component.html',
  styleUrls: ['./shiny-button.component.css']
})
export class ShinyButtonComponent implements OnInit {

  constructor() { 
    
    this.colour = this.generateRandomColor();
  }

  @Input('colour') public colour: string;

  @Output('onColourChange') public colourEventEmitter: 
    EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  generateRandomColor(){
    const newColour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    this.colourEventEmitter.next(newColour);
    return newColour;
  }
}
