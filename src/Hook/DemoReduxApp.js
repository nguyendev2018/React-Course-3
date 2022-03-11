import React from 'react'

export default function DemoReduxApp() {
    return (
        <div>
            <h3>Facebook App !</h3>
            <div className="card text-left">
                <div className="card-header">
                    <div className="row">
                        <div className="col-2">
                            <img src="https://picsum.photos/id/200/300" alt="" style={{ height: 60 }} />
                        </div>
                        <div className="col-10">
                            <h6 className="h6 text-danger">Yone</h6>
                            <p>Hi </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <img src="https://picsum.photos/id/200/300" alt="" style={{ height: 60 }} />
                        </div>
                        <div className="col-10">
                            <h6 className="h6 text-danger">Yone</h6>
                            <p>Hi </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <img src="https://picsum.photos/id/200/300" alt="" style={{ height: 60 }} />
                        </div>
                        <div className="col-10">
                            <h6 className="h6 text-danger">Yone</h6>
                            <p>Hi </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <img src="https://picsum.photos/id/200/300" alt="" style={{ height: 60 }} />
                        </div>
                        <div className="col-10">
                            <h6 className="h6 text-danger">Yone</h6>
                            <p>Hi </p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label className="card-title">Name</label>
                        <input type="text" name='name' className='form-control' />
                    </div>
                    <div className="form-group">
                        <label className="card-title">Content</label>
                        <input type="text" name='name' className='form-control' />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-success'>Send</button>
                    </div>

                </div>
            </div>

        </div>
    )
}
