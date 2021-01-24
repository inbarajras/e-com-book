import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { LoginComponent } from '../Login/LoginComponent';
import { Dashboard } from '../Dashboard/Dashboard';
import MainLayout from '../MainLayout/MainLayout';
import { Cart } from '../Layouts/Cart';


export default class PageRouter extends Component {
    render(){
        return(
            <div>
                <Router>
                    <>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/dashboard" exact component={MainLayout}></Route>
                        <Route path="/dashboard/cart" exact component={Cart}></Route>
                    </Switch>
                    </>
                </Router>
            </div>
        )
    }
}

export class SpeedDialActionOne extends Component{    
    constructor(props){
        super(props);
        this.state={
            username:'Inbaraj',
            password:'rasras',
            hasLoginFailed:false,
            loginSuccess:false
        }
        
        this.handleOnChange=this.handleOnChange.bind(this);
        this.loginClick=this.loginClick.bind(this);
    }

    render(){
        return(
            <div>
            <SpeedDialActionOne
                    key={this.props.key}
                    icon={this.props.icon}
                    tooltipTitle={this.props.tooltipTitle} 
                    onClick={this.loginClick}
                />
            </div>
        )
    }

    handleOnChange(event){
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    loginClick(event){
        if((this.state.username==='Inbaraj')&&(this.state.password==='rasras')){
            this.props.history.push(`/welcome/${this.state.username}`)
        }else{
        this.setState({loginSuccess:false,hasLoginFailed:true})
        }
    }     
}
