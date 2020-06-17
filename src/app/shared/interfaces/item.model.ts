export interface Estudiante {
    codigo: number;
    documento: number;
    nombre1: string;
    nombre2?: string;
    apellido1: string;
    apellido2: string;
}

export interface Servicio {
    id?: string;
    name: string;
    valor: number;
}
export interface Solicitud {
    id?: number;
    estudiante: Estudiante;
    sublinea: Sublinea;
    created_at: Date;
    total?: number;

}
export interface DocumentoAnexo {
    id?: number;
    documento: string;
    fechaCargue: string;
    estudiante: Estudiante;
    estadoSolicitud?: EstadoSolicitud;
}
export interface EstadoSolicitud {
    solicitud?: Solicitud;
    descripcion: string;
    estado?: string;
}

export interface Linea {
    nombre: string;
    id?: number;
}

export interface Sublinea {
    id?: number;
    linea?: Linea;
    nombre: string;
}

export interface Item {
    id?: number;
    estudiante: Estudiante;
    linea: Linea;
    sublinea: Sublinea;
    total: number;
    created_at: string;
    estadoSolicitud?: EstadoSolicitud;
    servicio?: Servicio;
}
// tslint:disable-next-line:class-name
export interface estudiantes {
    id: number;
    fecha: string;
    codigo: string;
    nombre: string;
    valor: string;
  }

