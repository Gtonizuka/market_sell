import styled from "styled-components";

import ToolTip from "../ui-components/Tooltip";

interface ITransaction {
    underlying_asset: 'USDC' | 'ETH'
    transaction_asset: 'ETH'
    cost: string
    impact: string
    fee: string
    collateral: string
    total: string
}

const Wrap = styled.div`
    background: rgba(220, 218, 233, .2);
    border-radius: 4px;
    padding: 14px 8px;
`

const CardHeader = styled.div`
    border-bottom: 1px solid #DCDAE9;
    padding-bottom: 12px;   
`

const CardTitle = styled.h2`
    font-size:  1.2rem;
    margin-top: 0;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`

const MetaTitle = styled.h3`
    color: #77757E;
    font-size: 1.2rem;
    margin-bottom: 4px;
    margin-right: 5px;
    margin-top: 0;

    &.black-text {
        color: #292535;
        font-weight: 800;
    }
`

const MetaWrap = styled.div`
    margin-top: 12px;

`

const MetaInfo = styled.p`
    color:#77757E;
    margin: 0;
    font-size: 1.4rem;
    margin-right: 2px;
`

const CardFooter = styled.div`
    background: rgba(220, 218, 233, .4);
    padding: 12px 8px;
`

const TxSummary: React.FC = () => {

    // Hardcoded values for UI purposes only
    const MOCK_DATA: ITransaction = {
        underlying_asset: 'USDC',
        transaction_asset: 'ETH',
        cost: '103.937',
        impact: '0.02',
        fee: '0.0983',
        collateral: '0.00234',
        total: '113.532'
    }

    return (
        <>
            <Wrap>
                <CardHeader>
                    <CardTitle>TX SUMMARY</CardTitle>
                    <div style={{ display: 'flex' }}><MetaTitle className={'black-text'}>Premium/oToken </MetaTitle> <ToolTip /></div>
                    <MetaInfo> <span style={{ color: '#292535' }}>{MOCK_DATA.underlying_asset} </span></MetaInfo>
                </CardHeader>
                <MetaWrap>
                    <div style={{ display: 'flex' }}><MetaTitle>Est. Total Cost </MetaTitle> <ToolTip /></div>
                    <MetaInfo> {MOCK_DATA.cost} <span>{MOCK_DATA.underlying_asset} </span></MetaInfo>
                </MetaWrap>
                <MetaWrap>
                    <div style={{ display: 'flex' }}><MetaTitle>Market Impact</MetaTitle><ToolTip /> </div>
                    <MetaInfo> {MOCK_DATA.impact}% </MetaInfo>
                </MetaWrap>
                <MetaWrap>
                    <div style={{ display: 'flex' }}><MetaTitle>0x Protocol Fee</MetaTitle><ToolTip /> </div>
                    <MetaInfo> {MOCK_DATA.fee} <span style={{ textDecoration: 'underline' }}>{MOCK_DATA.transaction_asset}</span> </MetaInfo>
                </MetaWrap>
                <MetaWrap>
                    <div style={{ display: 'flex' }}><MetaTitle>Collateral</MetaTitle><ToolTip /> </div>
                    <MetaInfo> {MOCK_DATA.collateral} {MOCK_DATA.underlying_asset} </MetaInfo>
                </MetaWrap>
            </Wrap>
            <CardFooter>
                <div style={{ display: 'flex' }}><MetaTitle className={'black-text'}>Total to Receive</MetaTitle><ToolTip /> </div>
                <MetaInfo> <span style={{ color: '#292535' }}><b>{MOCK_DATA.total}</b></span>  + {MOCK_DATA.fee} {MOCK_DATA.transaction_asset}</MetaInfo>
            </CardFooter>
        </>
    );
}

export default TxSummary;