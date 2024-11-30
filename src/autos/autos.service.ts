import { Injectable } from '@nestjs/common';
import { AutosDatosEntrada } from './dto/autos.datosentrada.dto';

@Injectable()
export class AutosService {
    registrarAuto(datosEntrada: AutosDatosEntrada) {
        return datosEntrada;
    }

    listarAutos() {
        return [];
    }
}
