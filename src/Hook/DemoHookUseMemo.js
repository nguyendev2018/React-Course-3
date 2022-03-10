import React, { useMemo, useState } from 'react'
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo() {
    let [like, setLike] = useState(1);
    let cart = [
        { id: 1, name: "phone", price: "2000" },
        { id: 2, name: "phone", price: "2000" },
        { id: 3, name: "phone", price: "2000" },
    ]
    const cartMemo = useMemo(() => cart, [like])
    return (
        <div>
            Like {like}
            <br></br>
            <span onClick={() => {
                setLike(like + 1)
            }}>Heart</span>
            <br></br>
            <ChildUseMemo cart={cartMemo} />
        </div>
    )
}
