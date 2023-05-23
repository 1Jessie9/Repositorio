import { Component, ElementRef, ViewChild } from '@angular/core';
import { ICardSkill } from '../shared/interfaces/card-skill.interface';
import { CARDS_SKILLS } from './constants/slides-skill';
import Swiper from 'swiper';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    @ViewChild('swiper') swiperRef: ElementRef | undefined;
    public swiper?: Swiper;
    public skills: ICardSkill[] = CARDS_SKILLS;

    swiperReady() {
        this.swiper = this.swiperRef?.nativeElement.swiper;
    }
}
