import { Component } from '@angular/core';
import { MenuItem } from './menu-item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus';

   Menu:MenuItem[]=[
   { Name:"Garlic Bread",
   Category:"Appetizer",
   Price:6.99
   },
   { Name:"Cheesy Bread",
   Category:"Appertizer",
   Price: 7.99
   },
   {Name: "Personal Pizza",
    Category:"Pizza",
    Price:9.99
  },
  { Name:"Medium Pizza",
    Category:"Pizza",
    Price: 12.99
  },
{
  Name: "Large Pizza",
  Category: "Pizza",
  Price: 16.99
},
{Name: "Chicken Wings",
Category:"The Good Stuff",
Price: 12.99
},
];
}