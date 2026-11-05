import { useState } from 'react';
import BarraNav, { Pantalla } from '@/components/BarraNav';
import BotonReportar from '@/components/BotonReportar';
import ModalReportar from '@/components/ModalReportar';
import Inicio from '@/screens/Inicio';
import Guia from '@/screens/Guia';
import Pildora from '@/screens/Pildora';
import Simulador from '@/screens/Simulador';
import Trivia from '@/screens/Trivia';

export default function App() {
  const [pantalla, setPantalla] = useState<Pantalla>('inicio');
  const [modalReporte, setModalReporte] = useState(false);

  function ir(p: Pantalla) {
    setPantalla(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="relative min-h-screen w-full bg-[url('/image.png')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-white/65" aria-hidden="true" />
      <div className="relative min-h-screen mx-auto w-full max-w-[390px] shadow-xl">
        <main className="min-h-screen pb-[148px]">
          {pantalla === 'inicio' && <Inicio ir={ir} />}
          {pantalla === 'guia' && <Guia onAtras={() => ir('inicio')} />}
          {pantalla === 'pildora' && <Pildora onAtras={() => ir('inicio')} />}
          {pantalla === 'simulador' && <Simulador onAtras={() => ir('inicio')} />}
          {pantalla === 'trivia' && <Trivia onAtras={() => ir('inicio')} />}
        </main>

        <BotonReportar onClick={() => setModalReporte(true)} />
        <BarraNav actual={pantalla} ir={ir} />
        {modalReporte && <ModalReportar onClose={() => setModalReporte(false)} />}
      </div>
    </div>
  );
}
