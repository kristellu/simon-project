import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    // ITEM ANCLADO CON ico-pinup O SE PUEDE DEJAR EL ICONO ORIGINAL
    path: '/dashboard/base',
    title: 'Inicio',
    icon: 'mdi unisimon-ico ico-pinup',
    class: 'unisimon-pin',
    extralink: false,
    submenu: []
  },
  {
    // ITEM ANCLADO CON ico-pinup O SE PUEDE DEJAR EL ICONO ORIGINAL
    path: '/components/inicio',
    title: 'Credito Empresarial',
    icon: 'mdi unisimon-ico ico-pinup',
    class: 'unisimon-pin',
    extralink: false,
    submenu: []
  },
  // {
  //   path: '',
  //   title: 'Cards',
  //   icon: 'mdi mdi-credit-card-multiple',
  //   class: 'has-arrow',
  //   extralink: false,
  //   submenu: [
  //     {
  //       path: '/cards/basiccards',
  //       title: 'Basic Cards',
  //       icon: 'mdi mdi-layers',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //   ]
  // },
];
