import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <input #email (keyup.enter) = "onKeyUp(email.value)"/>
    `
})
export class CoursesComponent {
    imageUrl = 'http://lorempixel.com/400/200';
    colSpan = 2;

    onKeyUp(email) {
        console.log("Enter key pressed!!",email);
    }
}