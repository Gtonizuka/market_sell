import { useState } from 'react';
import BtnMain from '../ui-components/Btn';

interface Props {
    step: number
    onConnectHandler: (provider: Window) => void
    isConnected: boolean
    handleStepProg: () => void
    isFormLoading: boolean
}

interface GreenBtnProps {
    stepNr: number
    text: string
}

declare const window: Window &
    typeof globalThis & {
        ethereum: any
        web3: any
    }

const FormButton: React.FC<Props> = (props) => {

    const { step, onConnectHandler, handleStepProg, isFormLoading, isConnected } = props;

    const [isConnecting, setIsConnecting] = useState(false);


    const detectProvider = () => {
        let provider;

        if (window.ethereum) {
            provider = window.ethereum;
        }
        else if (window.web3) {
            provider = window.web3.currentProvider;
        }
        else {
            window.alert('No ethereum browser detected!')
        }
        return provider;
    }

    const loginHandler = async () => {
        setIsConnecting(true);
        const provider = detectProvider();

        console.log(`Provider is ${provider}`)

        await provider.request({
            method: 'eth_requestAccounts'
        })
        // setIsConnecting(false);
        onConnectHandler(provider);
    }

    const GreenBtn: React.FC<GreenBtnProps> = (props) => {
        const { stepNr, text } = props;

        return (
            <BtnMain
                text={`${isFormLoading ? `Submitting..` : text}`}
                onClick={handleStepProg}
                className={`form-btn green-bg ${isFormLoading && step === stepNr ? 'is-disabled' : null}`}
            />
        )
    }

    return (

        <>
            {
                !isConnected ? <BtnMain onClick={loginHandler} text={`${isConnecting ? 'Connecting...' : 'Connect to MetaMask'}`} className={'form-btn orange-bg'} />
                    : <>
                        {
                            step === 0 && <GreenBtn stepNr={step} text={'ENABLE WETH WRAPPER'} />
                        }
                        {
                            step === 1 && <GreenBtn stepNr={step} text={'APPROVE COLLATERAL'} />
                        }
                        {
                            step === 2 && <GreenBtn stepNr={step} text={'PERMIT OTOKEN'} />
                        }
                        {
                            step === 3 && <GreenBtn stepNr={step} text={'Submit Trade'} />
                        }
                    </>
            }
        </>

    );
}

export default FormButton;
