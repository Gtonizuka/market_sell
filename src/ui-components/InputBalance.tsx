import { useState, useContext } from 'react';
import styled from 'styled-components';

import ToolTip from '../ui-components/Tooltip';
import { InputTitle, InputWithTooltip } from '../components/styles';
import { ContractContext } from '../context/ContractContext';

const InputWrap = styled.div`
    border: 1px solid #DCDAE9;
    box-sizing: border-box;
    border-radius: 4px;
    min-height: 40px;
    margin-top: 4px;
    overflow: hidden;
    padding: 8px 12px;
`

const GrayedArea = styled.div`
    background: #DCDAE9;
    border-radius: 2;
    font-size: 1rem;
    font-weight: 400;
    padding: 4px;
`

const InputEl = styled.input`
    border: none;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2rem;
    margin-top: 11px;
    width: 100%;

    &:active, &:focus {
        outline: none;
    }
`

const ActionArea = styled.div`
    float: right;
`

const SmallBtn = styled.button`
    background: #fff;
    border: 1px solid #4DADF3;
    border-radius: 2px;
    color: #4DADF3;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
`

const InputBalance: React.FC = () => {

    const { balance } = useContext(ContractContext);

    const [amount, setAmount] = useState('100');

    const handleClick: () => void = () => {
        setAmount(balance);
    }

    return (
        <div>
            <InputWithTooltip>
                <InputTitle>
                    Position Size
                </InputTitle> <ToolTip />
            </InputWithTooltip>
            <InputWrap>
                <GrayedArea> oToken Balance: <span style={{ fontSize: 12, fontWeight: 800, float: 'right' }}>{balance}</span> </GrayedArea>
                <InputEl type="number" min="0" value={amount} onChange={(el) => setAmount(el.target.value)} />
                <ActionArea>
                    <SmallBtn onClick={handleClick}>max</SmallBtn>
                    <span style={{ fontSize: 10, marginLeft: 5 }}>oTokens</span>
                </ActionArea>
            </InputWrap>
        </div>
    );
}

export default InputBalance;