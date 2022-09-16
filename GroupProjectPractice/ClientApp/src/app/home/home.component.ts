import { Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
//import { CartService } from '../cart.service';
import { RecipesService, RecipeInfo, RecipeResults} from '../recipes.service';
import { empty } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public loadedRecipes: RecipeResults = new RecipeResults();
  private isNewRecipeAvailableEventSubscribed: boolean = false;
  private isNewFilteredRecipeAvailEventSubscribed: boolean = false;

  constructor(private thisRecipesService: RecipesService /* private cartService: CartService */) {
  }


  ngOnInit(): void {

   //this.getRecipeList();

  
   // this.getItems();

  }
  /*
  public getItems() {

    this.cartService.getItems();
    console.log('Home Cart Items Total: ' + this.cartService.items.length.toString());
  }
  */
  public getName(){
    alert("karen");
  }

  clearRecipeList() {
    this.loadedRecipes.results = [];
    /*for (let currElementNo = 0; currElementNo < this.loadedRecipes.results.length; currElementNo++) {
      delete this.loadedRecipes.results[currElementNo];
    }*/
    return this.loadedRecipes;
  }
  public getRecipeList() {
    // The order is important here.  If we subscribe FIRST, we can guarantee we will receive
    // all data provided by the event.  If we subscribe SECOND, we may not.
    
    if (!this.isNewRecipeAvailableEventSubscribed) {
      this.thisRecipesService.newRecipesAvailableEvent.subscribe((gotData) => {
        for (let currElementNo = 0; currElementNo < gotData.results.length; currElementNo++)
          this.loadedRecipes.results.push(gotData.results[currElementNo]);
        console.log("Data arrived!  We got " + gotData.results.length.toString() + " records.");
        
      })
      this.isNewRecipeAvailableEventSubscribed = true;
    }
    this.thisRecipesService.GetInfoFromServer();
  }

  public getListwithFilter() {
    // The order is important here.  If we subscribe FIRST, we can guarantee we will receive
    // all data provided by the event.  If we subscribe SECOND, we may not.

    if (!this.isNewFilteredRecipeAvailEventSubscribed) {
      this.thisRecipesService.newFilteredRecipesAvailableEvent.subscribe((gotData) => {
        for (let currElementNo = 0; currElementNo < gotData.results.length; currElementNo++)
          this.loadedRecipes.results.push(gotData.results[currElementNo]);
        console.log("Data arrived!  We got " + gotData.results.length.toString() + " records.");

      })
      this.isNewFilteredRecipeAvailEventSubscribed = true;
    }
    this.thisRecipesService.GetListWithFilter();
  }

}
