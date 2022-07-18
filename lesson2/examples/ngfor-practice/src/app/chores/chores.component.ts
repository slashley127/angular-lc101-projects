import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Complete LaunchCode prep work', 'Buy groceries'];
   todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores", "Weekly chores"];

   constructor() { }

   ngOnInit() {
   }

}
