import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScrollService {

    constructor() { }

    scrollToElement(element: HTMLElement): void {
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
