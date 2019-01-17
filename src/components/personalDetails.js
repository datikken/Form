import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class PersonalDetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {

        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment >
                    <AppBar title="Enter Your Personal Details" />
                    <TextField
                        hintText="Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br></br>
                    <TextField
                        hintText="City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br></br>
                    <TextField
                        hintText="Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br></br>

                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}

                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}

                    />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default PersonalDetail
