import { Route } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductosComponent } from './productos/productos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ResenasComponent } from './resenas/resenas.component';
import { PedidosProductosComponent } from './pedidos-productos/pedidos-productos.component';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    title : 'index',
    component: IndexComponent,
  },
  {
    path: 'productos',
    title : 'productos de la pagina',
    component: ProductosComponent,
  },
  {
    path: 'quienes-somos',
    title : 'quienes somos',
    component: QuienesSomosComponent,
  },
  {
    path: 'resenas',
    title : 'resenas',
    component: ResenasComponent,
  },
  {
    path: 'pedidos',
    title : 'pedidos-productos',
    component: PedidosProductosComponent,
  },
];