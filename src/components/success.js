import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment >
                    <AppBar title="Success" />
                    <h1>Fuck Your submission and email notifications! Bruh</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
