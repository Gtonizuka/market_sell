import { useContext, useState } from 'react';
import styled from 'styled-components';

import ToolTip from '../ui-components/Tooltip';
import { InputTitle, InputWithTooltip } from '../components/styles';
import MinusIcon from '../assets/svg-icons/MinusBtn';
import PlusIcon from '../assets/svg-icons/PlusBtn';
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

const InputEl = styled.input`
    border: none;
    font-size: 2rem;
    font-weight: 400;
    margin-right: 17px;
    text-align: right;
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

const ButtonsArea = styled.div`
    background: #DCDAE9;
    border-radius: 16px;
    display: flex;
`

const MinusBtn = styled.button`
    align-self: baseline;
    background: none;
    border: none;
    cursor: pointer;
`

const PlusBtn = styled(MinusBtn)`
    align-self: auto;
    background:#77757E;
    border-radius: 16px;
`

const InputSpot: React.FC = () => {

    const { spotChange, setSpotChange } = useContext(ContractContext);

    const handleBlur = (el: any) => {
        const { value } = el.target;

        const format = Number(value);

        if (format > 100 || format < 0) {
            if (setSpotChange) {
                setSpotChange('100')
            }
            return;
        }
        if (setSpotChange) { setSpotChange(value) };
    }

    const handleSubtract: () => void = () => {
        const amountToNr: number = Number(spotChange);
        if (amountToNr > 0) {
            const val = amountToNr - 1;
            if (setSpotChange) {
                setSpotChange(val.toString());
            }
        }
    }

    const handleSum: () => void = () => {
        const amountToNr: number = Number(spotChange);
        if (amountToNr < 100) {
            const val = amountToNr + 1;
            if (setSpotChange) {
                setSpotChange(val.toString());
            }
        }
    }

    return (
        <div style={{ marginTop: 10 }}>
            <InputWithTooltip>
                <InputTitle>
                    Spot Change
                </InputTitle> <ToolTip text={'Generic tooltip text'} />
            </InputWithTooltip>
            <InputWrap>
                <div style={{ display: 'flex' }}>
                    <ButtonsArea>
                        <MinusBtn onClick={handleSubtract}><MinusIcon /></MinusBtn>
                        <PlusBtn onClick={handleSum}><PlusIcon /></PlusBtn>
                    </ButtonsArea>
                    <InputEl type="number" min="0" max="100" value={spotChange} onChange={(el) => setSpotChange ? setSpotChange(el.target.value) : null} onBlur={handleBlur} />
                    <SpanLg>%</SpanLg>
                </div>
            </InputWrap>
        </div>
    );
}

export default InputSpot;