import React from "react";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";
import { useForm } from "../hooks/useForm";

const NewStudent = () => {
  const [formValues, handleInputChange] = useForm({
    boleta: "2019602194",
    nombre: "Felix Enrique",
    apellido: "Vega Nolasco",
    correo: "felixvnolasco@gmail.com",
    carrera: "Ingeniería en Informática",
    plantel: "",
    inscrito: "",
  });

  console.log(formValues);
  const { boleta, nombre, apellido, correo, carrera, plantel, inscrito } =
    formValues;

  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="mt-2 mr-6 w-5/6 h-6/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10  animate__animated animate__fadeIn animate__faster">
          <div className="flex flex-col p-2 border-2 border-slate-400 shadow-slate-500 rounded-md">
            <h5 className="font-semibold text-2xl ml-6 mt-2">
              Agregar un nuevo estudiante
            </h5>

            <div className="flex flex-col">
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Boleta</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="boleta"
                  type="text"
                  onChange={handleInputChange}
                  value={boleta}
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Nombre(s)</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="nombre"
                  type="text"
                  onChange={handleInputChange}
                  value={nombre}
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Apellidos</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="apellido"
                  type="text"
                  onChange={handleInputChange}
                  value={apellido}
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Correo</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="correo"
                  type="text"
                  onChange={handleInputChange}
                  value={correo}
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Carrera</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="carrera"
                  type="text"
                  onChange={handleInputChange}
                  value={carrera}
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Plantel</span>
                <select
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="plantel"
                  id=""
                  onChange={handleInputChange}
                  value={plantel}
                >
                  <option disabled>Seleccione una opción</option>
                  <option value="UPIICSA" defaultChecked>
                    UPIICSA
                  </option>
                  <option value="ESIME">ESIME</option>
                  <option value="UPIITA">UPIITA</option>
                  <option value="ESCOM">ESCOM</option>
                </select>
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">
                  Actualmente esta inscrito?
                </span>
                <select
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="inscrito"
                  id=""
                  onChange={handleInputChange}
                  value={inscrito}
                >
                  <option disabled>Seleccione una opción</option>
                  <option value="true">Si</option>
                  <option value="false">No</option>
                </select>
              </div>

              <div className="flex justify-end">
                <div className="p-4 w-24 text-center font-semibold items-center bg-green-400 hover:bg-green-500 hover:bg-green rounded-md cursor-pointer">
                  Agregar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewStudent;
