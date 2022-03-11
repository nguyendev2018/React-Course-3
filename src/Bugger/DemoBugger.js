import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Bugger.css'
import TableBugger from './TableBugger';
class DemoBugger extends Component {
    renderItem = () => {
        let listBugger = this.props.listBugger;
        return listBugger.map((item, index) => {
            return <div className='content' key={index}>
                <div className={item.name}></div>
            </div>
        })

    }
    render() {
        return (
            <div>
                <div className='box' style={{ width: "500px", margin: "0 auto" }}>

                    <div className='breadTop'></div>
                    {this.renderItem()}
                    <div className='breadBottom'></div>
                </div>
                <div className='box-table' style={{ width: "500px", margin: "0 auto", marginTop: "50px" }}>
                    <TableBugger />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listBugger: state.BuggerReducer.listBugger
    }
}
export default connect(mapStateToProps)(DemoBugger)