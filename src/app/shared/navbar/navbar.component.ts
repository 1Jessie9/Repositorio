import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollService } from 'src/app/scroll.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public query = window.matchMedia("(max-width: 640px)");
    public isResponsive: boolean = false;

    constructor(
        private router: Router,
        private scrollService: ScrollService,
        private route: ActivatedRoute,
    ) {
        if (this.query.matches) {
            this.isResponsive = true;
            this.route.fragment.subscribe((fragment: string | null) => {
                if (fragment) {
                    const element = document.querySelector(`#${fragment}`);
                    this.scrollService.scrollToElement(element as HTMLElement);
                }
            });
        } else {
            this.isResponsive = false;
        }
    }

    @HostListener('window:resize')
    onResize() {
        if (this.query.matches) {
            this.isResponsive = true;
        } else {
            this.isResponsive = false;
        }
    }

    async navigateTab(route: string) {
        this.router.navigate(['/home'], { fragment: route }).then(() => {
            const element = document.querySelector(`#${route}`);
            this.scrollService.scrollToElement(element as HTMLElement);
        });
    }
}
