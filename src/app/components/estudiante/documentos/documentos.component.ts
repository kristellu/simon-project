import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material/table';
import { Linea, Sublinea } from 'src/app/shared/interfaces/item.model';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {
  formSolicitudes: FormGroup;
  displayedColumns: string[] = ['documento', 'id'];

  ESTUDIANTE_INFO: estDocuments[] = [
    { documento: 'Actualización hoja de vida', id: 1},
    { documento: 'Certificado de notas', id: 2}
  ];
  listLinea: Linea[] = [
    {id: 1, nombre: 'ICETEX'},
    {id: 2, nombre: 'SUFI'}
  ];

  listSublinea: Sublinea[] = [
    {id: 1, nombre: 'Alianza Suma tu Región Barranquilla'}
  ];

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder) { }
    dataSource = new MatTableDataSource<estDocuments>(this.ESTUDIANTE_INFO);

  ngOnInit(): void {
    this.formSolicitudes = this.formBuilder.group({
      linea: ['', Validators.required],
      sublinea: ['', Validators.required]
    });
  }

  get f() { return this.formSolicitudes.controls; }
}
// tslint:disable-next-line:class-name
export interface estDocuments {
  documento: string;
  id: number;
}
