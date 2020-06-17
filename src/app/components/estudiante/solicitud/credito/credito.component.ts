import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Item, Sublinea, Linea, DocumentoAnexo, EstadoSolicitud } from '../../../../shared/interfaces/item.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.scss']
})

export class CreditoComponent implements OnInit {
  @Output() selectSolicitud: EventEmitter<Item> = new EventEmitter<Item>();
  @ViewChild('modalMensaje', { static: true }) modal: ElementRef;

  public listSolicitudes: Item[];

  public codigoInp: number;
  public estudianteInp: string;
  public lineaInp: string;
  public sublineaInp: string;

  public listdocumentoRequest: DocumentoAnexo[];
  public request: EstadoSolicitud[];

  formSolicitudes: FormGroup;
  displayedColumns: string[] = ['servicio', 'id', 'valor'];

  opcionSeleccionado  = '0';
  verSeleccion        = '';

  ESTUDIANTE_INFO: estudiantes[] = [
    { servicio: 'Matrícula Programa de Derecho', id: 1, valor: 3150000},
    { servicio: 'Matrícula Inglés', id: 2, valor: 410000}
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
    dataSource = new MatTableDataSource<estudiantes>(this.ESTUDIANTE_INFO);


  ngOnInit(): void {
    console.log(this.dataSource);
    this.listSolicitudes = [];
    this.añadirSolicitud(this.solicitudes());
    this.listdocumentoRequest = [];
    this.agregarDocumento(this.DocumentoAnexo());
    this.formSolicitudes = this.formBuilder.group({
      linea: ['', Validators.required],
      sublinea: ['', Validators.required]
    });
  }

  abrirModal(modal) {
    this.modalService.open(modal);
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
      created_at: '09/30/2020',
      servicio: {
        name: 'Programa de Derecho',
        valor: 3150000
      }
    };
  }

  agregarDocumento(item: DocumentoAnexo) {
    this.listdocumentoRequest.push(item);
  }
  DocumentoAnexo(): DocumentoAnexo {
    return {
      id: 1,
      documento: 'Solicitud de Credito 2020',
      fechaCargue: '12-05-2020',
      estudiante: {
        codigo: 200089679,
        documento: 1234092740,
        nombre1: 'kristell',
        apellido1: 'urueta',
        apellido2: 'paez'
      },
      estadoSolicitud: {
        estado: 'Rechazado',
        descripcion: 'No cumple la cuota'
      }
    };
  }

  tabClick(tab) {
    console.log(tab);
  }

  getSolicitudDetalle(item) {
    this.selectSolicitud.emit(item);
  }
  getTable(item) {
    console.log(event);
  }

  change(event) {
    if (event.isUserInput) {
      console.log(event.source.value, event.source.selected);
    }
  }
  getTotalCost() {
    return this.ESTUDIANTE_INFO.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }
  get f() { return this.formSolicitudes.controls; }


}


// tslint:disable-next-line:class-name
export interface estudiantes {
  servicio: string;
  id: number;
  valor: number;
}
