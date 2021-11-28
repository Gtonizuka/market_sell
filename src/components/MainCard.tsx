import { useState } from 'react';
import styled from 'styled-components';
import InputBalance from '../ui-components/InputBalance';
import InputCollateral from '../ui-components/InputCollateral';

import ToolTip from '../ui-components/Tooltip';
import { InputTitle, InputWithTooltip, SectionTitle, TitleWithTooltip } from './styles';

const Card = styled.div`
    box-shadow: 0px 4px 10px rgba(222, 222, 222, 0.5);
    border-radius: 4px;
`

const TabsArea = styled.div`
    display:flex;
`

const Tab = styled.button`
    background: #fff;
    border: none;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 0.1em;
    padding: 12px;
    text-transform: uppercase;
    font-weight: normal;
    width: 50%;

    &.inactive {
        background: #DCDAE9;
        opacity: 0.2;   
        border-left: 1px solid #292535;
        border-bottom: 1px solid #292535;
    }
`

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

const MainCard: React.FC = () => {

    const [amount, setAmount] = useState('100.00')

    const handleClick: () => void = () => {
        setAmount('21.042');
    }

    return (
        <Card>
            <TabsArea>
                <Tab>Market</Tab>
                <Tab className={'inactive'}>Limit</Tab>
            </TabsArea>
            <div style={{ padding: '18px 16px' }}>
                <InputBalance />
                <InputCollateral />
            </div>
        </Card>
    );
}

export default MainCard;