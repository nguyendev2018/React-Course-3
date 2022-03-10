import React, { Component } from 'react';
import style, { ThemeProvider } from "styled-components";

const configDarkTheme = {
    darkColor: "red",
    fontSize: "40px"
}
const configTheme = {
    darkColor: "orange",
    fontSize: "40px"
}
const configLightTheme = {
    darkColor: "blue",
    fontSize: "40px"
}
export default class Theme extends Component {
    state = {
        currentTheme: configTheme
    }
    handleChangeThem = (event) => {
        this.setState({
            currentTheme: event.target.value == "1" ? configDarkTheme : configLightTheme
        })
    }
    render() {

        const DivStyle = style.div`
        font-size:${props => props.theme.fontSize};
        background-color:${props => props.theme.darkColor}
    `
        return (
            <ThemeProvider theme={this.state.currentTheme}>
                <DivStyle>
                    Hello là nguyên đây
                </DivStyle>
                <select onChange={this.handleChangeThem}>
                    <option selected>Open this select menu</option>
                    <option value="1">Dark Theme</option>
                    <option value="2">Light Theme</option>

                </select>
            </ThemeProvider>
        )
    }
}
