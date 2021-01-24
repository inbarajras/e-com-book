import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Grid,Card,CardActionArea,CardMedia,CardContent, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FetchData from '../Api/FetchData';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 400,
    right: 0,
    margin: '0 auto',
  },
  loadButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 40,
    right: 0,
    margin: '0 auto',
  },
}));

export default function MainLayout(props) {
  const classes = useStyles();
  
  const [books, setBooks] = React.useState([]);
  const [cartItems, setCartItems] = React.useState(props.location.state.cartList);
  const [amount, setAmount] = React.useState(props.location.state.amount);
  


const images =[
    {
        "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/red-book-hi8d6431a.png"
      },
      {
        "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/indexa51d5d7.jpeg"
      },
       {
        "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/blue-book-hic09def7.png"
      },
      {
        "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/blue-book-reading-hid3b6f09.png"
      },
        {
        "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/green-book-reading-hiec1b149.png"
      },
       {
        "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/closed-book-cartoon-vector-symbol-icon-design-beautiful-illustr-illustration-isolated-white-background-975033320bc2a72.jpeg"
      },
      {
        "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/inex290acda.jpeg"
      },
       {
        "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/f958c0ca1c1701d236796ed90542a21940742f7.jpeg"
      },
      {
        "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/index5848f8e.png"
      },
      {
        "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/2511916-orange-book-cartoon6cc76e1.jpeg"
      }
]
  
  FetchData.getBooks().then(response=>{
    setBooks(response.data);
  });
  

  const navigateCart = () => {
    props.history.push('/dashboard/cart',{cartItems,amount})
}
    const logout = (response) => {
        props.history.push('/',{response:response.data})
}
    const addToCart = (value) => {
        setCartItems([...cartItems,value])
        setAmount(value.price+amount)
}
const removeFromCart = (value) => {
  if(cartItems.size>0){
    setAmount(amount-value.price);
  }
  cartItems.splice(cartItems.indexOf(value),1)
  setCartItems(cartItems)
}
const [limit,setLimit] = React.useState(10);

const loadMore = () => {
  setLimit(limit+13);
}

     

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h4" gutterBottom>
          Books Inventory
        </Typography>
        <div>
            <Grid container spacing={2}>
                {
                books.slice(0,limit).map(
                        value=>
                <React.Fragment key={value.bookId}>
                    <Grid item xs='3'>   
                        <Card className="gradeCard">
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="img"
                                height="250"
                                width="500"
                                src={images[books.indexOf(value)%5].Image}
                                title="Grade"
                                />
                                <CardContent>
                                    <Typography variant="body1" component="h2">
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body2" color="primary" component="h3">
                                       " Rs.{value.price} "
                                    </Typography>
                                    <Typography variant="body2" color="secondary" component="h3">
                                        {value.authors}
                                    </Typography>
                                    <IconButton edge="end" color="inherit" onClick={()=>addToCart(value)}>
                                        <AddShoppingCartIcon color="primary"></AddShoppingCartIcon>
                                    </IconButton>
                                    <IconButton edge="end" color="inherit" onClick={()=>removeFromCart(value)}>
                                      <RemoveShoppingCartIcon color="secondary"></RemoveShoppingCartIcon>
                                    </IconButton>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </React.Fragment>
                )}
            </Grid>
        </div>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Fab color="primary" aria-label="add" className={classes.fabButton} onClick={navigateCart}>
          <ShoppingCartIcon></ShoppingCartIcon>
          </Fab>
          <Fab color="secondary" aria-label="load" className={classes.loadButton} onClick={loadMore}>
            <HourglassEmptyIcon></HourglassEmptyIcon>
          </Fab>
          <Typography className={classes.text} variant="h5" gutterBottom>
          Online Book Store
        </Typography>
          <div className={classes.grow} />
          <IconButton edge="end" color="inherit" onClick={logout}>
              Logout 
            <ExitToAppIcon></ExitToAppIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}