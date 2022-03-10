import styled from 'styled-components';
import React from 'react';
// export const link = (props) => {
//     return <a href="" className={props.className}>
//         {props.children}
//     </a>
// }
// let {className,children} = props;
export const Link = ({ className, children, ...restProps }) => {
    return <a href="" className={className} {...restProps}>
        {children}
        <span>sdsd</span>
    </a>
}
export const StyleLink = styled(Link)`
    color:orange;
    background-color:red
`