"use client";

import { useMemo, useState } from "react";

const opcionesOrganigrama = [
  {
    nombre: "Despacho del Gobernador",
    nivelJerarquico: "Nivel directivo",
    competencia: "Direccion estrategica",
    impacto: "Muy alto",
    descripcion:
      "Instancia superior de direccion del departamento, responsable de orientar la gestion institucional y articular las decisiones de gobierno.",
  },
  {
    nombre: "Secretarias departamentales",
    nivelJerarquico: "Nivel central",
    competencia: "Misional y administrativa",
    impacto: "Alto",
    descripcion:
      "Dependencias encargadas de liderar politicas publicas, programas y servicios sectoriales de la administracion departamental.",
  },
  {
    nombre: "Departamentos administrativos",
    nivelJerarquico: "Nivel central",
    competencia: "Planeacion y soporte institucional",
    impacto: "Alto",
    descripcion:
      "Unidades que orientan procesos transversales, tecnicos y administrativos necesarios para la gestion del departamento.",
  },
  {
    nombre: "Gerencias",
    nivelJerarquico: "Nivel directivo",
    competencia: "Gestion estrategica",
    impacto: "Medio alto",
    descripcion:
      "Equipos responsables de coordinar asuntos, proyectos o poblaciones priorizadas dentro de la estructura organica departamental.",
  },
  {
    nombre: "Oficinas asesoras",
    nivelJerarquico: "Nivel asesor",
    competencia: "Asesoria y control",
    impacto: "Medio",
    descripcion:
      "Dependencias que prestan apoyo especializado para la toma de decisiones, el seguimiento y la mejora institucional.",
  },
  {
    nombre: "Entidades descentralizadas",
    nivelJerarquico: "Sector descentralizado",
    competencia: "Ejecucion especializada",
    impacto: "Alto",
    descripcion:
      "Entidades vinculadas o adscritas que ejecutan funciones especializadas en sectores definidos de la administracion publica.",
  },
];

const baseDependencia = {
  marcoNormativo:
    "Marco normativo provisional asociado a la dependencia, sus funciones y su alcance institucional.",
  normasComplementarias:
    "Normas relacionadas o complementarias que se agregaran cuando se consolide la informacion oficial.",
  cargoResponsable: "Cargo del jefe o responsable",
  nombreResponsable: "Nombre del jefe o responsable actual",
  correo: "correo.institucional@antioquia.gov.co",
  telefono: "Telefono por confirmar",
  extension: "No aplica",
  direccion: "Direccion fisica por confirmar",
  municipio: "Municipio o sede por confirmar",
  horario: "Horario de atencion al publico por confirmar",
  recibePqrsd: "Si",
  canalesPqrsd: ["Presencial", "Virtual", "Mixto"],
  enlacePqrsd: "Enlace directo al canal de PQRSD por confirmar",
  poblacionObjetivo:
    "Poblacion objetivo principal de la dependencia por definir.",
  observaciones:
    "Observaciones adicionales relevantes que permitan contextualizar la gestion de la dependencia.",
};

const funciones = [
  "Funcion principal de la dependencia por completar.",
  "Responsabilidad institucional asociada a su proceso o servicio.",
  "Actividad clave que evidencia su aporte dentro de la estructura organica departamental.",
];

export default function DirectorioDependencias() {
  const [opcionActiva, setOpcionActiva] = useState(null);

  const dependencia = useMemo(() => {
    if (!opcionActiva) {
      return null;
    }

    return {
      ...baseDependencia,
      ...opcionActiva,
    };
  }, [opcionActiva]);

  if (dependencia) {
    return (
      <FichaDependencia
        dependencia={dependencia}
        onVolver={() => setOpcionActiva(null)}
      />
    );
  }

  return <VistaOrganigrama onSeleccionar={setOpcionActiva} />;
}

function VistaOrganigrama({ onSeleccionar }) {
  return (
    <main className="min-h-screen bg-[#f6f8f4] text-[#17231c]">
      <header className="border-b border-[#d8dfd5] bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
              Gobernacion de Antioquia
            </p>
            <h1 className="text-xl font-bold">
              Estructura Organica Departamental
            </h1>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
            Organigrama institucional
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Selecciona una dependencia para ver su ficha
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#52645a]">
            Cada opcion abre la vista informativa de la dependencia con los
            datos generales, funciones, normativa y canales de contacto.
          </p>
        </div>

        <div className="mt-10">
          <div className="mx-auto w-full max-w-md rounded-lg border border-[#2f7d46] bg-white px-6 py-5 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
              Nivel superior
            </p>
            <h3 className="mt-2 text-2xl font-bold">Gobernador de Antioquia</h3>
          </div>

          <div className="mx-auto h-10 w-px bg-[#9caf99]" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {opcionesOrganigrama.map((opcion) => (
              <button
                className="min-h-40 rounded-lg border border-[#d2ddce] bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#2f7d46] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#2f7d46] focus:ring-offset-2"
                key={opcion.nombre}
                onClick={() => onSeleccionar(opcion)}
                type="button"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f7d46]">
                  {opcion.nivelJerarquico}
                </span>
                <span className="mt-3 block text-xl font-bold">
                  {opcion.nombre}
                </span>
                <span className="mt-3 block text-sm leading-6 text-[#52645a]">
                  {opcion.descripcion}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FichaDependencia({ dependencia, onVolver }) {
  const resumen = [
    {
      titulo: "Nivel jerarquico",
      valor: dependencia.nivelJerarquico,
    },
    {
      titulo: "Competencia predominante",
      valor: dependencia.competencia,
    },
    {
      titulo: "Impacto institucional",
      valor: dependencia.impacto,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f8f4] text-[#17231c]">
      <header className="border-b border-[#d8dfd5] bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
              Gobernacion de Antioquia
            </p>
            <h1 className="text-xl font-bold">
              Estructura Organica Departamental
            </h1>
          </div>
          <div className="hidden gap-6 text-sm font-medium text-[#405348] md:flex">
            <a href="#dependencia">Dependencia</a>
            <a href="#funciones">Funciones</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <button
              className="mb-5 rounded-md border border-[#b9c6b7] px-4 py-2 text-sm font-semibold text-[#23402c] transition hover:border-[#2f7d46] hover:text-[#2f7d46]"
              onClick={onVolver}
              type="button"
            >
              Volver al organigrama
            </button>
            <p className="mb-4 inline-flex rounded-full bg-[#e5f3e8] px-4 py-2 text-sm font-semibold text-[#216537]">
              Informacion capturada desde Forms
            </p>
            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#132018] md:text-6xl">
              {dependencia.nombre}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5d52]">
              {dependencia.descripcion}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#dependencia"
                className="rounded-md bg-[#246b37] px-5 py-3 text-sm font-semibold text-white"
              >
                Ver ficha
              </a>
            </div>
          </div>

          <aside className="overflow-hidden rounded-lg border border-[#d8dfd5] bg-[#f0f5ed]">
            <div className="h-52 bg-[linear-gradient(135deg,#2f7d46_0%,#7dbb4d_42%,#f0c34f_42%,#f0c34f_58%,#ffffff_58%,#ffffff_100%)]" />
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
                Ficha institucional
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Dependencia departamental
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#52645a]">
                Esta tarjeta puede alimentarse con las respuestas del
                formulario para mostrar una vista clara y ordenada de cada
                dependencia.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {resumen.map((item) => (
            <article
              className="rounded-lg border border-[#d8dfd5] bg-white p-6"
              key={item.titulo}
            >
              <p className="text-sm font-semibold text-[#607065]">
                {item.titulo}
              </p>
              <p className="mt-3 text-2xl font-bold text-[#246b37]">
                {item.valor}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[0.8fr_1.2fr]"
        id="dependencia"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
            Datos generales
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Identificacion de la dependencia
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard
            titulo="Nombre de la dependencia"
            valor={dependencia.nombre}
          />
          <InfoCard
            titulo="Nivel jerarquico"
            valor={dependencia.nivelJerarquico}
          />
          <InfoCard
            titulo="Tipo de competencia predominante"
            valor={dependencia.competencia}
          />
          <InfoCard
            titulo="Nivel de impacto institucional"
            valor={dependencia.impacto}
          />
        </div>
      </section>

      <section className="bg-[#17231c] px-6 py-12 text-white" id="funciones">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a8d577]">
              Funciones
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Funciones principales de la dependencia
            </h2>
            <p className="mt-4 leading-7 text-white/75">
              El formulario puede recibir una o varias funciones. Por ahora se
              muestran ejemplos para conservar la estructura visual.
            </p>
          </div>
          <div className="grid gap-4">
            {funciones.map((funcion, index) => (
              <article
                className="rounded-lg border border-white/15 bg-white/8 p-5"
                key={funcion}
              >
                <p className="text-sm font-semibold text-[#a8d577]">
                  Funcion {index + 1}
                </p>
                <p className="mt-2 leading-7">{funcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-lg border border-[#d8dfd5] bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
              Marco normativo
            </p>
            <h2 className="mt-3 text-2xl font-bold">Normativa aplicable</h2>
            <p className="mt-4 leading-7 text-[#52645a]">
              {dependencia.marcoNormativo}
            </p>
          </article>
          <article className="rounded-lg border border-[#d8dfd5] bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
              Normas complementarias
            </p>
            <h2 className="mt-3 text-2xl font-bold">Relacion normativa</h2>
            <p className="mt-4 leading-7 text-[#52645a]">
              {dependencia.normasComplementarias}
            </p>
          </article>
        </div>
      </section>

      <section
        className="border-y border-[#d8dfd5] bg-white px-6 py-12"
        id="contacto"
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
              Responsable y contacto
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Canales de atencion de la dependencia
            </h2>
            <p className="mt-4 leading-7 text-[#52645a]">
              Esta informacion permite ubicar al responsable, la sede y los
              medios oficiales de atencion a la ciudadania.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard
              titulo="Cargo del jefe o responsable"
              valor={dependencia.cargoResponsable}
            />
            <InfoCard
              titulo="Nombre del jefe o responsable actual"
              valor={dependencia.nombreResponsable}
            />
            <InfoCard
              titulo="Correo electronico institucional"
              valor={dependencia.correo}
            />
            <InfoCard
              titulo="Numero telefonico de contacto"
              valor={dependencia.telefono}
            />
            <InfoCard titulo="Extension" valor={dependencia.extension} />
            <InfoCard titulo="Direccion fisica" valor={dependencia.direccion} />
            <InfoCard
              titulo="Municipio o sede donde opera"
              valor={dependencia.municipio}
            />
            <InfoCard
              titulo="Horario de atencion al publico"
              valor={dependencia.horario}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-2">
        <article className="rounded-lg border border-[#d8dfd5] bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
            PQRSD
          </p>
          <h2 className="mt-3 text-2xl font-bold">
            Recepcion de peticiones, quejas, reclamos, sugerencias y denuncias
          </h2>
          <div className="mt-5 space-y-4 text-[#52645a]">
            <p>
              <span className="font-semibold text-[#17231c]">
                Recibe PQRSD:{" "}
              </span>
              {dependencia.recibePqrsd}
            </p>
            <p>
              <span className="font-semibold text-[#17231c]">Canales: </span>
              {dependencia.canalesPqrsd.join(", ")}
            </p>
            <p>
              <span className="font-semibold text-[#17231c]">Enlace: </span>
              {dependencia.enlacePqrsd}
            </p>
          </div>
        </article>

        <article className="rounded-lg border border-[#d8dfd5] bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d46]">
            Alcance
          </p>
          <h2 className="mt-3 text-2xl font-bold">
            Poblacion objetivo y observaciones
          </h2>
          <p className="mt-5 leading-7 text-[#52645a]">
            {dependencia.poblacionObjetivo}
          </p>
          <p className="mt-4 leading-7 text-[#52645a]">
            {dependencia.observaciones}
          </p>
        </article>
      </section>
    </main>
  );
}

function InfoCard({ titulo, valor }) {
  return (
    <article className="rounded-lg border border-[#d8dfd5] bg-white p-6">
      <p className="text-sm font-semibold text-[#607065]">{titulo}</p>
      <p className="mt-3 leading-7 text-[#17231c]">{valor}</p>
    </article>
  );
}
