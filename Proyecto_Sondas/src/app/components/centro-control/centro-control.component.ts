import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sonda } from '../../models/sonda.model';
import { PanelSondaComponent } from '../panel-sonda/panel-sonda.component';

@Component({
  selector: 'app-centro-control',
  standalone: true,
  imports: [CommonModule, PanelSondaComponent],
  templateUrl: './centro-control.component.html',
  styleUrl: './centro-control.component.css'
})
export class CentroControlComponent {
  soloAlertas = false;

  sondas: Sonda[] = [
    { id: 'SN-01', nombre: 'voyager-ix', planetaDestino: 'marte', bateria: 85, distanciaKm: 225000000, enLinea: true, ultimaTransmision: new Date(2026, 10, 18, 10, 30) },
    { id: 'SN-02', nombre: 'helio-probe', planetaDestino: 'venus', bateria: 18, distanciaKm: 41000000, enLinea: true, ultimaTransmision: new Date(2026, 10, 18, 9, 15) },
    { id: 'SN-03', nombre: 'kronos-orbiter', planetaDestino: 'saturno', bateria: 0, distanciaKm: 1400000000, enLinea: false, ultimaTransmision: new Date(2026, 9, 2, 18, 45) },
    { id: 'SN-04', nombre: 'europa-driller', planetaDestino: 'júpiter', bateria: 62, distanciaKm: 628000000, enLinea: true, ultimaTransmision: new Date(2026, 10, 18, 11, 5) }
  ];

  get sondasConectadasCount(): number {
    return this.sondas.filter((s) => s.enLinea === true).length;
  }

  get sondasFiltradas(): Sonda[] {
    if (!this.soloAlertas) {
      return this.sondas;
    }
    return this.sondas.filter((s) => s.bateria < 20 || !s.enLinea);
  }

  toggleFiltroAlertas(): void {
    this.soloAlertas = !this.soloAlertas;
  }

  ejecutarRecargaSolar(idSonda: string): void {
    this.sondas = this.sondas.map((sonda) => {
      if (sonda.id !== idSonda) {
        return sonda;
      }

      const nuevaBateria = Math.min(100, sonda.bateria + 25);
      return {
        ...sonda,
        bateria: nuevaBateria,
        enLinea: true
      };
    });
  }
}