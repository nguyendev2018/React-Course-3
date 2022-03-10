import styled from 'styled-components';
export const Button = styled.button`

    color : #fff;
    background-color:${props => props.primary ? "blue" : " "};
    &.button_style{
        font-size:30px
    }
`
export const SmallButton = styled(Button)`
    background-color:orange;
    font-size:0.5rem;
`