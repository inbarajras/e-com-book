import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BG from '../Images/cart.jpg';
import { Fab, TextField, Button, ListItemIcon, List, ListItem, ListItemText, Divider, ListItemAvatar, ListItemSecondaryAction, Avatar, Checkbox, Typography, IconButton } from '@material-ui/core';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {withRouter,Redirect} from 'react-router-dom';
import FetchData from '../Api/FetchData';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width:'100%',
        height:'100%',
        backgroundImage: `url(${BG})`,
    },
    loginoutroot: {
        display: 'flex',
        width:'100%',
        height:'100%',
        backgroundImage: `url(${BG})`,
    },
    
    loginRoot: {
        display: 'flex',
        margin: theme.spacing(14),
        height:'100%',
        '& > *': {
          marginLeft:120,
          width: theme.spacing(100),
          padding: theme.spacing(2),
          height: 500,
          overflow: 'auto'
        },
    overflow: 'auto'
      },
    makepayment:{
        marginTop:16
    }
  }));

export function Cart(props){
    const classes = useStyles();
    const [cartList,setCartList] = React.useState(props.location.state.cartItems);
    const [amount,setAmount] = React.useState(props.location.state.amount);
    
    
    const backTo = () => {
        props.history.push('/dashboard',{cartList,amount})
    }

    const removeFromCart = (value) => {
        setAmount(amount-value.price);
        cartList.splice(cartList.indexOf(value),1)
        setCartList(cartList)
}
const makePayment = () => {
    // FetchData.makePayment().then(response=>{
    //     console.log(response)
    // })
    window.location.href='https://test.instamojo.com/@inbarajras/47f78510778a442a86b3a3f7dc492cd7';
}
    
        return(
            <div className={classes.loginoutroot}>
                <div className={classes.loginRoot}>
                    <Paper elevation={1}>
                        <Button variant="contained" color="primary" onClick={backTo}>Back To Shopping</Button>
                        <div>
                            <List component="nav" aria-label="main mailbox folders">
                                {
                                cartList.map(value=>
                                    <ListItem key={value.title} button>
                                    <ListItemAvatar>
                                        <LocalMallIcon color="primary"></LocalMallIcon>
                                    </ListItemAvatar>
                                    <ListItemText id={value.title} primary={value.title} />
                                    <ListItemSecondaryAction>
                                    Rs.{value.price}
                                    <IconButton edge="end" color="inherit" onClick={()=>removeFromCart(value)}>
                                        <RemoveShoppingCartIcon color="secondary"></RemoveShoppingCartIcon>
                                    </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                )}
                            </List>
                        </div>
                        <div>
                            <Button variant="outlined" color="secondary">
                            Total Order Amount = Rs.{amount}
                            </Button>
                        </div>
                        <div className={classes.makepayment}>
                        <Button variant="contained" color="secondary" onClick={makePayment}>
                            Make Payment - InstaMojo
                            </Button>
                        </div>
                    
                    </Paper>
                </div>
            </div>
        )

}

export default withRouter(Cart);