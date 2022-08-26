import React, { useEffect, useState } from 'react'

export default function ChildHookEffect() {
    useEffect(() => {
        // Viết cho didUpdate
        console.log('didUpdate');

    });
    return (
        <div>
            s
        </div>
    )
}
