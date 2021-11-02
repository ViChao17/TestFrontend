import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { TestComponent } from './pages/test/test.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { RegionsComponent } from './pages/regions/regions.component';
import { SubregionsComponent } from './pages/subregions/subregions.component';
import { IntOrgComponent } from './pages/int-org/int-org.component';
import { CountryComponent } from './pages/country/country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'country', component: CountryComponent },
  { path: 'int-org', component: IntOrgComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'subregions', component: SubregionsComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TestComponent,
    PageNotFoundComponent,
    RegionsComponent,
    SubregionsComponent,
    IntOrgComponent,
    CountryComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        HighchartsChartModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCheckboxModule,
        FormsModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
