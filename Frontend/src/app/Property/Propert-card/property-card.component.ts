import { Component } from "@angular/core";




@Component({
  selector:'app-property-card',
  //template:`<h1>i am a card </h1>`,
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']

})
   export class PropertyCardComponent{
     property:any = {
      "id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000
     }

   }
