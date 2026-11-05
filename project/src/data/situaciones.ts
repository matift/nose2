export interface OpcionSituacion {
  texto: string;
  correcta: boolean;
  reglaId: 'R1' | 'R2' | 'R3' | 'R4' | 'R5' | 'R6' | 'R7';
}

export interface Situacion {
  id: number;
  escena: string;
  opciones: OpcionSituacion[];
}

export const SITUACIONES: Situacion[] = [
  {
    id: 1,
    escena: 'A Camilo le piden arreglar rápido una banda que sigue prendida.',
    opciones: [
      { texto: 'Arreglarla de una vez', correcta: false, reglaId: 'R2' },
      { texto: 'Dejarla detenida y bloqueada con candado y tarjeta personal', correcta: true, reglaId: 'R2' },
      { texto: 'Pedirle a otro que la arregle', correcta: false, reglaId: 'R2' },
    ],
  },
  {
    id: 2,
    escena: 'A Lina le falta poco para terminar y quiere ahorrar tiempo cruzando bodega.',
    opciones: [
      { texto: 'Cruzar por la zona de montacargas', correcta: false, reglaId: 'R4' },
      { texto: 'Caminar por el pasillo peatonal verde', correcta: true, reglaId: 'R3' },
    ],
  },
  {
    id: 3,
    escena: 'Un compañero insiste: “entra un minuto”. Andrés no tiene las gafas puestas.',
    opciones: [
      { texto: 'Entrar solo un momento', correcta: false, reglaId: 'R1' },
      { texto: 'Ponerse casco, gafas, protección auditiva y botas', correcta: true, reglaId: 'R1' },
      { texto: 'Entrar rápido y salir', correcta: false, reglaId: 'R1' },
    ],
  },
  {
    id: 4,
    escena: 'Un contratista entra solo a producción con la escarapela guardada en el bolsillo.',
    opciones: [
      { texto: 'Dejarlo seguir solo', correcta: false, reglaId: 'R5' },
      { texto: 'Avisar a tu líder inmediato o a la línea interna de seguridad', correcta: true, reglaId: 'R6' },
    ],
  },
  {
    id: 5,
    escena: 'Suena la alarma. El ascensor está vacío y Sara está cansada de su turno.',
    opciones: [
      { texto: 'Tomar el ascensor', correcta: false, reglaId: 'R7' },
      { texto: 'Suspender la tarea, seguir la ruta señalizada y reportarse con su líder en el punto de encuentro', correcta: true, reglaId: 'R7' },
      { texto: 'Terminar la tarea antes de salir', correcta: false, reglaId: 'R7' },
    ],
  },
  {
    id: 6,
    escena: 'Una caja casi cae junto a Mateo. Nadie más lo vio y él sigue cansado.',
    opciones: [
      { texto: 'No decir nada', correcta: false, reglaId: 'R6' },
      { texto: 'Reportarlo como casi accidente en máximo 24 horas', correcta: true, reglaId: 'R6' },
    ],
  },
  {
    id: 7,
    escena: 'Julia va a entrar a la zona amarilla con afán y se da cuenta de que no tiene las botas puestas.',
    opciones: [
      { texto: 'Entrar rápido, es solo un momento', correcta: false, reglaId: 'R1' },
      { texto: 'Usar casco, gafas, protección auditiva y botas', correcta: true, reglaId: 'R1' },
    ],
  },
  {
    id: 8,
    escena: 'El montacargas se acerca y Pedro piensa cruzar porque el pasillo verde queda más lejos.',
    opciones: [
      { texto: 'Cruzar rápido antes de que llegue', correcta: false, reglaId: 'R4' },
      { texto: 'Caminar solo por el pasillo peatonal demarcado en verde', correcta: true, reglaId: 'R3' },
    ],
  },
];

export function barajarOpciones<T>(opciones: T[]): T[] {
  const copia = [...opciones];
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export function reglaDelDia() {
  const inicio = new Date(new Date().getFullYear(), 0, 0);
  const diaDelAno = Math.floor((Date.now() - inicio.getTime()) / 86400000);
  return diaDelAno % 7;
}
