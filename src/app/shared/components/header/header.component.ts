import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollService } from 'src/app/scroll.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(
        private router: Router,
        private scrollService: ScrollService,
        private route: ActivatedRoute,
    ) { }

    ngAfterViewInit() {
        this.route.fragment.subscribe((fragment: string | null) => {
            if (fragment) {
                const element = document.querySelector(`#${fragment}`);
                this.scrollService.scrollToElement(element as HTMLElement);
            }
        });
    }

    async navigateTab(route: string) {
        this.router.navigate(['/home'], { fragment: route }).then(() => {
            const element = document.querySelector(`#${route}`);
            this.scrollService.scrollToElement(element as HTMLElement);
        });
    }
}
