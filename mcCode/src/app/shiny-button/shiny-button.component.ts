import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit() {
  }

  generateRandomColor(){
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }
}
