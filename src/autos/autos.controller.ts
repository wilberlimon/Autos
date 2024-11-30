import { Body, Controller, Get, Post } from '@nestjs/common';
import { AutosDatosEntrada } from './dto/autos.datosentrada.dto';
import { AutosService } from './autos.service';

@Controller('autos')
export class AutosController {
    constructor(private readonly serviceAutos: AutosService) {}

    @Post('crear')
    Registrar(@Body() datosEntrada: AutosDatosEntrada) {
       const respuesta = this.serviceAutos.registrarAuto(datosEntrada);
       console.log(respuesta);
       
       return respuesta;
    }

    @Get('listar')
    listar() {
        return [];
    }

}
