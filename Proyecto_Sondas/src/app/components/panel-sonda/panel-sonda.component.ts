import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Sonda } from '../../models/sonda.model';
import { PulsoAlertaDirective } from '../../directives/pulso-alerta.directive';
import { RetardoSenalPipe } from '../../pipes/retardo-senal.pipe';

@Component({
  selector: 'app-panel-sonda',
  standalone: true,
  imports: [
    CommonModule,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    RetardoSenalPipe,
    PulsoAlertaDirective
  ],
  templateUrl: './panel-sonda.component.html',
  styleUrl: './panel-sonda.component.css'
})
export class PanelSondaComponent {
  @Input({ required: true }) sonda!: Sonda;
  @Output() recargarSonda = new EventEmitter<string>();

  get bateriaCritica(): boolean {
    return this.sonda.bateria < 20;
  }

  get colorBateria(): string {
    if (this.sonda.bateria < 20) return '#e53935';
    if (this.sonda.bateria < 50) return '#fb8c00';
    return '#43a047';
  }

  onEnviarRecarga(): void {
    this.recargarSonda.emit(this.sonda.id);
  }
}