import styled from 'styled-components';
import ToolTipIcon from '../assets/svg-icons/TooltipIcon';

import BtnMain from '../ui-components/Btn';

const Card = styled.div`
    box-shadow: 0px 4px 10px rgba(222, 222, 222, 0.5);
    border-radius: 4px;
    padding: 18px 16px;
`
const ButtonAreas = styled.div`
    display: flex;
    justify-content: space-around;
`

const ContentLG = styled.span`
    color: #292535;
    font-size: 1.8rem;
    font-weight: 800;
    margin-right: 5px;
    text-transform: uppercase;
`

const ContentLight = styled.span`
    color: #77757E;
    font-size: 1.2rem;
    font-weight: 300;
    text-transform: uppercase;
`

const ContentUnderlined = styled.span`
    font-weight: 800;
    text-decoration: underline;
`

interface IContract {
    assetName: string;
    assetDate: string;
    side: 'PUT' | 'CALL';
    price: string;
}


const ContractDetails: React.FC = () => {

    // Hardcoded values for UI purposes only
    const MOCK_CONTRACT: IContract = {
        assetName: 'weth',
        assetDate: 'Fri, 30 Apr 2021',
        side: 'PUT',
        price: '2080'
    }

    return (
        <Card>
            <ButtonAreas>
                <BtnMain className={'green-text'} text={'buy'} />
                <BtnMain className={'red-bg'} text={'sell'} />
            </ButtonAreas>
            <div>
                <p><ContentLG>{MOCK_CONTRACT.assetName}</ContentLG><ContentLight>{MOCK_CONTRACT.assetDate}</ContentLight></p>
            </div>
            <div>
                <p>{MOCK_CONTRACT.side} -- ${MOCK_CONTRACT.price} STRIKE</p>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: 5 }}>
                    <ToolTipIcon />
                </div>
                <p style={{ marginTop: 0 }}>To create a spread, select another option. <ContentUnderlined>Learn more</ContentUnderlined></p>
            </div>
        </Card>
    );
}

export default ContractDetails;