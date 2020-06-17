import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { CreditoempresarialComponent } from '../components/admin/gestion/creditoempresarial/creditoempresarial.component';
import { CreditodetalleComponent } from '../components/admin/gestion/creditodetalle/creditodetalle.component';

import { CreditoComponent } from '../components/estudiante/solicitud/credito/credito.component';

import { ComponentsRoutes } from './components.routing';

import { MaterialModule } from '../material';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    RouterModule.forChild(ComponentsRoutes),
    PerfectScrollbarModule,
    CalendarModule.forRoot(),
    NgxChartsModule,
    NgxDatatableModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  declarations: [
    CreditoempresarialComponent,
    CreditodetalleComponent
  ],
  exports: [
    CreditoempresarialComponent,
    CreditodetalleComponent
  ]
})
export class ComponentsModule {}
