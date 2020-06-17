import { Routes, RouterModule } from '@angular/router';


import { CreditoempresarialComponent } from './admin/gestion/creditoempresarial/creditoempresarial.component';
import { CreditodetalleComponent  } from './admin/gestion/creditodetalle/creditodetalle.component';
import { DocumentosComponent } from './estudiante/documentos/documentos.component';
import { CargarComponent } from './estudiante/documentos/cargar/cargar.component';
import { VisualizarComponent } from './estudiante/documentos/visualizar/visualizar.component';



export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inicio',
        component: CreditoempresarialComponent,
        data: {
          title: 'Universidad Simón Bolivar',
          urls: [
            { title: 'Universidad Simón Bolivar', url: '/components' },
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
        path: 'detalle',
        component: CreditodetalleComponent,
        data: {
          title: 'Universidad Simón Bolivar',
          urls: [
            { title: 'Universidad Simón Bolivar', url: '/components' },
            { title: 'Universidad Simón Bolivar' }
          ]
        }
      }
    ]
  }
];
