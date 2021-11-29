import styled from "styled-components";

interface Props {
    text: string,
    amount: string
    isTilde?: boolean
}

const Box = styled.div`
    background: rgba(220, 218, 233, .3);
    border-radius: 4px;
    color: #77757E;
    font-size: 1.6rem;
    padding: 9px 12px;
`

const Title = styled.h3`
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 0 5px 0;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`

const OutputBox: React.FC<Props> = (props) => {

    const { text, amount, isTilde } = props;

    return (
        <div style={{ marginTop: 10 }}>
            <Title>{text}</Title>
            <Box>
                {
                    isTilde && <>~</>
                }
                ${amount}
            </Box>
        </div>
    );
}

export default OutputBox;
