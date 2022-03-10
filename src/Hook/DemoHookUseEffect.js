import React, { useEffect, useState } from 'react'
import ChildHookEffect from './ChildHookEffect';

export default function DemoHookUseEffect() {
    let [number, setNumber] = useState(1);
    let [like, setLike] = useState(1);
    // useEffect là hàm chạy sau khi giao diện render thay cho didUpdate và didMount trong mọi trường hợp
    // useEffect(() => {
    //     console.log("DidMount");
    //     console.log("Effect");
    // })
    // cách viết thay thế cho componentDidMount
    useEffect(() => {
        console.log('DidMount');
    }, [])
    console.log('render');
    const handleIncreaser = () => {
        setNumber(number + 1)
    }
    // cách viết thay thế cho didUpdate
    useEffect(() => {
        console.log('number changed');
    }, [number])// number là giá trị nếu bị thay đổi sau render thì useEffect này sẽ chạy
    // ban đầu mặc định thì sẽ render ra được hết nhưng nếu lần thứ 2 có giá trị hay đổi thì mối render
    return (
        <div>
            <div className="card text-left" style={{ width: 200 }}>
                <button onClick={() => {
                    setLike(like + 1)
                }}>-</button>
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Body</p>
                    <button type="" onClick={handleIncreaser}>+</button>
                </div>
            </div>
            {like === 1 ? <ChildHookEffect /> : ""}

        </div>
    )
}
