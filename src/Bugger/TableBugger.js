import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableBugger extends Component {
    renderItem = () => {
        const listTable = this.props.listTable;
        return listTable.map((item, index) => {
            return <tr>
                <td scope="row">{item.id}</td>
                <td>{item.name}</td>
                <td>
                    <button className='btn btn-success btn-sm mr-2' type="">-</button>
                    {item.amount}
                    <button className='btn btn-success btn-sm ml-2' type="">+</button>
                </td>
                <td>{item.price}</td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <table class="table text-center text-secondary table-success table-bordered table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItem()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listTable: state.BuggerReducer.TableBugger
    }
}
export default connect(mapStateToProps)(TableBugger)
