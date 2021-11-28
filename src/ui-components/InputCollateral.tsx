import { useState } from 'react';
import styled from 'styled-components';

import ToolTip from '../ui-components/Tooltip';
import { InputTitle, InputWithTooltip } from '../components/styles';

const InputWrap = styled.div`
    border: 1px solid #DCDAE9;
    box-sizing: border-box;
    border-radius: 4px;
    min-height: 40px;
    margin-top: 4px;
    overflow: hidden;
    padding: 8px 12px;  
`

const InputEl = styled.input`
    border: none;
    font-size: 2rem;
    font-weight: 400;
    width: 100%;

    &:active, &:focus {
        outline: none;
    }
`

const SpanLg = styled.span`
    align-self: center;
    font-size: 1.2rem;
    font-weight: 400;
`

const InputCollateral: React.FC = () => {

    const [amount, setAmount] = useState('25')

    const handleBlur = (el: any) => {
        const { value } = el.target;

        const format = Number(value);

        if (format > 100 || format < 0) {
            setAmount('100')
            return;
        }
        setAmount(value);
    }

    return (
        <div style={{ marginTop: 10 }}>
            <InputWithTooltip>
                <InputTitle>
                    COLLATERALIZATION RATIO
                </InputTitle> <ToolTip text={'Generic tooltip text'} />
            </InputWithTooltip>
            <InputWrap>
                <div style={{ display: 'flex' }}>
                    <InputEl type="number" min="0" max="100" value={amount} onChange={(el) => setAmount(el.target.value)} onBlur={handleBlur} />
                    <SpanLg>%</SpanLg>
                </div>
            </InputWrap>
        </div>
    );
}

export default InputCollateral;