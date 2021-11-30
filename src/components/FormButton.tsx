import { useState } from 'react';
import BtnMain from '../ui-components/Btn';

interface Props {
    step: number
}

declare const window: Window &
    typeof globalThis & {
        ethereum: any
        web3: any
    }

const FormButton: React.FC<Props> = (props) => {

    const { step } = props;

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
    }

    return (

        <>
            {
                step === 0 && <BtnMain onClick={loginHandler} text={`${isConnecting ? 'Connecting...' : 'Connect to MetaMask'}`} className={'form-btn orange-bg'} />
            }
            {
                step === 1 && <BtnMain text={'ENABLE WETH WRAPPER'} className={'form-btn green-bg'} />
            }
            {
                step === 2 && <BtnMain text={'APPROVE COLLATERAL'} className={'form-btn green-bg'} />
            }
            {
                step === 3 && <BtnMain text={'PERMIT OTOKEN'} className={'form-btn green-bg'} />
            }
            {
                step === 4 && <BtnMain text={'Submit Trade'} className={'form-btn green-bg'} />
            }
        </>

    );
}

export default FormButton;
