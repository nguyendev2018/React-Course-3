import React, { useState } from 'react'

export default function DemoHookUseState(props) {
    {/* //tuple */ }
    const [state, setState] = useState({ like: 0 });
    //ANCHOR khi gán giá trị cho state thì nó là hàm bất đồng bộ nên sẽ gán lại state
    //Nên khi log giá trị thì đặt ở đây
    console.log(state);
    const handleLike = () => {
        // lấy like tăng lên 1 và setState
        setState({
            like: state.like + 1
        })
    }
    return (
        <div>
            <div className="card text-left" style={{ width: "200px" }}>
                <img className="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">{state.like}</p>
                </div>
                <button type="" className='btn  btn-danger' onClick={handleLike}>Like</button>
            </div>

        </div>
    )
}
