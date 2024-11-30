import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, IsDate, IsNumber, Min, Max, IsNotEmpty, IsDateString } from 'class-validator';

export class AutosDatosEntrada {

    @ApiProperty()
    @IsString({ message: 'Marca debe ser un Texto'}) // Marca debe ser un string
    @IsNotEmpty() // Marca no puede estar vacío
    marca: string;

    @ApiProperty()
    @IsString({ message: 'Modelo debe ser un Texto'}) // Modelo debe ser un string
    @IsNotEmpty() // Modelo no puede estar vacío
    modelo: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: 'Color debe ser un Texto'}) // Color es opcional y debe ser un string
    color?: string;

    @ApiProperty()
    @IsString({ message: 'Chasis debe ser un Texto y Numeros'}) // Chasis debe ser un string
    @IsNotEmpty() // Chasis no puede estar vacío
    chasis: string;

    @ApiProperty()
    @IsString({ message: 'VIN debe ser un Texto y Numeros'}) // VIN debe ser un string
    @IsNotEmpty() // VIN no puede estar vacío
    vin: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsInt() // Año debe ser un número entero
    @Min(1900) // El año debe ser al menos 1900
    @Max(new Date().getFullYear()) // El año no puede ser mayor que el actual
    anio?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber() // Cilindraje debe ser un número
    @Min(0) // Cilindraje no puede ser negativo
    cilindraje?: number;

    @ApiProperty()
    @IsDateString() // Fecha de registro debe ser una cadena de fecha válida
    @IsNotEmpty({ message: 'Fecha de registro no puede estar vacía'}) // Fecha de registro no puede estar vacía
    fechaRegistro: Date;
}
