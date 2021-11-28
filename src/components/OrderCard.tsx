import styled from 'styled-components';

import ToolTip from '../ui-components/Tooltip';
import ContractDetails from './ContractDetails';
import MainCard from './MainCard';
import { SectionTitle, TitleWithTooltip } from './styles';

const Wrap = styled.div`
    box-sizing: border-box;
    padding:16px;
    width: 248px;
    margin: 0 auto;
`

const OrderCard: React.FC = () => {
    return (
        <Wrap>
            <TitleWithTooltip>
                <SectionTitle>
                    Order Card
                </SectionTitle> <ToolTip text={'Generic tooltip text'} />
            </TitleWithTooltip>
            <ContractDetails />
            <MainCard />
        </Wrap>
    );
}

export default OrderCard;
