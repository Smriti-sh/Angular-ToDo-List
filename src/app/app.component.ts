import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //CommonModule is a module that provides common directives, pipes, and services used throughout Angular applications.
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

//This class defines the behavior and data for an Angular component.
export class AppComponent {
  componentTitle = 'ToDo-List'; //can be used in the template to display the title, such as in a heading.

  //This property determines which items are displayed based on their completion status.
  filter: 'all' | 'active' | 'done' = 'all'; //by default all

  //array of objects, each representing a to-do item.
  allItems = [
    { description: 'clean', done: true },
    { description: 'grocery', done: false },
    { description: 'play', done: false },
    { description: 'study', done: true },
  ];

  addItem(description: string) {
    //If the description is falsy, the method exits early and does not proceed further. This prevents adding an item with an empty or invalid description.
    if (!description) return;

    // Refers to the allItems array property of the current component instance (this).
    this.allItems.unshift({
      // add a new element to the beginning of the array.
      description,
      done: false,
    });
  }

  //when you access items, this method is called.
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    // This method creates a new array containing only the elements that satisfy the provided condition.
    return this.allItems.filter((item) => {
      this.filter === 'done' ? item.done : !item.done;
    });
  }
}
