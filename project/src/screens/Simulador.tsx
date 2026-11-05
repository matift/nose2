import { useMemo, useState } from 'react';
import { Check, X, ChevronRight, RotateCcw, Trophy } from 'lucide-react';
import Encabezado from '@/components/Encabezado';
import { SITUACIONES, barajarOpciones, OpcionSituacion, Situacion } from '@/data/situaciones';
import { reglaPorId } from '@/data/reglas';
import TarjetaRegla from '@/components/TarjetaRegla';
import { vibrar } from '@/lib/hablar';

interface SimuladorProps {
  onAtras: () => void;
}

export default function Simulador({ onAtras }: SimuladorProps) {
  const situaciones = useMemo<Situacion[]>(
    () => SITUACIONES.map((situacion) => ({ ...situacion, opciones: barajarOpciones(situacion.opciones) })),
    [],
  );
  const [indice, setIndice] = useState(0);
  const [elegida, setElegida] = useState<OpcionSituacion | null>(null);
  const [aciertos, setAciertos] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const actual = situaciones[indice];

  function responder(opcion: OpcionSituacion) {
    if (elegida) return;
    setElegida(opcion);
    if (opcion.correcta) setAciertos((valor) => valor + 1);
    vibrar(opcion.correcta ? 45 : [30, 40, 30]);
  }

  function siguiente() {
    if (indice + 1 === situaciones.length) setTerminado(true);
    else {
      setIndice((valor) => valor + 1);
      setElegida(null);
    }
  }

  function reiniciar() {
    setIndice(0);
    setElegida(null);
    setAciertos(0);
    setTerminado(false);
  }

  if (terminado) {
    return (
      <>
        <Encabezado titulo="Simulador" onAtras={onAtras} />
        <div className="px-4 pt-6 pb-4 text-center">
          <span className="grid place-items-center w-24 h-24 rounded-full bg-amarillo text-azulo mx-auto animate-pop">
            <Trophy className="w-12 h-12" strokeWidth={2.2} />
          </span>
          <p className="mt-4 text-3xl font-extrabold text-azulo">Acertaste {aciertos} de 8</p>
          <p className="mt-2 text-base text-azulo/80 font-semibold">
            {aciertos >= 6 ? '¡Muy bien! Sigue practicando.' : 'Repasa las normas y vuelve a intentarlo.'}
          </p>
          <button
            onClick={reiniciar}
            className="mt-6 inline-flex items-center gap-2 px-6 min-h-[64px] rounded-2xl bg-azulo text-white font-bold text-lg"
          >
            <RotateCcw className="w-5 h-5" /> Intentar otra vez
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Encabezado titulo="Simulador" onAtras={onAtras} />
      <div className="px-4 pt-4 pb-4">
        <p className="text-lg font-extrabold text-azulo mb-3">👆 Responde tocando uno de los botones</p>
        <p className="text-sm font-bold text-azulo/70 mb-2">Situación {indice + 1} de 8</p>
        <div className="h-3 rounded-full bg-azulo/10 mb-4">
          <div className="h-3 rounded-full bg-verde transition-all" style={{ width: `${((indice + (elegida ? 1 : 0)) / 8) * 100}%` }} />
        </div>

        <div className="rounded-3xl bg-white border-2 border-azulo/10 p-5 mb-4 animate-slide-up">
          <p className="text-xl font-extrabold text-azulo leading-tight">{actual.escena}</p>
        </div>

        <div className="flex flex-col gap-3">
          {actual.opciones.map((opcion) => {
            const seleccionada = elegida === opcion;
            const mostrarBien = elegida !== null && opcion.correcta;
            const mostrarMal = seleccionada && !opcion.correcta;
            return (
              <button
                key={opcion.texto}
                onClick={() => responder(opcion)}
                disabled={elegida !== null}
                className={`flex items-center justify-between gap-3 w-full min-h-[68px] rounded-2xl px-4 text-left font-semibold border-2 ${
                  mostrarBien ? 'bg-verde text-white border-verde' : mostrarMal ? 'bg-rojo text-white border-rojo' : 'bg-white text-azulo border-azulo/10'
                }`}
              >
                <span>{opcion.texto}</span>
                {mostrarBien && <Check className="w-6 h-6 shrink-0" />}
                {mostrarMal && <X className="w-6 h-6 shrink-0" />}
              </button>
            );
          })}
        </div>

        {elegida && (
          <div className="mt-4 animate-slide-up">
            <div className={`rounded-2xl p-4 ${elegida.correcta ? 'bg-verde-claro border-2 border-verde' : 'bg-rojo-claro border-2 border-rojo'}`}>
              <p className="text-lg font-extrabold text-azulo flex items-center gap-2">
                {elegida.correcta ? <><Check className="w-6 h-6 text-verde-oscuro" /> Correcto</> : <><X className="w-6 h-6 text-rojo-oscuro" /> Incorrecto</>}
              </p>
              <p className="mt-1 text-base font-semibold text-azulo">Norma relacionada:</p>
            </div>
            <div className="mt-3">
              <TarjetaRegla regla={reglaPorId(elegida.reglaId)!} />
            </div>
            <button
              onClick={siguiente}
              className="mt-4 flex items-center justify-center gap-2 w-full min-h-[64px] rounded-2xl bg-azulo text-white font-bold text-lg"
            >
              {indice + 1 === situaciones.length ? 'Ver resultado' : 'Siguiente situación'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
