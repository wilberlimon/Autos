import { Body, Controller, Get, Post } from '@nestjs/common';
import { AutosDatosEntrada } from './dto/autos.datosentrada.dto';

@Controller('autos')
export class AutosController {
    constructor() {}

    @Post('crear')
    Registrar(@Body() datosEntrada: AutosDatosEntrada) {
        return datosEntrada;
    }

    @Get('listar')
    listar() {
        return [];
    }

}
