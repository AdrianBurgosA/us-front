import {
  Box,
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import api from '../../api/Axios'

const AddModal = (props) => {
  const [prod, setProd] = useState({
    name: "",
    description: "",
    category: 0,
    price: "",
    quantity: "",
  });

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleClick = () => {
    api.post('/products',prod)
    .then(response => {
      alert("Se agregó con éxito")
    })
    .catch(error => {
      alert("Hubo un error")
    })
  };

  const categorias = [
    "Portátiles",
    "Escritorio",
    "Hardware",
    "Periféricos",
    "Software",
    "Accesorios",
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    borderRadius: 5,
    p: 4,
  };

  return (
    <Modal open={props.open}>
      <Box sx={{ ...style, width: "40%" }}>
        <center>
          <div sx={{ width: "20%" }}>
            <Typography variant="h5" component="div">
              Agregar nuevo producto
            </Typography>
            <br />
            <br />
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth="true"
              required
              onChange={(event) =>
                setProd({ ...prod, name: event.target.value })
              }
            />
            <br />
            <br />
            <TextField
              label="Descripción"
              variant="outlined"
              fullWidth="true"
              required
              onChange={(event) =>
                setProd({ ...prod, description: event.target.value })
              }
            />
            <br />
            <br />
            <TextField
              label="Precio"
              variant="outlined"
              fullWidth="true"
              required
              onChange={(event) =>
                setProd({ ...prod, price: event.target.value })
              }
            />
            <br />
            <br />
            <TextField
              label="Cantidad"
              variant="outlined"
              fullWidth="true"
              required
              onChange={(event) =>
                setProd({ ...prod, quantity: event.target.value })
              }
            />
            <br />
            <br />
            <TextField
              select
              label="Categoría"
              defaultValue={categorias[0]}
              fullWidth="true"
              onChange={(event) =>
                setProd({ ...prod, category: event.target.value })
              }
            >
              {categorias.map((c) => (
                <MenuItem
                  key={categorias.indexOf(c)}
                  value={categorias.indexOf(c)}
                >
                  {c}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <br />
            <Button variant="contained" component="label">
              Subir imagen
              <input type="file" hidden />
            </Button>
            <center>
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#EEEEEE", color: "#47555E" }}
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#47555E", color: "#EEEEEE" }}
                  onClick={handleClick}
                >
                  Agregar
                </Button>
              </Stack>
            </center>
          </div>
        </center>
      </Box>
    </Modal>
  );
};

export default AddModal;
