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
    <main className="min-h-screen bg-[#f6f8f4] text-[#17231c]">
      <header className="border-b border-[#d8dfd5] bg-white">
        <nav className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-5">
          <MenuSuperior />
          <MarcaGobernacion />
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
            Vista principal
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Selecciona una secretaria u organismo principal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#52645a]">
            Primero eliges el organismo principal. Luego puedes ver su ficha o
            navegar por las dependencias y direcciones que se desprenden de el.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold text-[#2f7d46]">
          <span className="rounded-full bg-white px-4 py-2 shadow-sm">
            {estructuraOrganica.length} organismos principales
          </span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm">
            Navegacion por niveles
          </span>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {estructuraOrganica.map((nodo) => (
            <button
              className="min-h-32 rounded-lg border border-[#d8dfd5] bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#2f7d46] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#2f7d46] focus:ring-offset-2"
              key={nodo.nombre}
              onClick={() => abrirOpciones(nodo)}
              type="button"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2f7d46]">
                {nodo.tipo}
              </span>
              <span className="mt-3 block text-xl font-bold leading-6">
                {nodo.nombre}
              </span>
              {obtenerHijos(nodo).length > 0 ? (
                <span className="mt-3 block text-sm text-[#52645a]">
                  {obtenerHijos(nodo).length} dependencias vinculadas
                </span>
              ) : (
                <span className="mt-3 block text-sm text-[#52645a]">
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
