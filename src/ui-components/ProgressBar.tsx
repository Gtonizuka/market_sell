import { useContext } from "react";
import styled from "styled-components";

import { ContractContext } from "../context/ContractContext";

const Wrap = styled.div`
    display: flex;
    margin-top: 8px;
    position: relative; // Needed for vertical pointer
`

const GreenBar = styled.div`
    background: #49D273;
    height: 4px;
    border-radius: 16px;
    width: 75%;
`

const GreenVert = styled.div`
    background: #49D273;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
    width: 2px;
    height: 12px;
    position: absolute;
    top: -5px;
    left: 75%;
`

const GrayBar = styled.div`
    background: #DCDAE9;
    height: 4px;
    border-radius: 16px;
    opacity: 0.4;
    width: 25%;
`

const GrayVert = styled(GreenVert)`
   background: #77757E;
`

const ProgressBar: React.FC = () => {

    const { collRatio } = useContext(ContractContext);

    return (
        <Wrap>
            <GreenBar>
            </GreenBar>
            <GrayBar>

            </GrayBar>
            <GreenVert />
            <GrayVert style={{ left: `${collRatio}%` }} />
        </Wrap>
    )
}

export default ProgressBar;