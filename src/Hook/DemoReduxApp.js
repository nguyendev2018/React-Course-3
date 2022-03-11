import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

export default function DemoReduxApp(props) {
    // useSelector thay thế cho mapStateToProps
    let comments = useSelector(state => state.FaceBookReducer.comments);
    // lấy dispatch từ useDispatch => gửi giá trị lên reducer
    let dispatch = useDispatch()
    // lấy thông tin người dùng nhập vào
    let [userComment, setUserComment] = useState({
        name: "",
        content: ""
    })
    const handleChange = (e) => {
        let { value, name } = e.target;
        setUserComment({
            ...userComment,
            [name]: value
        })
    }
    // submit thông tin người dùng lên reducer
    const handleComment = (e) => {
        console.log('sd');
        e.preventDefault();
        let newUserComment = { ...userComment, avatar: `https://i.pravatar.cc/150?u=` }
        let action = {
            type: "addComment",
            newUserComment
        }
        dispatch(action)
    }
    return (
        <div>
            <h3>Facebook App !</h3>
            <div className="card text-left">
                <div className="card-header">
                    {comments.map((item, index) => {
                        return <div key={index} className="row">
                            <div className="col-2">
                                <img src="https://picsum.photos/id/200/300" style={{ height: 60 }} />
                            </div>
                            <div className="col-10">
                                <h6 className="h6 text-danger">{item.name}</h6>
                                <p>{item.content} </p>
                            </div>
                        </div>
                    })}
                </div>
                <form className="card-body" onSubmit={handleComment}>
                    <div className="form-group">
                        <label className="card-title">Name</label>
                        <input type="text" name='name' className='form-control' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="card-title">Content</label>
                        <input type="text" name='content' className='form-control' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-success'>Send</button>
                    </div>

                </form>
            </div>

        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         listFace: state.FaceBookReducer.comments
//     }
// }
// export default connect(mapStateToProps)(DemoReduxApp)