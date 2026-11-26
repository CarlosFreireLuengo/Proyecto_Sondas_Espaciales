export interface Sonda {
  id: string;
  nombre: string;
  planetaDestino: string;
  bateria: number;          // Porcentaje de 0 a 100
  distanciaKm: number;      // Distancia a la Tierra en kilómetros
  enLinea: boolean;
  ultimaTransmision: Date;
}