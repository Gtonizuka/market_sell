import styled from 'styled-components';

interface Props {
    text: string;
    className?: string;
    onClick?: () => void;
}

const ButtonEl = styled.button`
    background: #000; 
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    font-size:  1.4rem;
    font-weight: 800;
    min-width: 88px;
    padding: 12px 24px;
    text-transform:  uppercase;
    transition: 0.4s;

    &.green-text {
        background: #fff;
        border:1px solid #49D273;
        color: #49D273;

        &:hover {
            background: #49D273;
            color: #fff;
        }
    }

    &.red-bg {
        background: #EC7987;
        border: 1px solid #EC7987;
        color: #fff;
        &:hover {
            background: #d72d42;
        }
    }

    &.green-bg {
        background: #49D273;
        border: #49D273;
        color: #fff;
    }

    &.orange-bg {
        background: #CD6116;
        border: #CD6116;
        color: #fff;
    }

    &.form-btn {
        padding: 12px 0;
        width: 100%;
    }

`

const BtnMain: React.FC<Props> = (props) => {

    const { text } = props;

    return (
        <ButtonEl onClick={props.onClick} className={props.className}>{text}</ButtonEl>
    );
}

export default BtnMain;
