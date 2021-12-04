import React, { useState, useEffect } from "react";
import { supabaseOne } from "./supabaseClient";
import { supabaseTwo } from "./supabaseClient";
import MUIDataTable from "mui-datatables";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const columns = [
  {
    name: "id",
    label: "ID",
  },
  {
    label: "Tipo Documento",
    name: "tipo_documento",
  },
  {
    label: "Numero del documento",
    name: "numero_documento",
  },
  {
    label: "Nombres",
    name: "nombres",
  },
  {
    label: "Apellidos",
    name: "apellidos",
  },
  {
    label: "Fecha de nacimiento",
    name: "fecha_nacimiento",
  },
  {
    label: "Telefono",
    name: "telefono",
  },
  {
    label: "Sexo",
    name: "sexo",
  },
  {
    label: "Salario",
    name: "salario",
  },
  {
    label: "Fecha de ingreso",
    name: "fecha_ingreso",
  },
  {
    label: "Cargo",
    name: "cargo",
  },
  {
    label: "Departamento",
    name: "departamento",
  },
  {
    label: "Duracion del contrato",
    name: "duracion_contrato",
  },
];

const options = {
  filterType: "checkbox",
};

export function DataTableOne() {
  const [empleadosData, setData] = useState([]);

  const handleInsert = async () => {
    const newData = empleadosData.map(({ id, ...rest }) => rest);
    console.log("newData: ", newData);
    const { data, error } = await supabaseTwo
      .from("empleados_dos")
      .insert(newData);
  };

  useEffect(() => {
    async function fetchData() {
      let { data: Empleados, error } = await supabaseOne
        .from("Empleados")
        .select("*");

      setData(Empleados);
      console.log("Empleados: ", Empleados);
    }

    fetchData();
  }, []);

  return (
    <>
      <Grid container style={{ paddingBottom: 15 }}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleInsert}>
            Insertar Datos
          </Button>
        </Grid>
      </Grid>
      <div style={{ height: 400, width: "100%" }}>
        <MUIDataTable
          data={empleadosData}
          columns={columns}
          options={options}
          title={"Base de dato uno"}
        />
      </div>
    </>
  );
}
