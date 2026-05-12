"use client";

import Image from "next/image";
import { useState } from "react";

export const estructuraOrganica = [
  {
    nombre: "Gerencia de Auditoria Interna",
    tipo: "Gerencia",
  },
  {
    nombre: "Gerencia de Control Interno Disciplinario",
    tipo: "Gerencia",
  },
  {
    nombre: "Departamento Administrativo de Gestion del Riesgo de Desastres - Dagran",
    tipo: "Departamento administrativo",
    dependencias: [
      {
        nombre: "Direccion de Conocimiento y Reduccion del Riesgo",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Manejo de Desastres",
        tipo: "Direccion",
      },
    ],
  },
  {
    nombre: "Departamento Administrativo de Planeacion",
    tipo: "Departamento administrativo",
    dependencias: [
      {
        nombre: "Gerencia de Catastro",
        tipo: "Gerencia",
      },
      {
        nombre: "Direccion de Informacion y Estudios Economicos",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Gestion Territorial de las Tic",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Planeacion Territorial",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Proyectos e Inversion Publica",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Seguimiento y Evaluacion de la Gestion y Politicas Publicas",
        tipo: "Direccion",
      },
    ],
  },
  {
    nombre: "Oficina Privada",
    tipo: "Oficina",
    dependencias: [
      {
        nombre: "Gerencia de Proyectos Especiales",
        tipo: "Gerencia",
        direcciones: [
          {
            nombre: "Direccion de Gestion de Proyectos",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion del Conglomerado",
            tipo: "Direccion",
          },
        ],
      },
      {
        nombre: "Unidad de Programas Sociales",
        tipo: "Unidad",
        direcciones: [
          {
            nombre: "Direccion de Infancia, Adolescencia y Familia",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Seguridad Alimentaria y Nutricional",
            tipo: "Direccion",
          },
        ],
      },
      {
        nombre: "Gerencia de Relacionamiento",
        tipo: "Gerencia",
        direcciones: [
          {
            nombre: "Direccion de Cooperacion e Internacionalizacion",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Comunicaciones",
            tipo: "Direccion",
          },
        ],
      },
    ],
  },
  {
    nombre: "Secretaria de Ambiente",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Direccion de Agua y Saneamiento",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Electrificacion",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Recursos Naturales",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Sostenibilidad Ambiental y Cambio Climatico",
        tipo: "Direccion",
      },
      {
        nombre: "Gerencia de Proteccion y Bienestar Animal",
        tipo: "Gerencia",
      },
    ],
  },
  {
    nombre: "Secretaria de Desarrollo Economico",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Direccion de Productividad y Competitividad",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Turismo",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Desarrollo Rural",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion Minero Energetica",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Planificacion y Comercializacion Agropecuaria",
        tipo: "Direccion",
      },
    ],
  },
  {
    nombre: "Secretaria de Educacion",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Direccion de Asuntos Legales - Educacion",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Inspeccion Vigilancia y Control del Servicio Educativo",
        tipo: "Direccion",
      },
      {
        nombre: "Subsecretaria Administrativa y Financiera",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion Financiera",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Talento Humano",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Nomina y Prestaciones Sociales",
            tipo: "Direccion",
          },
        ],
      },
      {
        nombre: "Subsecretaria de Calidad Educativa",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion de Infraestructura Fisica y Tecnologica",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion Permanencia Escolar e Inclusion Educativa",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Calidad y Trayectorias Educativas",
            tipo: "Direccion",
          },
        ],
      },
    ],
  },
  {
    nombre: "Secretaria de Gobierno",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Direccion de Asuntos Institucionales",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Participacion Comunitaria y Ciudadana",
        tipo: "Direccion",
      },
      {
        nombre: "Gerencia Afrodescendientes",
        tipo: "Gerencia",
      },
      {
        nombre: "Gerencia de Municipios",
        tipo: "Gerencia",
      },
      {
        nombre: "Gerencia Indigena",
        tipo: "Gerencia",
      },
    ],
  },
  {
    nombre: "Secretaria de Hacienda",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Subsecretaria Financiera",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion de Contabilidad",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Presupuesto",
            tipo: "Direccion",
          },
        ],
      },
      {
        nombre: "Subsecretaria de Ingresos",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion de Fiscalizacion y Control",
            tipo: "Direccion",
          },
        ],
      },
      {
        nombre: "Subsecretaria de Tesoreria",
        tipo: "Subsecretaria",
      },
    ],
  },
  {
    nombre: "Secretaria de Infraestructura Fisica",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Direccion Administrativa y Financiera - Infraestructura Fisica",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Asuntos Legales - Infraestructura Fisica",
        tipo: "Direccion",
      },
      {
        nombre: "Subsecretaria Operativa de Infraestructura Fisica",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion Desarrollo Fisico",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Gestion Social, Ambiental y Predial",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Infraestructura y Apoyo Territorial",
            tipo: "Direccion",
          },
        ],
      },
      {
        nombre: "Subsecretaria de Planeacion, Proyectos Estrategicos y Apps",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion de Estructuracion de Proyectos",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Instrumentos de Financiacion",
            tipo: "Direccion",
          },
        ],
      },
    ],
  },
  {
    nombre: "Secretaria de la Juventud",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Direccion de Transversalizacion",
        tipo: "Direccion",
      },
    ],
  },
  {
    nombre: "Secretaria de las Mujeres",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Direccion Desarrollo y Autonomia Economica",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Transversalizacion",
        tipo: "Direccion",
      },
    ],
  },
  {
    nombre: "Secretaria de Salud e Inclusion Social",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Direccion Administrativa y Financiera - Salud",
        tipo: "Direccion",
      },
      {
        nombre: "Direccion de Asuntos Legales - Salud",
        tipo: "Direccion",
      },
      {
        nombre: "Subsecretaria de Salud Publica",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion Laboratorio Departamental de Salud Publica",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Salud Ambiental y Factores de Riesgo",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Salud Colectiva",
            tipo: "Direccion",
          },
        ],
      },
      {
        nombre: "Subsecretaria de Proteccion Social",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion de Aseguramiento y Prestacion de Servicios",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Calidad y Redes de Servicios",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Personas con Discapacidad",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Personas Mayores",
            tipo: "Direccion",
          },
        ],
      },
    ],
  },
  {
    nombre: "Secretaria de Seguridad, Justicia y Paz",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Gerencia de Seguridad Vial",
        tipo: "Gerencia",
      },
      {
        nombre: "Subsecretaria de Paz y Derechos Humanos",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion de Derechos Humanos y Paz",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion Operativa de Seguridad",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Acceso a la Justicia",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Planeacion y Administracion de la Seguridad",
            tipo: "Direccion",
          },
        ],
      },
    ],
  },
  {
    nombre: "Secretaria de Talento Humano y Servicios Administrativos",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Direccion de Gestion Documental",
        tipo: "Direccion",
      },
      {
        nombre: "Subsecretaria de Talento Humano",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion de Compensacion y Sistema Pensional",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Desarrollo del Talento Humano",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Desarrollo Organizacional",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Personal",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Relacion Estado Ciudadano",
            tipo: "Direccion",
          },
        ],
      },
      {
        nombre: "Subsecretaria de Servicios Administrativos",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion de Tecnologia e Informacion",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Servicios Generales",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Bienes y Seguros",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Pasaportes",
            tipo: "Direccion",
          },
        ],
      },
    ],
  },
  {
    nombre: "Secretaria General",
    tipo: "Secretaria",
    dependencias: [
      {
        nombre: "Subsecretaria Juridica",
        tipo: "Subsecretaria",
        direcciones: [
          {
            nombre: "Direccion de Defensa Juridica",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Asesoria Legal y de Control",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion Contractual",
            tipo: "Direccion",
          },
          {
            nombre: "Direccion de Instruccion Disciplinaria",
            tipo: "Direccion",
          },
        ],
      },
    ],
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

const creadoresProvisionales = [
  {
    nombre: "Laura Cárdenas Castrillón",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Valentina Uribe Cabas",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Isabela Osorio Ospina",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Mayra Alejandra Solarte Bedoya",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Juan Manuel Torres Alvarez",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Camilo Daza Rave",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Alejandra Restrepo Mejia",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Laura Botero Ceballos",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Sindy Johana Medrano Córdoba",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Camila Ocampo Carvajal",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Juan Pablo Yepes Valencia",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Timothy Huffington Archbold",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
  {
    nombre: "Salome Duque Rojas",
    rol: "Practicante",
    detalle: "SECRETARIA GENERAL - GOBERNACION DE ANTIOQUIA",
  },
];

export function crearDependencia(nodo, padre) {
  return {
    ...baseDependencia,
    nombre: nodo.nombre,
    nivelJerarquico: nodo.tipo,
    competencia: padre ? `Adscripcion: ${padre.nombre}` : "Dependencia principal",
    impacto:
      nodo.tipo === "Secretaria" || nodo.tipo === "Departamento administrativo"
        ? "Alto"
        : "Medio alto",
    descripcion: padre
      ? `${nodo.tipo} adscrita a ${padre.nombre}.`
      : `${nodo.tipo} de la estructura organica departamental.`,
  };
}

export function obtenerHijos(nodo) {
  return nodo.dependencias || nodo.direcciones || [];
}

export function etiquetaHijos(nodo) {
  if (nodo.direcciones) {
    return "Ver direcciones";
  }

  if (nodo.dependencias) {
    return "Ver dependencias";
  }

  return "";
}

export function MarcaGobernacion() {
  return (
    <div className="flex min-w-0 items-center gap-5">
      <Image
        alt="Gobernacion de Antioquia, Republica de Colombia"
        className="h-20 w-auto object-contain"
        height={130}
        src="/logo-gobernacion.png"
        width={400}
      />
      <div className="hidden border-l border-[#d8dfd5] pl-5 sm:block">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#176b36]">
          Estructura Organica Departamental
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-normal text-[#17231c]">
          Directorio institucional
        </h1>
      </div>
    </div>
  );
}

export function MenuSuperior() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [modalActivo, setModalActivo] = useState(null);

  function abrirModal(tipo) {
    setMenuAbierto(false);
    setModalActivo(tipo);
  }

  return (
    <div className="fixed left-4 top-4 z-40">
      <button
        aria-expanded={menuAbierto}
        aria-label="Abrir menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-[#cdd8ca] bg-white shadow-sm transition hover:border-[#2f7d46] hover:bg-[#edf7ef] focus:outline-none focus:ring-2 focus:ring-[#2f7d46] focus:ring-offset-2"
        onClick={() => setMenuAbierto((abierto) => !abierto)}
        type="button"
      >
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span className="block h-0.5 w-5 rounded-full bg-[#17231c]" />
          <span className="block h-0.5 w-5 rounded-full bg-[#17231c]" />
          <span className="block h-0.5 w-5 rounded-full bg-[#17231c]" />
        </span>
      </button>

      {menuAbierto ? (
        <div className="absolute left-0 mt-3 w-56 rounded-lg border border-[#d8dfd5] bg-white p-2 shadow-xl">
          <button
            className="w-full rounded-md px-4 py-3 text-left text-sm font-semibold text-[#17231c] transition hover:bg-[#edf7ef] hover:text-[#246b37]"
            onClick={() => abrirModal("creadores")}
            type="button"
          >
            Creadores
          </button>
          <button
            className="w-full rounded-md px-4 py-3 text-left text-sm font-semibold text-[#17231c] transition hover:bg-[#edf7ef] hover:text-[#246b37]"
            onClick={() => abrirModal("informacion")}
            type="button"
          >
            Informacion
          </button>
        </div>
      ) : null}

      {modalActivo ? (
        <ModalMenu
          tipo={modalActivo}
          onCerrar={() => setModalActivo(null)}
        />
      ) : null}
    </div>
  );
}

function ModalMenu({ tipo, onCerrar }) {
  const esCreadores = tipo === "creadores";

  return (
    <div className="fixed inset-0 z-[100] bg-[#0f1b14]/55 px-4 py-6 backdrop-blur-sm">
      <section className="mx-auto flex h-[calc(100vh-3rem)] w-full max-w-4xl flex-col overflow-hidden rounded-lg border border-white/60 bg-white shadow-2xl">
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[#d8dfd5] bg-[#f8faf6] px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2f7d46]">
              {esCreadores ? "Equipo" : "Acerca de esta pagina"}
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              {esCreadores ? "Creadores" : "Informacion"}
            </h2>
          </div>
          <button
            className="rounded-md border border-[#cdd8ca] bg-white px-3 py-2 text-sm font-semibold text-[#405348] transition hover:border-[#2f7d46] hover:text-[#2f7d46]"
            onClick={onCerrar}
            type="button"
          >
            Cerrar
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6">
          {esCreadores ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {creadoresProvisionales.map((creador) => (
                <article
                  className="rounded-lg border border-[#d8dfd5] bg-[#f8faf6] p-5 shadow-sm"
                  key={creador.nombre}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2f7d46]">
                    {creador.rol}
                  </p>
                  <h3 className="mt-3 text-lg font-bold leading-6">
                    {creador.nombre}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#52645a]">
                    {creador.detalle}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p className="max-w-3xl text-lg leading-8 text-[#405348]">
              Esta pagina es una pagina desarrollada por practicantes de la
              Gobernacion de Antioquia como propuesta de mejora.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export function ModalOpciones({
  listaActiva,
  modalActivo,
  onAbrirOpciones,
  onCerrar,
  onVerHijos,
  onVerInformacion,
}) {
  const { nodo, padre } = modalActivo;
  const hijos = obtenerHijos(nodo);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f1b14]/55 px-4 py-6 backdrop-blur-sm">
      <section className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-white/60 bg-white shadow-2xl">
        <div className="border-b border-[#d8dfd5] bg-[#f8faf6] px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2f7d46]">
                {nodo.tipo}
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-8">
                {nodo.nombre}
              </h2>
              {padre ? (
                <p className="mt-2 text-sm text-[#52645a]">
                  Adscrita a {padre.nombre}
                </p>
              ) : null}
            </div>
            <button
              className="rounded-md border border-[#cdd8ca] bg-white px-3 py-2 text-sm font-semibold text-[#405348] transition hover:border-[#2f7d46] hover:text-[#2f7d46]"
              onClick={onCerrar}
              type="button"
            >
              Cerrar
            </button>
          </div>
        </div>

        <div className="grid gap-3 px-6 py-5 sm:grid-cols-2">
          <button
            className="rounded-md bg-[#246b37] px-5 py-4 text-left text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d572d]"
            onClick={() => onVerInformacion(nodo, padre, modalActivo.ruta)}
            type="button"
          >
            Ver informacion
          </button>
          {hijos.length > 0 ? (
            <button
              className="rounded-md border border-[#246b37] bg-white px-5 py-4 text-left text-sm font-semibold text-[#246b37] transition hover:bg-[#edf7ef]"
              onClick={() => onVerHijos(nodo, padre, modalActivo.ruta)}
              type="button"
            >
              {etiquetaHijos(nodo)}
            </button>
          ) : null}
        </div>

        {listaActiva ? (
          <div className="border-t border-[#d8dfd5] px-6 py-5">
            <p className="text-sm font-bold text-[#607065]">
              {listaActiva.nodo.direcciones
                ? "Direcciones disponibles"
                : "Dependencias disponibles"}
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {listaActiva.hijos.map((hijo) => (
                <button
                  className="rounded-md border border-[#d8dfd5] bg-[#f8faf6] px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-[#2f7d46] hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2f7d46] focus:ring-offset-2"
                  key={hijo.nombre}
                  onClick={() =>
                    onAbrirOpciones(hijo, listaActiva.nodo, listaActiva.ruta, {
                      nodo: listaActiva.nodo,
                      padre: listaActiva.padre,
                      ruta: listaActiva.ruta,
                    })
                  }
                  type="button"
                >
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[#2f7d46]">
                    {hijo.tipo}
                  </span>
                  <span className="mt-1 block text-sm font-bold leading-5">
                    {hijo.nombre}
                  </span>
                  {obtenerHijos(hijo).length > 0 ? (
                    <span className="mt-2 block text-xs text-[#607065]">
                      Tiene {obtenerHijos(hijo).length} direcciones
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export function FichaDependencia({
  dependencia,
  onInicio,
  onVolver,
  puedeVolver,
}) {
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
    <main className="min-h-screen bg-[#f4f6f1] text-[#17231c]">
      <header className="sticky top-0 z-30 border-b border-[#d8dfd5] bg-white/95 shadow-sm backdrop-blur">
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
          <MenuSuperior />
          <MarcaGobernacion />
          <div className="hidden shrink-0 items-center gap-2 rounded-md border border-[#d8dfd5] bg-[#f8faf6] p-1 text-sm font-semibold text-[#405348] md:flex">
            <a className="rounded px-3 py-2 transition hover:bg-white hover:text-[#246b37]" href="#dependencia">
              Dependencia
            </a>
            <a className="rounded px-3 py-2 transition hover:bg-white hover:text-[#246b37]" href="#funciones">
              Funciones
            </a>
            <a className="rounded px-3 py-2 transition hover:bg-white hover:text-[#246b37]" href="#contacto">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <section className="border-b border-[#d8dfd5] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <button
                className="inline-flex items-center gap-2 rounded-md border border-[#b9c6b7] bg-white px-4 py-2 text-sm font-semibold text-[#23402c] shadow-sm transition hover:border-[#2f7d46] hover:bg-[#edf7ef] hover:text-[#2f7d46]"
                onClick={onInicio}
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 10.75 12 3l9 7.75"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M5.5 9.5V21h13V9.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M9.5 21v-6h5v6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                Inicio
              </button>
              {puedeVolver ? (
                <button
                  className="inline-flex items-center gap-2 rounded-md border border-[#b9c6b7] bg-white px-4 py-2 text-sm font-semibold text-[#23402c] shadow-sm transition hover:border-[#2f7d46] hover:bg-[#edf7ef] hover:text-[#2f7d46]"
                  onClick={onVolver}
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Volver
                </button>
              ) : null}
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f7d46]">
              Ficha institucional
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-[#132018] md:text-6xl">
              {dependencia.nombre}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5d52]">
              {dependencia.descripcion}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#dependencia"
                className="rounded-md bg-[#246b37] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d572d]"
              >
                Ver ficha
              </a>
            </div>
          </div>

          <aside className="overflow-hidden rounded-lg border border-[#d8dfd5] bg-[#f8faf6] shadow-sm">
            <div className="h-3 bg-[linear-gradient(90deg,#176b36_0%,#80a93f_50%,#e2b53f_50%,#e2b53f_100%)]" />
            <div className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f7d46]">
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
              <div className="mt-6 grid gap-3 border-t border-[#d8dfd5] pt-5 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-[#607065]">Nivel</span>
                  <span className="font-bold text-[#17231c]">
                    {dependencia.nivelJerarquico}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-[#607065]">Impacto</span>
                  <span className="rounded-full bg-[#e5f3e8] px-3 py-1 font-bold text-[#216537]">
                    {dependencia.impacto}
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {resumen.map((item) => (
            <article
              className="rounded-lg border border-[#d8dfd5] bg-white p-6 shadow-sm"
              key={item.titulo}
            >
              <p className="text-sm font-bold text-[#607065]">
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
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f7d46]">
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

      <section className="bg-[#17231c] px-6 py-14 text-white" id="funciones">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a8d577]">
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
                className="rounded-lg border border-white/15 bg-white/8 p-5 shadow-sm"
                key={funcion}
              >
                <p className="text-sm font-bold text-[#a8d577]">
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
          <article className="rounded-lg border border-[#d8dfd5] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f7d46]">
              Marco normativo
            </p>
            <h2 className="mt-3 text-2xl font-bold">Normativa aplicable</h2>
            <p className="mt-4 leading-7 text-[#52645a]">
              {dependencia.marcoNormativo}
            </p>
          </article>
          <article className="rounded-lg border border-[#d8dfd5] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f7d46]">
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
        className="border-y border-[#d8dfd5] bg-white px-6 py-14"
        id="contacto"
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f7d46]">
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
        <article className="rounded-lg border border-[#d8dfd5] bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f7d46]">
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

        <article className="rounded-lg border border-[#d8dfd5] bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f7d46]">
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
    <article className="rounded-lg border border-[#d8dfd5] bg-white p-6 shadow-sm">
      <p className="text-sm font-bold text-[#607065]">{titulo}</p>
      <p className="mt-3 leading-7 text-[#17231c]">{valor}</p>
    </article>
  );
}
