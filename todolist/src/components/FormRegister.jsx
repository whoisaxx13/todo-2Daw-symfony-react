import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormRegister = () => {
  // ust --> useStateSnip...
  const [entradas, setEntradas] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // register pasa todos los nombres del formulario y las restricciones.

  const onSubmit = (data, e) => {
    console.log(data);
    // Limpiamos los componentes
    e.target.reset();
    // Guardamos en entradas lo de entradas + data
    setEntradas([...entradas, data]);
    console.log(entradas);
    // muestra el anterior ya que pinta el componente despues de esto ; es diferido
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
            <h2 className="text-center">Registrar usuario</h2>
            <div className="form-group">
            <label for="username">Usuario</label>
            <input
              placeholder="Ingrese nombre de usuario..."
              className="form-control"
              name="username"
              {
                // Los pone los valores del array alineados. Los pondrá como propiedades
                ...register("username", {
                  required: {
                    value: "true",
                    message: "Campo username requerido",
                  },
                })
              }
            />
            <span className="text-danger text-small text-center">
              {errors?.username?.message}
              {/* Hay errores? es del campo username? muestralo */}
            </span>
            </div>
            <div className="form-group">
            <label for="password">Contraseña</label>
            <input
              placeholder="Ingrese correo..."
              className="form-control mb-2"
              name="email"
              {
                // Los pone los valores del array alineados. Los pondrá como propiedades
                ...register("email", {
                  required: {
                    value: "true",
                    message: "Campo username requerido",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{2,4}$/i,
                    message: "Campo email no valido",
                  },
                })
              }
            />
            <span className="text-danger text-small text-center">
              {errors?.email?.message}
              {/* Hay errores? es del campo email? muestralo */}
            </span>
            </div>
            <input
              type="password"
              placeholder="Ingrese contraseña..."
              className="form-control mb-2"
              name="password"
              {
                // Los pone los valores del array alineados. Los pondrá como propiedades
                ...register("password", {
                  required: {
                    value: "true",
                    message: "Campo password requerido",
                  },
                  minLength: 4,
                })
              }
            />
            <button type="submit" className="form-group text-center">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
