import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retardoSenal',
  standalone: true
})
export class RetardoSenalPipe implements PipeTransform {
  private readonly VELOCIDAD_LUZ_KM_S = 300000;

  transform(distanciaKm: number): string {
    if (distanciaKm == null || distanciaKm < 0) {
      return '0 seg';
    }

    const segundos = distanciaKm / this.VELOCIDAD_LUZ_KM_S;

    if (segundos < 60) {
      const segFormateados = Number(segundos.toFixed(1));
      return `${segFormateados} seg`;
    }

    const minutos = segundos / 60;
    const minFormateados = Number(minutos.toFixed(1));
    return `${minFormateados} min`;
  }
}