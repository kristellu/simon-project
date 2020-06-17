import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Item, Sublinea, Linea, estudiantes } from '../../../../shared/interfaces/item.model';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-creditoempresarial',
  templateUrl: './creditoempresarial.component.html',
  styleUrls: ['./creditoempresarial.component.scss']
})

export class CreditoempresarialComponent implements OnInit {
  @Output() selectSolicitud: EventEmitter<Item> = new EventEmitter<Item>();

  public listSolicitudes: Item[];
  public listSublinea: Sublinea[];
  public listLinea: Linea[];

  public codigoInp: number;
  public estudianteInp: string;
  public lineaInp: string;
  public sublineaInp: string;
  formSolicitudes: FormGroup;

  displayedColumns: string[] = ['id', 'fecha', 'codigo', 'nombre', 'valor'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ESTUDIANTE_INFO: estudiantes[] = [
    {id: 1, fecha: '05/20/2020', codigo: '800111225', nombre: 'Nombre SegundoNombre Apellido Segundo Apellido', valor: '500.000'},
    {id: 20, fecha: '05/20/2020', codigo: '800111225', nombre: 'Nombre SegundoNombre Apellido Segundo Apellido', valor: '1.500.000'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.formSolicitudes = this.formBuilder.group({
      solicitudes: [false, Validators.required],
      codigo: ['154589', Validators.required],
      estudiante: ['', Validators.required],
      credito: ['', Validators.required],
      subcredito: ['', Validators.required]
    });
  }
  dataSource = new MatTableDataSource<estudiantes>(this.ESTUDIANTE_INFO);

  ngOnInit(): void {
    this.listSolicitudes = [];
    this.añadirSolicitud(this.solicitudes());
    this.dataSource.paginator = this.paginator;
  }


  añadirSolicitud(item: Item) {
    this.listSolicitudes.push(item);
  }

  solicitudes(): Item {
    return {
      id: 1,
      estudiante: {
        codigo: 200089679,
        documento: 1234092740,
        nombre1: 'kristell',
        apellido1: 'urueta',
        apellido2: 'paez'
      },
      linea: {
        nombre: 'Linea prueba'
      },
      sublinea: {
        linea: {
          nombre: 'prueba'
        },
        nombre: 'sublinea'
      },
      total: 2000,
      estadoSolicitud: {
        descripcion: 'hola hola'
      },
      created_at: '09/30/2020'
    };
  }

  tabClick(tab) {
    console.log(tab);
  }

  selectLine(event) {
    console.log(event);
  }

  getSolicitudDetalle(item) {
    this._router.navigate(['/components/detalle']);
    // this.selectSolicitud.emit(item);
  }
  getTable(item) {
    console.log(event);
  }

  // tslint:disable-next-line:member-ordering
  matcher = new MyErrorStateMatcher();

  consultarCredito(form) {
    console.log(form);

  }

  get f() { return this.formSolicitudes.controls; }
}
