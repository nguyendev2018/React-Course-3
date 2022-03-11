import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

export default function DemoReduxApp(props) {
    let comments = useSelector(state => state.FaceBookReducer.comments);
    console.log(comments);

    return (
        <div>
            <h3>Facebook App !</h3>
            <div className="card text-left">
                <div className="card-header">

                    {comments.map((item, index) => {
                        return <div className="row">
                            <div className="col-2">
                                <img src="https://picsum.photos/id/200/300" alt="" style={{ height: 60 }} />
                            </div>
                            <div className="col-10">
                                <h6 className="h6 text-danger">{item.name}</h6>
                                <p>Hi </p>
                            </div>
                        </div>
                    })}
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label className="card-title">Name</label>
                        <input type="text" name='name' className='form-control' />
                    </div>
                    <div className="form-group">
                        <label className="card-title">Content</label>
                        <input type="text" name='content' className='form-control' />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-success'>Send</button>
                    </div>

                </div>
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