import { Search, CalendarDays, Gamepad2, BarChart3, ShieldCheck } from 'lucide-react';
import BotonGrande from '@/components/BotonGrande';
import { Pantalla } from '@/components/BarraNav';

interface InicioProps {
  ir: (p: Pantalla) => void;
}

export default function Inicio({ ir }: InicioProps) {
  return (
    <div className="px-4 pt-6 pb-4">
      <div className="flex items-center gap-3 mb-5">
        <span className="grid place-items-center w-14 h-14 rounded-2xl bg-azulo text-amarillo">
          <ShieldCheck className="w-8 h-8" strokeWidth={2.4} />
        </span>
        <div>
          <h1 className="text-2xl font-extrabold text-azulo leading-tight">Consulta de Seguridad</h1>
          <p className="text-base text-azulo/80">Hola, ¿qué necesitas hoy?</p>
        </div>
      </div>

      <p className="text-2xl font-extrabold text-azulo leading-tight mb-4">Toca un botón para empezar 👇</p>

      <div className="flex flex-col gap-3">
        <BotonGrande
          icono={Search}
          titulo="Consultar una norma"
          subtitulo="Busca qué debes hacer"
          color="amarillo"
          onClick={() => ir('guia')}
        />
        <BotonGrande
          icono={CalendarDays}
          titulo="Lección diaria"
          subtitulo="Una norma nueva cada día"
          color="azulo"
          onClick={() => ir('pildora')}
        />
        <BotonGrande
          icono={Gamepad2}
          titulo="Simulador"
          subtitulo="Practica qué harías"
          color="verde"
          onClick={() => ir('simulador')}
        />
        <BotonGrande
          icono={BarChart3}
          titulo="Evaluación"
          subtitulo="Mide qué tanto recuerdas"
          color="rojo"
          onClick={() => ir('trivia')}
        />
      </div>
    </div>
  );
}
