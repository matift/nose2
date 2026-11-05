// Banco de preguntas de trivia generadas SOLO a partir de R1–R7.
// El texto oficial se referencia por id de regla; nunca se duplica aquí.

export interface PreguntaTrivia {
  id: number;
  pregunta: string;
  opciones: string[];
  correcta: number; // índice de la opción correcta
  reglaId: 'R1' | 'R2' | 'R3' | 'R4' | 'R5' | 'R6' | 'R7';
}

export const TRIVIA: PreguntaTrivia[] = [
  {
    id: 1,
    pregunta: '¿Cuándo son obligatorios casco, gafas, protección auditiva y botas?',
    opciones: [
      'Solo cuando hay inspección',
      'En todas las zonas demarcadas en amarillo',
      'Solo en bodega',
    ],
    correcta: 1,
    reglaId: 'R1',
  },
  {
    id: 2,
    pregunta: '¿Cuándo puedes intervenir una máquina?',
    opciones: [
      'Cuando está detenida y bloqueada con candado y tarjeta personal',
      'Cuando va lenta',
      'Cuando tu compañero vigila',
    ],
    correcta: 0,
    reglaId: 'R2',
  },
  {
    id: 3,
    pregunta: 'En bodega, ¿por dónde debes caminar?',
    opciones: [
      'Por donde sea más corto',
      'Por las zonas de montacargas',
      'Solo por los pasillos peatonales demarcados en verde',
    ],
    correcta: 2,
    reglaId: 'R3',
  },
  {
    id: 4,
    pregunta: '¿Puedes cruzar por las zonas de montacargas?',
    opciones: [
      'No, está prohibido cruzar por las zonas de montacargas',
      'Sí, si miras a ambos lados',
      'Sí, si vas rápido',
    ],
    correcta: 0,
    reglaId: 'R4',
  },
  {
    id: 5,
    pregunta: '¿Qué deben llevar los visitantes en las áreas de producción?',
    opciones: [
      'Solo el carnet de la empresa',
      'Escarapela visible y estar acompañados por un colaborador',
      'Nada, si vienen con el gerente',
    ],
    correcta: 1,
    reglaId: 'R5',
  },
  {
    id: 6,
    pregunta: '¿En qué plazo se reporta un incidente o casi accidente?',
    opciones: [
      'En un plazo máximo de 24 horas al líder inmediato o a la línea interna de seguridad',
      'Cuando tengas tiempo libre',
      'A fin de mes',
    ],
    correcta: 0,
    reglaId: 'R6',
  },
  {
    id: 7,
    pregunta: 'En una evacuación, ¿qué debes hacer?',
    opciones: [
      'Tomar el ascensor para bajar rápido',
      'Terminar tu tarea y luego salir',
      'Suspender la tarea, seguir la ruta señalizada y reportarte con tu líder en el punto de encuentro',
    ],
    correcta: 2,
    reglaId: 'R7',
  },
  {
    id: 8,
    pregunta: 'En una evacuación, ¿se pueden usar ascensores?',
    opciones: ['Sí, si están libres', 'No, no se usan ascensores', 'Solo si vas con un compañero'],
    correcta: 1,
    reglaId: 'R7',
  },
  {
    id: 9,
    pregunta: '¿Qué elementos son obligatorios en zona amarilla?',
    opciones: [
      'Casco, gafas, protección auditiva y botas',
      'Solo casco',
      'Solo botas',
    ],
    correcta: 0,
    reglaId: 'R1',
  },
  {
    id: 10,
    pregunta: 'Un visitante sin escarapela visible en producción es...',
    opciones: [
      'Algo normal',
      'Un riesgo: debe portar escarapela visible y estar acompañado',
      'Responsabilidad solo de seguridad',
    ],
    correcta: 1,
    reglaId: 'R5',
  },
  {
    id: 11,
    pregunta: '¿A quién se reporta un incidente?',
    opciones: [
      'Al líder inmediato o a la línea interna de seguridad',
      'A tu compañero de turno',
      'A nadie, si no hubo heridos',
    ],
    correcta: 0,
    reglaId: 'R6',
  },
  {
    id: 12,
    pregunta: '¿Qué se debe hacer con la máquina antes de intervenirla?',
    opciones: [
      'Avisar al compañero y trabajar rápido',
      'Dejarla detenida y bloqueada con candado y tarjeta personal',
      'Bajarle la velocidad y revisarla',
    ],
    correcta: 1,
    reglaId: 'R2',
  },
];

// 5 preguntas aleatorias por sesión.
export function preguntasDeSesion(): PreguntaTrivia[] {
  const copia = [...TRIVIA];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia.slice(0, 5);
}
