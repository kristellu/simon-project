import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.scss']
})
export class CargarComponent implements OnInit {
  displayedColumns: string[] = ['documento', 'id'];
  ESTUDIANTE_INFO: estDocuments[] = [
    { documento: 'Actualización hoja de vida', id: 1},
    { documento: 'Certificado de notas', id: 2}
  ];
  constructor() { }
  dataSource = new MatTableDataSource<estDocuments>(this.ESTUDIANTE_INFO);
  ngOnInit() {
  }

}
// tslint:disable-next-line:class-name
export interface estDocuments {
  documento: string;
  id: number;
}
