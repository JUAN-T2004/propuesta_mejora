"use client";

import { useMemo, useState } from "react";
import {
  crearDependencia,
  estructuraOrganica,
  FichaDependencia,
  MarcaGobernacion,
  MenuSuperior,
  ModalOpciones,
  obtenerHijos,
} from "./components/DirectorioDependencias";

export default function Home() {
  const [opcionActiva, setOpcionActiva] = useState(null);
  const [modalActivo, setModalActivo] = useState(null);
  const [listaActiva, setListaActiva] = useState(null);

  const dependencia = useMemo(() => {
    if (!opcionActiva) {
      return null;
    }

    return crearDependencia(opcionActiva.nodo, opcionActiva.padre);
  }, [opcionActiva]);

  function abrirOpciones(nodo, padre = null) {
    const hijos = obtenerHijos(nodo);

    if (hijos.length === 0) {
      setOpcionActiva({ nodo, padre });
      return;
    }

    setListaActiva(null);
    setModalActivo({ nodo, padre });
  }

  function cerrarModal() {
    setModalActivo(null);
    setListaActiva(null);
  }

  function verInformacion(nodo, padre = null) {
    setModalActivo(null);
    setListaActiva(null);
    setOpcionActiva({ nodo, padre });
  }

  function verHijos(nodo, padre = null) {
    setListaActiva({ nodo, padre, hijos: obtenerHijos(nodo) });
  }

  if (dependencia) {
    return (
      <FichaDependencia
        dependencia={dependencia}
        onVolver={() => setOpcionActiva(null)}
      />
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f6f1] text-[#17231c]">
      <header className="sticky top-0 z-30 border-b border-[#d8dfd5] bg-white/95 shadow-sm backdrop-blur">
        <nav className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
          <MenuSuperior />
          <MarcaGobernacion />
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="overflow-hidden rounded-lg border border-[#d8dfd5] bg-white shadow-sm">
          <div className="grid gap-8 border-b border-[#d8dfd5] px-6 py-8 md:grid-cols-[1.3fr_0.7fr] md:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f7d46]">
                Vista principal
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-[#132018] md:text-5xl">
                Selecciona una secretaria u organismo principal
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#52645a]">
                Primero eliges el organismo principal. Luego puedes ver su ficha o
                navegar por las dependencias y direcciones que se desprenden de el.
              </p>
            </div>

            <div className="grid content-center gap-3 text-sm font-semibold text-[#23402c]">
              <span className="rounded-md border border-[#d8dfd5] bg-[#f8faf6] px-4 py-3">
                {estructuraOrganica.length} organismos principales
              </span>
              <span className="rounded-md border border-[#d8dfd5] bg-[#f8faf6] px-4 py-3">
                Navegacion por niveles
              </span>
            </div>
          </div>

          <div className="h-2 bg-[linear-gradient(90deg,#176b36_0%,#80a93f_50%,#e2b53f_50%,#e2b53f_100%)]" />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {estructuraOrganica.map((nodo) => (
            <button
              className="group min-h-36 rounded-lg border border-[#d8dfd5] bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#2f7d46] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2f7d46] focus:ring-offset-2"
              key={nodo.nombre}
              onClick={() => abrirOpciones(nodo)}
              type="button"
            >
              <span className="flex items-start justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#2f7d46]">
                  {nodo.tipo}
                </span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#d8dfd5] text-[#2f7d46] transition group-hover:border-[#2f7d46] group-hover:bg-[#edf7ef]"
                  aria-hidden="true"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M8 5l7 7-7 7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </span>
              <span className="mt-4 block text-xl font-bold leading-7 text-[#17231c]">
                {nodo.nombre}
              </span>
              {obtenerHijos(nodo).length > 0 ? (
                <span className="mt-4 block border-t border-[#edf1ea] pt-4 text-sm text-[#52645a]">
                  {obtenerHijos(nodo).length} dependencias vinculadas
                </span>
              ) : (
                <span className="mt-4 block border-t border-[#edf1ea] pt-4 text-sm text-[#52645a]">
                  Consulta directa de informacion
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {modalActivo ? (
        <ModalOpciones
          listaActiva={listaActiva}
          modalActivo={modalActivo}
          onAbrirOpciones={abrirOpciones}
          onCerrar={cerrarModal}
          onVerHijos={verHijos}
          onVerInformacion={verInformacion}
        />
      ) : null}
    </main>
  );
}
