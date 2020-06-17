import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {

  displayedColumns: string[] = ['documento', 'id'];
  displayedColumnsCompra: string[] = ['servicio', 'valor'];

  ESTUDIANTE_INFO: estDocuments[] = [
    { documento: 'Actualización hoja de vida', id: 1},
    { documento: 'Certificado de notas', id: 2}
  ];
  ESTUDIANTE_COMPRA: estudiantes[] = [
    { servicio: 'Matrícula Programa de Derecho', valor: 3150000},
    { servicio: 'Matrícula Inglés', valor: 410000}
  ];


  constructor() { }
  dataSource = new MatTableDataSource<estDocuments>(this.ESTUDIANTE_INFO);
  dataSourceCompra = new MatTableDataSource<estudiantes>(this.ESTUDIANTE_COMPRA);

  ngOnInit() {
  }

  getTotalCost() {
    return this.ESTUDIANTE_COMPRA.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }

}
// tslint:disable-next-line:class-name
export interface estDocuments {
  documento: string;
  id: number;
}

// tslint:disable-next-line:class-name
export interface estudiantes {
  servicio: string;
  id?: number;
  valor: number;
}
