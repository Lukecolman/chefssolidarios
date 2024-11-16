import React from "react";

export default function Page() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32 lg:pb-44">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className=" mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Cocinando para ti con mucho cariño.
        </h2>
        <p className="text-base text-gray-500 md:text-xl">
          Hay muchos chefs y voluntarios dispuestos a ayudarte
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded-2xl shadow-sm border-chefs-100 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-chefs-400">
              1
            </p>
            <p className="text-lg font-bold leading-5">
              Envíanos un mensaje por Instagram
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Contáctanos por Instagram y envíanos tu solicitud de ayuda.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded-2xl shadow-sm border-chefs-200 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-chefs-400">
              2
            </p>
            <p className="text-lg font-bold leading-5">
              Rellena la información
            </p>
          </div>
          <p className="text-sm text-gray-900">
            No olvides dejarnos tu teléfono y contarnos qué necesitas para
            ayudarte mejor.
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded-2xl shadow-sm border-chefs-700 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-chefs-400">
              3
            </p>
            <p className="text-lg font-bold leading-5">
              Espera nuestra respuesta
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Nos pondremos en contacto contigo para coordinar la ayuda.
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-chefs-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-20 ">
        <a
          href="https://www.instagram.com/solidarios.chefs/"
          className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded-2xl shadow-md bg-chefs-400 hover:bg-chefs-700 focus:shadow-outline focus:outline-none gap-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          IR A INSTAGRAM
        </a>
      </div>
    </div>
  );
}
