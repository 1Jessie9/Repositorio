import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

const SHARED_EXPORTS: any = [
    HeaderComponent,
    NavbarComponent,
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
