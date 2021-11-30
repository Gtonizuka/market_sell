import { SetStateAction, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Web3 from 'web3';

import { ContractContext } from '../context/ContractContext';
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
    const { collRatio } = useContext(ContractContext);

    const [step, setStep] = useState(0);
    const [sessCollateralRatio, setSessCollateralRatio] = useState(collRatio);
    const [liquidationPrice, setLiquidationPrice] = useState('146.79');
    const [isConnected, setIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentAccount, setCurrentAccount] = useState<SetStateAction<null> | string>(null);


    // Web3 provider type is buggy, hack as any
    const onConnect = async (provider: any) => {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts()

        // Check if MM is connected
        if (accounts.length === 0) {
            // TODO: have below as an alert
            console.log('Please connect MM');
            return;
        } else if (accounts[0] !== currentAccount) {
            setCurrentAccount(accounts[0])
        }
        setIsConnected(true);
    }

    //  Effect #1 - Just mocking some liq. price movement
    useEffect(() => {
        let amt = Number(liquidationPrice);

        if (collRatio > sessCollateralRatio) {
            amt = amt + 5;
        } else {
            amt = amt - 5;
        }

        setLiquidationPrice(amt.toFixed().toString());
        setSessCollateralRatio(collRatio);

    }, [collRatio])

    // Mock steps  progression button logic
    const handleStep = () => {
        setIsLoading(true);
        setTimeout(
            () => {
                setStep(step + 1)
                setIsLoading(false);
            }, 2000
        )
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
                <InputSpot />
                <CollateralArea />
                <OutputBox text={'Liquidation price'} amount={liquidationPrice} isTilde={true} />
                <OutputBox text={'Collateral'} amount={'100.00'} />
                <TimeLineComponent step={step} />
                <TxSummary />
            </div>
            <FormButton step={step} onConnectHandler={onConnect} isConnected={isConnected} handleStepProg={handleStep} isFormLoading={isLoading} />
        </Card>
    );
}

export default MainCard;