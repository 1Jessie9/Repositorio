import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

const SHARED_EXPORTS: any = [
    HeaderComponent
];

@NgModule({
    declarations: [
        ...SHARED_EXPORTS,
    ],
    exports: [
        ...SHARED_EXPORTS,
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
