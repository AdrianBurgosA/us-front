import React, { useState, useEffect, useContext } from "react";
import Template from "./Template";
import api from "../api/Axios";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Card, CardActions, CardContent, Chip, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import {ShopContext} from '../public/Context'

const SoftwarePage = () => {
  const title = "Software";
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState({})
  const {productsToShop, setToShop} = useContext(ShopContext)
  const categ = 4

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data)
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };
    fetchData()
  }, []);

  const handleClickAdd = () => {
    productsToShop.push(selected)
    console.log(productsToShop)
  }

  return (
    <Template title={title}>
      <br />
      <center>
        <h1>{title}</h1>
      </center>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {products.map((p) => (
            <Grid item xs>
              <Card sx={{backgroundColor: "#EEEEEE", width: "max-content", padding: "20px", borderRadius: "5%"}}>
                <CardContent>
                  <Stack spacing={2} direction="row">
                    <Typography>{p.name}</Typography>
                    <Box sx={{ color: "orange", fontWeight: 'bold'}}>{p.price}</Box>
                  </Stack>
                  <Divider />
                  <Typography>{p.description}</Typography>
                </CardContent>
                <CardActions>
                  <Stack spacing={2} direction="row">
                    <Button variant="contained" sx={{backgroundColor: "#47555E", color: "#EEEEEE"}}
                      onClick={() => {
                        setSelected(p)
                        handleClickAdd()
                      }}
                    >Agregar</Button>
                  </Stack>
                </CardActions><br/>
                <center>
                  <Chip label={`Disponibles: (${p.quantity})`}/>
                </center>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Template>
  );
};

export default SoftwarePage;
