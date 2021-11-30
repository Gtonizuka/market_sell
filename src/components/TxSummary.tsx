import ToolTip from "../ui-components/Tooltip";
import { CardFooter, CardHeader, CardTitle, MetaInfo, MetaTitle, MetaWrap, Wrap } from "./styles.txsummary";

interface ITransaction {
    underlying_asset: 'USDC' | 'ETH'
    transaction_asset: 'ETH'
    cost: string
    impact: string
    fee: string
    collateral: string
    total: string
}


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