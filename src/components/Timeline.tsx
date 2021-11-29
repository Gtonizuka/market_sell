import styled from 'styled-components';
import SwitcherIcon from '../assets/svg-icons/Switcher';
import SwitcherIconBlack from '../assets/svg-icons/SwitcherBlack';
import ToolTip from '../ui-components/Tooltip';

interface Props {
    step: number
}

const STEP_DETAILS = [
    '1. Enable WETH Wrapper',
    '2. Approve collateral to Opyn Contracts',
    '3. Permit oToken to wrapper contracts',
    '4. Permit, deposit, mint & trade'
]

const Wrap = styled.div`
    margin-top: 24px;
`

const Title = styled.h3`
    letter-spacing: 0.1em;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
`

const ListItem = styled.li`
    list-style: none;
    padding: 0;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 14px; 
    margin-bottom: 16px;
    display: flex;
    justify-content: space-around;

    &.is-active {
        color: #292535;
        font-weight: 500;
        text-decoration: underline;
    }

    .text-content {
        margin-left: 5px;
        max-width: 75%;
    }
`

const TimeLine: React.FC<Props> = (props) => {
    return (
        <Wrap>
            <Title>TX ACTION</Title>
            <List>
                {
                    STEP_DETAILS.map(
                        (step, i) => {
                            const isCurrentStep = i === props.step;
                            return (
                                <ListItem className={`${isCurrentStep ? 'is-active' : null}`}>
                                    <span> {isCurrentStep ? <SwitcherIconBlack /> : <SwitcherIcon />} </span>
                                    <span className={'text-content'}>{step}</span>
                                    <ToolTip />
                                </ListItem>
                            )
                        }
                    )
                }
            </List>
        </Wrap>
    );
}

export default TimeLine;
