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
    // life cycle bảng 16 nhận vào props mới được thực thi trước render 
    // componentWillReceiveProps(newProps) {
    //     this.setState({
    //         name: newProps.taskEdit.name
    //     })
    // }
    // LifeCycle tĩnh không truy xuất được trỏ this
    // static getDerivedStateFromProps(newProps, currentState) {
    //     //newProps : props mới, props cũ là this.props (không truy xuất được )
    //     //currentState : ứng với state hiện tại (this.state)
    //     // hoặc trả về state mới {this.state}
    //     let newState = { ...currentState, name: newProps.taskEdit.name }
    //     //trả về null state giữ nguyên
    //     return null;
    // }
    // dispatch khi select onChange

    render() {
        return (
            <ThemeProvider theme={this.props.themeTodoList}>
                <Container className='w-50'>
                    <Dropdown onChange={(e) => {
                        let { value } = e.target;
                        // dispatch value lên reducer
                        this.props.changeTheme(value)
                    }}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3 className='display-4'>Todo List</Heading3>
                    <TextField value={this.state.name} onChange={(e) => {
                        // lấy value chính nó
                        // chứa giá trị 
                        // dữ liệu value input taskName được lấy từ props(state từ redux)
                        // mỗi lần người dùng nhập liệu cần binding giá trị vào state =>setState => lifecycle
                        //phương thức render chạy lại 
                        // input lại lấy dữ lệu từ redux mà không phải từ người dùng nhập vào
                        // =>Xử lý trước khi hàm render được gọi ta sẽ can thiệp bằng lifecycle để lấy props từ redux => gán vào thuộc tính this.state của component, và value của input phải binding từ state
                        // vì mỗi lần nhập có sự thay đổi vì thế dùng state 
                        this.setState({
                            name: e.target.value
                        })
                    }} name="name" label="Task Name">
                    </TextField>
                    <Button onClick={() => {
                        // getValue user nhập vào
                        let { name } = this.state;
                        //Tạo ra 1 task object
                        let task = {
                            id: Date.now(),
                            name: name,
                            done: false
                        }
                        this.props.addItem(task)
                        // Đưa task object lên redux thông qua phương thức dispatch
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
    // Đây là lifeCycle trả về prop cũ và state cũ của component (lifecycle chạy sau render )

    componentDidUpdate(prevProps) {
        // so sánh nếu như props trước đó (taskEdit trước mà khác với taskEdit hiện tại thì mình mới setState)
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