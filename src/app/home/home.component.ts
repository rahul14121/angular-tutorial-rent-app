import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  //The first section is a search bar, and the second section uses an ngFor to loop through the list of items in housingLocationList, to populate the page with everything on the list.
  template: `
     <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  //When adding a property binding to a component tag, we use [attribute] = "value" to notify Angular that the assigned value should be treated as a property from the component class, and not a string value. However, in this case, as there is an ngFor loop, it is referring to the variable used in the ngFor directive.
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  //housingLocationList is following the HousingLocation interface while creating an array
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  //The code in the constructor will assign housingLocationList the value returned from the call to getAllHousingLocations.
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
