import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
    }
    //được gọi khi component này được sử dụng trên DOM (root) (giao diện của app)
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }
    //Được gọi khi setState hoặc props
    shouldComponentUpdate(newProps, newState) {
        // return true thì chạy tiếp hoặc lifecycle còn lại, ngược lại thì return false 
        // thì sẽ dừng lại không chạy tiếp các lifecycle khác 
        return true;
    }
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <span>Number : {this.state.number}</span>
                <button className='btn btn-success'
                    onClick={() => {
                        this.setState(
                            { number: this.state.number + 1 }
                        )
                    }}
                >+</button>
                {this.state.number === 1 ? <ChildComponent /> : ''}
            </div>
        )
    }
    componentDidMount() {
        console.log('ComponentDidUpdate');
    }
    // Lần đầu sẽ không gọi,chỉ gọi khi setState hoặc thay đổi props
    componentDidUpdate() {

    }
}

