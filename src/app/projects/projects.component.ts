import { Component, ElementRef, ViewChild } from '@angular/core';
import { ICardProject } from '../shared/interfaces/card-project.interface';
import { CARDS_PROJECTS } from './constants/projects';
import Swiper from 'swiper';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    @ViewChild('swiper') swiperRef: ElementRef | undefined;
    public swiper?: Swiper;
    public projects: ICardProject[] = CARDS_PROJECTS;

    swiperReady() {
        this.swiper = this.swiperRef?.nativeElement.swiper;
    }
}
