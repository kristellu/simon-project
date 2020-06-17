import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import { Item, EstadoSolicitud, DocumentoAnexo, Sublinea, Linea, estudiantes, Solicitud } from '../../../../shared/interfaces/item.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  selector: 'app-creditodetalle',
  templateUrl: './creditodetalle.component.html',
  styleUrls: ['./creditodetalle.component.scss']
})

export class CreditodetalleComponent implements OnInit {
  @Input() solObj: Item;
  @Output() selectDocument: EventEmitter<Item> = new EventEmitter<Item>();
  @ViewChild('modalMensaje', {static: false}) modal: ElementRef;

  public listSolicitudes: Item;
  // public listSublinea: Sublinea[];
  // public listLinea: Linea[];

  // public codigoInp: number;
  // public estudianteInp: string;
  // public lineaInp: string;
  // public sublineaInp: string;
  // formSolicitud: FormGroup;

  public listdocumentoRequest: DocumentoAnexo[];
  public listSolicitudRequest: Solicitud[];
  public request: EstadoSolicitud[];

  displayedColumns: string[] = ['id', 'fecha', 'codigo', 'nombre', 'valor'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ESTUDIANTE_INFO: estudiantes[] = [
    {id: 1, fecha: '05/20/2020', codigo: '800111225', nombre: 'Nombre SegundoNombre Apellido Segundo Apellido', valor: '500.000'},
    {id: 20, fecha: '05/20/2020', codigo: '800111225', nombre: 'Nombre SegundoNombre Apellido Segundo Apellido', valor: '1.500.000'}
  ];

  constructor(private activatedRoute: ActivatedRoute, private modalService: NgbModal, private formBuilder: FormBuilder) {

  }

   dataSource = new MatTableDataSource<estudiantes>(this.ESTUDIANTE_INFO);

  ngOnInit() {
    this.listdocumentoRequest = [];
    this.agregarDocumento(this.DocumentoAnexo());
    this.listSolicitudes = null;
    this.añadirSolicitud(this.solicitudes());
    this.dataSource.paginator = this.paginator;

   }
  abrirModal(modal) {
    this.modalService.open(modal);
  }
  añadirSolicitud(item: Item) {
    this.listSolicitudes = item;
  }
  getSolicitudDetalle(item) {
    this.selectDocument.emit(item);
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
        estado : 'Rechazado',
        descripcion: 'No cumple la cuota'
      }
    };
  }
  agregarsolicitudes(item: Solicitud) {
    this.listSolicitudRequest.push(item);
  }
  solicitudes(): Item {
    return {
      id: 1,
      estudiante: {
        codigo: 200089679,
        documento: 1234092740,
        nombre1: 'kristell',
        nombre2: 'maria',
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

  consultarCredito(form) {
    console.log(form);

  }

  // get f() { return this.formSolicitud.controls; }
}
