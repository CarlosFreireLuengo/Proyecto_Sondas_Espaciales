import { Component } from '@angular/core';
import { CentroControlComponent } from './components/centro-control/centro-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CentroControlComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}