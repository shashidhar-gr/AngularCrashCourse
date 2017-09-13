import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <div (click) = "onDivClick()">
            <button class = "btn btn-primary" (click) = "onSave($event)">Save</button>
        </div>
    `
})
export class CoursesComponent {
    imageUrl = 'http://lorempixel.com/400/200';
    colSpan = 2;

    onSave($event) {
        console.log("Button was clicked!! ",$event);
    }

    onDivClick() {
        console.log("Div was clicked!!");
    }
}