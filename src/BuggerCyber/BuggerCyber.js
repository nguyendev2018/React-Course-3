import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Bugger/Bugger.css'
class DemoBugger extends Component {
    renderItem = () => {
        let listBugger = this.props.listBugger;
        for (const key in listBugger) {
            console.log(key, listBugger[key])
        }

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