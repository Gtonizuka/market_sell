import styled from "styled-components"

export const Wrap = styled.div`
    background: rgba(220, 218, 233, .2);
    border-radius: 4px;
    padding: 14px 8px;
`

export const CardHeader = styled.div`
    border-bottom: 1px solid #DCDAE9;
    padding-bottom: 12px;   
`

export const CardTitle = styled.h2`
    font-size:  1.2rem;
    margin-top: 0;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`

export const MetaTitle = styled.h3`
    color: #77757E;
    font-size: 1.2rem;
    margin-bottom: 4px;
    margin-right: 5px;
    margin-top: 0;

    &.black-text {
        color: #292535;
        font-weight: 800;
    }
`

export const MetaWrap = styled.div`
    margin-top: 12px;

`

export const MetaInfo = styled.p`
    color:#77757E;
    margin: 0;
    font-size: 1.4rem;
    margin-right: 2px;
`

export const CardFooter = styled.div`
    background: rgba(220, 218, 233, .4);
    padding: 12px 8px;
`