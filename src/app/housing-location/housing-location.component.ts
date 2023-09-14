import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  //Adding a property called housingLocation of type HousingLocation to the class. The '!' is used because the input is expecting a value to be passed. 
  //The '!' is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
  @Input() housingLocation!: HousingLocation

}
