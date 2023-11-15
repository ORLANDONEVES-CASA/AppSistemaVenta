import { DetalleVenta } from "./detalle-venta";

export interface Venta {
    ventaId?: number,
    numeroDocumento?: string,
    tipoPago: string,
    total: string,
    fechaRegistro?: string,
    detalleVenta: DetalleVenta[]
}
