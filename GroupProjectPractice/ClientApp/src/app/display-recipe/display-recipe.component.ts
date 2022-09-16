import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css']
})
export class DisplayRecipeComponent implements OnInit {

  constructor() { }
  @Input() public id: number = 0;
  @Input() public title: string = "";
  @Input() public image: string = "";
  @Input() public imageType: string = "";
  

  ngOnInit(): void {
  }

}
