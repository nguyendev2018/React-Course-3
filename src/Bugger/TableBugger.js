import React, { Component } from 'react'
import { connect } from 'react-redux'
import { inDecreaseAmount } from '../redux/actions/BugggerAction';
class TableBugger extends Component {
    renderItem = () => {
        const listTable = this.props.listTable;
        return listTable.map((item, index) => {
            return <tr key={index}>
                <td >{item.id}</td>
                <td>{item.name}</td>
                <td>
                    <button onClick={() => {
                        this.props.inDecreaseAmount(item.id, true)
                    }} className='btn btn-success btn-sm mr-2' type="">-</button>
                    {item.amount}
                    <button onClick={() => {
                        this.props.inDecreaseAmount(item.id, false)
                    }} className='btn btn-success btn-sm ml-2' type="">+</button>
                </td>
                <td>{item.price.toLocaleString()}</td>
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
const mapDispatchToProps = (dispatch) => {
    return {
        inDecreaseAmount: (ItemId) => {
            dispatch(inDecreaseAmount(ItemId))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableBugger)
