import styled from 'styled-components';

import ToolTipIcon from '../assets/svg-icons/TooltipIcon';

interface Props {
    text?: string;
}

const IconWrap = styled.div`
    cursor: pointer;
    position: relative;

    .tooltip__text  {
        background: #DCDAE9;
        display:none;
        left: 20px;
        min-width: 150px;
        padding: 0 10px;
        position: absolute;
        top: -11px;
    }

    &:hover {
        .tooltip__text {
            display:block;
        }
    }
`

const ToolTip: React.FC<Props> = (props) => {

    const { text } = props;

    return (
        <IconWrap>
            <ToolTipIcon />
            {
                text && <div className={'tooltip__text'}>
                    <p>{text} </p>
                </div>
            }
        </IconWrap>
    );
}

export default ToolTip;
