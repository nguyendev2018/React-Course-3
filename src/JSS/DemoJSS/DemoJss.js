import React, { Component } from 'react'
import { Button, SmallButton } from '../Components/Button'
import { StyleLink } from '../Components/Link'

export default class DemoJss extends Component {
    render() {
        return (
            <div>
                <Button className='button_style' primary>Hello</Button>
                <SmallButton>Hello this is extends</SmallButton>
                <StyleLink id="ac">Nguyên nè </StyleLink>
            </div>
        )
    }
}
