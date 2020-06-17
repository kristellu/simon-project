import { Routes } from '@angular/router';


import { BaseComponent } from './base/base.component';
import { CreditoComponent } from '../components/estudiante/solicitud/credito/credito.component';
import { DocumentosComponent } from '../components/estudiante/documentos/documentos.component';
import { CargarComponent } from '../components/estudiante/documentos/cargar/cargar.component';
import { VisualizarComponent } from '../components/estudiante/documentos/visualizar/visualizar.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'base',
        component: BaseComponent,
        data: {
          title: 'Universidad Simón Bolivar',
          urls: [
            { title: 'Universidad Simón Bolivar', url: '/dashboard' },
            { title: 'Universidad Simón Bolivar' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'estudiante',
        component: CreditoComponent,
        data: {
          title: 'Universidad Simón Bolivar',
          urls: [
            { title: 'Universidad Simón Bolivar', url: '/dashboard' },
            { title: 'Universidad Simón Bolivar' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'documentos',
        component: DocumentosComponent,
        data: {
          title: 'Universidad Simón Bolivar',
          urls: [
            { title: 'Universidad Simón Bolivar', url: '/dashboard' },
            { title: 'Universidad Simón Bolivar' }
          ]
        },
        children: [
          {
            path: '',
            component: CargarComponent,
          },
          {
            path: 'visualizar',
            component: VisualizarComponent,
          }
        ]
      }
    ]
  }
];
