import React from 'react';
import {Typography, Grid , Button , Container } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons';

const Cart = () => {
    return (
       <Container>
           <div className={CallMissedSharp.ToolBar} />
           <Typography className={classes.title} variant="h3">
                Your Shopping Cart
           </Typography>

       </Container>
    )
}

export default Cart
