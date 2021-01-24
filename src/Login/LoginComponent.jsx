import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BG from '../Images/14-b.jpg';
import { Fab, TextField, Button } from '@material-ui/core';

import {withRouter,Redirect} from 'react-router-dom';


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
        },
      },
  }));

export function LoginComponent(props){
    const classes = useStyles();
    const [mode,setMode] = React.useState('login');
    const [userName,setUserName] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [values, setValues] = React.useState([]);
    const [eventsList, setEventsList] = React.useState([]);
    const [complaintsList, setComplaintsList] = React.useState([]);
    const [worksheetsList, setWorksheetsList] = React.useState([]);
    const [langValue, setLangValue] = React.useState({});
    const [langMap, setLangMap] = React.useState({});
    const [langMapEn, setLangMapEn] = React.useState({});
    const [id, setId] = React.useState();
    const cartList = [];
    const amount = 0;
    

    const loginHandler = () => {
        let loginDetails ={
            userId:userName,
            password:password
        }
        // StaffServiceApi.executeLogin(loginDetails).then(response=>navigateDashboard(response));
    }
    
    const userChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const navigateDashboard = (response) => {
        props.history.push('/dashboard',{cartList,amount})
    }
        return(
            <div className={classes.loginoutroot}>
                <div className={classes.loginRoot}>
                    <Paper elevation={3}>
                        <div>
                            <TextField label="User Name" variant="outlined" type="text" value={userName} onChange={userChangeHandler}></TextField>
                            <TextField label="Password" type="password" variant="outlined" value={password} onChange={passwordChangeHandler}></TextField>
                        </div>
                        <div>
                            <Button variant="contained" color="primary" onClick={navigateDashboard}>Log-In</Button>
                        </div>
                        <div>
                            <Button variant="outlined" color="secondary" onClick={navigateDashboard}>Register</Button>
                        </div>
                    </Paper>
                </div>
            </div>
        )

}

export default withRouter(LoginComponent);