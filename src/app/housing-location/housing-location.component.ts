import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  //This template is holding the layout for each house listed on the site. From here, each house can have the data filled in, and the entire list is looped through with ngFor
  template: `
    <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  //Adding a property called housingLocation of type HousingLocation to the class. The '!' is used because the input is expecting a value to be passed. 
  //The '!' is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
  @Input() housingLocation!: HousingLocation

}
