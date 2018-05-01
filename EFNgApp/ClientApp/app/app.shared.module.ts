//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router';

//import { AppComponent } from './components/app/app.component';
//import { NavMenuComponent } from './components/navmenu/navmenu.component';
//import { HomeComponent } from './components/home/home.component';
//import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
//import { CounterComponent } from './components/counter/counter.component';

//@NgModule({
//    declarations: [
//        AppComponent,
//        NavMenuComponent,
//        CounterComponent,
//        FetchDataComponent,
//        HomeComponent
//    ],
//    imports: [
//        CommonModule,
//        HttpModule,
//        FormsModule,
//        RouterModule.forRoot([
//            { path: '', redirectTo: 'home', pathMatch: 'full' },
//            { path: 'home', component: HomeComponent },
//            { path: 'counter', component: CounterComponent },
//            { path: 'fetch-data', component: FetchDataComponent },
//            { path: '**', redirectTo: 'home' }
//        ])
//    ]
//})
//export class AppModuleShared {
//}


import { NgModule } from '@angular/core';
import { EmployeeService } from './services/empservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchEmployeeComponent } from './components/fetchemployee/fetchemployee.component'
import { createemployee } from './components/addemployee/AddEmployee.component'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FetchEmployeeComponent,
        createemployee,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-employee', component: FetchEmployeeComponent },
            { path: 'register-employee', component: createemployee },
            { path: 'employee/edit/:id', component: createemployee },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [EmployeeService]
})
export class AppModuleShared {
}  