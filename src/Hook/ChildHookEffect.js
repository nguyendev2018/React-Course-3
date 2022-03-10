import React, { useEffect, useState } from 'react'

export default function ChildHookEffect() {
    let [number, setNumber] = useState(1);

    console.log('render child');
    useEffect(() => {
        // Viết cho didUpdate
        console.log('didUpdate');
        return () => {
            // hàm này không tự kích hoạt chỉ khi nào component mất đi thì hàm này mới kích hoạt
            console.log('willUnMount');
        }
    }, [number]);
    return (
        <div>
            <textarea></textarea> <br></br>
            <button className='btn btn-success'>Gửi</button>
        </div>
    )
}
