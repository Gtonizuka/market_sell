import { useState } from 'react';
import styled from 'styled-components';

import CollateralArea from '../ui-components/CollateralArea';
import InputBalance from '../ui-components/InputBalance';
import InputCollateral from '../ui-components/InputCollateral';
import InputSpot from '../ui-components/InputSpot';
import OutputBox from '../ui-components/OutputBox';
import FormButton from './FormButton';
import TimeLineComponent from './Timeline';
import TxSummary from './TxSummary';

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
        background: rgba(220, 218, 233, .2);
        border-left: 1px solid #292535;
        border-bottom: 1px solid #292535;
    }
`

const MainCard: React.FC = () => {

    const [step, setStep] = useState(0);

    return (
        <Card>
            <TabsArea>
                <Tab>Market</Tab>
                <Tab className={'inactive'}>Limit</Tab>
            </TabsArea>
            <div style={{ padding: '18px 16px' }}>
                <InputBalance />
                <InputCollateral />
                <InputSpot />
                <CollateralArea />
                <OutputBox text={'Liquidation price'} amount={'146.79'} isTilde={true} />
                <OutputBox text={'Collateral'} amount={'100.00'} />
                <TimeLineComponent step={step} />
                <TxSummary />
            </div>
            <FormButton step={step} />
        </Card>
    );
}

export default MainCard;