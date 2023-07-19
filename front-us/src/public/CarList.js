import React, {useState, useEffect, useContext} from 'react'
import {ShopContext} from './Context'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import Template from '../user/Template'

const CarList = (props) => {
    const {productsToShop, setToShop} = useContext(ShopContext)
    const [subtotal, setSubtotal] = useState(0)
    const [iva, setIva] = useState(0)
    const [total, setTotal] = useState(0)
    const title = "Orden de compra"

    useEffect(() => {
        const calculateSubTotal = (prods) => {
            let subtotal = 0
            prods.map(p => {
                subtotal = subtotal + p.price
            })
            setSubtotal(subtotal)
            return subtotal
        }

        const calculateIva = (prods) => {
            const subtotal = calculateSubTotal(prods)
            setIva(subtotal * 0.12)
            return (subtotal * 0.12)
        }

        const calculateTotal = (prods) => {
            const subtotal = calculateSubTotal(prods)
            const iva = calculateIva(prods)
            setTotal(subtotal + iva)
            return subtotal + iva
        }

        calculateSubTotal(productsToShop)
        calculateIva(productsToShop)
        calculateTotal(productsToShop)

    })

    return(
        <Template title={title}>
            <br/><br/>
            <center>
                Orden de compra
            </center>
            <List>
                {productsToShop.map((p) => (
                    <ListItem key={p.name} sx={{py: 1, px: 0}}>
                        <ListItemText primary={p.name} secondary={p.description}/>
                        <Typography variant="body2">{p.price}</Typography>
                    </ListItem>
                ))}
                <ListItem key="1" sx={{py: 1, px: 0}}>
                    <ListItemText primary="Iva(12%)"/>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{iva}</Typography>
                </ListItem>
                <ListItem key="2" sx={{py: 1, px: 0}}>
                    <ListItemText primary="Subtotal"/>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{subtotal}</Typography>
                </ListItem>
                <ListItem key="3" sx={{py: 1, px: 0}}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{total}</Typography>
                </ListItem>
            </List>
        </Template>
    )
}

export default CarList