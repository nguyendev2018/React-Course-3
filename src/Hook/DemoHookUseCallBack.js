import React, { useState, useCallback } from 'react'
import ChildUserCallBack from './ChildUserCallBack';

export default function DemoHookUseCallBack(props) {
    let [like, setLike] = useState(1);
    const renderNotify = () => {
        return `Bạn đã thả ${like}`
    }
    const callBack = useCallback(renderNotify, [])
    return (
        <div className='m-5'>
            Like :{like} Heart
            <br></br>
            <span style={{ cursor: "pointer", color: "red", fontSize: 35 }} onClick={() => {
                setLike(like + 1)
            }}>Heart</span>
            <small>{renderNotify()}</small>
            <br></br>
            <br></br>
            <ChildUserCallBack renderNotify={callBack} />
        </div>
    )
}
