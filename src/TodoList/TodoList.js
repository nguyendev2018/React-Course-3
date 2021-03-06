import React, { Component } from 'react';
import { Container } from './Component/Container';
import { ThemeProvider } from 'styled-components';
import { TodoListPrimaryTheme } from '../Themes/TodoListPrimaryTheme';
import { Dropdown } from './Component/Dropdown';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from './Component/Heading';
import { TextField, Label, Input } from './Component/TextFiled';
import { Button } from './Component/Button';
import { Table, Tr, Td, Th, Thead, Tbody } from './Component/Table';
// connect with redux
import { connect } from 'react-redux';
import { add_taskAction, remove_taskAction, update_taskAction, change_themeAction, check_themeAction, newUpdate } from '../redux/actions/TodoListAction';
import { arrTheme } from '../Themes/ThemeManager'
import { newUpdate_task, update_task } from '../redux/types/TodoList';
class TodoList extends Component {
    state = {
        name: ""
    }
    renderList() {
        let list = this.props.listTodoList;
        return list.filter(item => item.done === false).map((item, index) => {
            return <Tr key={index}>
                <Th >
                    {item.name}
                </Th>
                <Th className="text-right">
                    <Button onClick={() => { this.props.updateItem(item) }} className="mr-2">Update</Button>
                    <Button onClick={() => { this.props.checkItem(item.id) }} className="mr-2">Check</Button>
                    <Button onClick={() => { this.props.removeItem(item.id) }}>Delete</Button>
                </Th>
            </Tr>
        })
    }
    renderListCompleted = () => {
        let list = this.props.listTodoList;
        return list.filter(item => item.done === true).map((item, index) => {
            return <Tr key={index}>
                <Th >
                    {item.name}
                </Th>
                <Th className="text-right">
                    <Button onClick={() => { this.props.removeItem(item.id) }}>Delete</Button>
                </Th>
            </Tr>
        })
    }
    // write function render theme import themeManager
    renderTheme = () => {
        return arrTheme.map((item, index) => {
            return <option key={index} value={item.id}>{item.name}</option>
        })
    }
    // life cycle b???ng 16 nh???n v??o props m???i ???????c th???c thi tr?????c render 
    // componentWillReceiveProps(newProps) {
    //     this.setState({
    //         name: newProps.taskEdit.name
    //     })
    // }
    // LifeCycle t??nh kh??ng truy xu???t ???????c tr??? this
    // static getDerivedStateFromProps(newProps, currentState) {
    //     //newProps : props m???i, props c?? l?? this.props (kh??ng truy xu???t ???????c )
    //     //currentState : ???ng v???i state hi???n t???i (this.state)
    //     // ho???c tr??? v??? state m???i {this.state}
    //     let newState = { ...currentState, name: newProps.taskEdit.name }
    //     //tr??? v??? null state gi??? nguy??n
    //     return null;
    // }
    // dispatch khi select onChange

    render() {
        return (
            <ThemeProvider theme={this.props.themeTodoList}>
                <Container className='w-50'>
                    <Dropdown onChange={(e) => {
                        let { value } = e.target;
                        // dispatch value l??n reducer
                        this.props.changeTheme(value)
                    }}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3 className='display-4'>Todo List</Heading3>
                    <TextField value={this.state.name} onChange={(e) => {
                        // l???y value ch??nh n??
                        // ch???a gi?? tr??? 
                        // d??? li???u value input taskName ???????c l???y t??? props(state t??? redux)
                        // m???i l???n ng?????i d??ng nh???p li???u c???n binding gi?? tr??? v??o state =>setState => lifecycle
                        //ph????ng th???c render ch???y l???i 
                        // input l???i l???y d??? l???u t??? redux m?? kh??ng ph???i t??? ng?????i d??ng nh???p v??o
                        // =>X??? l?? tr?????c khi h??m render ???????c g???i ta s??? can thi???p b???ng lifecycle ????? l???y props t??? redux => g??n v??o thu???c t??nh this.state c???a component, v?? value c???a input ph???i binding t??? state
                        // v?? m???i l???n nh???p c?? s??? thay ?????i v?? th??? d??ng state 
                        this.setState({
                            name: e.target.value
                        })
                    }} name="name" label="Task Name">
                    </TextField>
                    <Button onClick={() => {
                        // getValue user nh???p v??o
                        let { name } = this.state;
                        //T???o ra 1 task object
                        let task = {
                            id: Date.now(),
                            name: name,
                            done: false
                        }
                        this.props.addItem(task)
                        // ????a task object l??n redux th??ng qua ph????ng th???c dispatch
                    }} classame="ml-2">  Add task</Button>
                    <Button onClick={() => { this.props.newUpdate(this.state.name) }} className="ml-2">  Update task</Button>
                    <Heading3>Task To Do</Heading3>
                    <Table>
                        <Thead>
                            {this.renderList()}
                        </Thead>
                    </Table>
                    <Heading3>Task completed</Heading3>
                    <Table>
                        {this.renderListCompleted()}
                    </Table>
                </Container>

            </ThemeProvider >
        )
    }
    // ????y l?? lifeCycle tr??? v??? prop c?? v?? state c?? c???a component (lifecycle ch???y sau render )

    componentDidUpdate(prevProps) {
        // so s??nh n???u nh?? props tr?????c ???? (taskEdit tr?????c m?? kh??c v???i taskEdit hi???n t???i th?? m??nh m???i setState)
        if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
            this.setState({
                name: this.props.taskEdit.name
            })
        }

    }

}

const mapStateToProps = (state) => {
    return {
        themeTodoList: state.TodoListReducer.themeTodoList,
        listTodoList: state.TodoListReducer.taskList,
        taskEdit: state.TodoListReducer.taskEdit
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (TaskNew) => {
            dispatch(add_taskAction(TaskNew))
        },
        removeItem: (remove_item) => {
            dispatch(remove_taskAction(remove_item))
        },
        updateItem: (updateItem) => {
            dispatch(update_taskAction(updateItem))
        },
        changeTheme: (valueItem) => {
            dispatch(change_themeAction(valueItem))
        },
        checkItem: (check_item) => {
            dispatch(check_themeAction(check_item))
        },
        newUpdate: (name) => {
            dispatch(newUpdate(name))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)