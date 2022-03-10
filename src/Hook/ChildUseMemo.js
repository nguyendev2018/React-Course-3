import React, { memo } from 'react'

function ChildUseMemo(props) {
    console.log("cart");
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map((item, index) => {
                            return <tr key={index}>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>{item.price}</th>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default memo(ChildUseMemo)