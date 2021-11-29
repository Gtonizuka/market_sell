import React, { useState, FC, Dispatch, SetStateAction } from 'react';

interface IContractContext {
    balance: string;
    setBalance?: Dispatch<SetStateAction<string>>;
    collRatio: string;
    setCollRatio?: Dispatch<SetStateAction<string>>;
    spotChange: string;
    setSpotChange?: Dispatch<SetStateAction<string>>;
}

const defaultState = {
    balance: '21.042',
    collRatio: '25',
    spotChange: '25'
};

export const ContractContext = React.createContext<IContractContext>(defaultState);

export const ContractProvider: FC = ({ children }) => {
    const [balance, setBalance] = useState(defaultState.balance);
    const [collRatio, setCollRatio] = useState(defaultState.collRatio);
    const [spotChange, setSpotChange] = useState(defaultState.spotChange);

    return (
        <ContractContext.Provider
            value={{
                balance,
                setBalance,
                collRatio,
                setCollRatio,
                spotChange,
                setSpotChange
            }}
        >
            {children}
        </ContractContext.Provider>
    );
};