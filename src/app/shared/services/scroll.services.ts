import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScrollService {
    scrollToElement(element: HTMLElement): void {
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}