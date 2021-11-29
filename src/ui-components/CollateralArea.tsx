import { useContext } from "react";
import styled from "styled-components";

import GreenPassIcon from "../assets/svg-icons/GreenPassIcon";
import { ContractContext } from "../context/ContractContext";
import ProgressBar from "./ProgressBar";


const InfoArea = styled.div`
    display: flex;
`

const GreenText = styled.span`
    color: #49D273;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 16px;
    margin-left: 4px;
`

const CollateralArea: React.FC = (props) => {

    return (
        <div style={{ marginTop: 10 }}>
            <InfoArea>
                <GreenPassIcon />
                <GreenText>SAFE</GreenText>
                <span style={{ fontSize: 10, fontWeight: 500, marginLeft: 'auto' }}>
                    Collateral %
                </span>
            </InfoArea>
            <ProgressBar />
        </div>
    );
}

export default CollateralArea;
