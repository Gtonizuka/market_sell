import React from 'react';

import OrderCard from './components/OrderCard';
import { ContractProvider } from './context/ContractContext';

const App: React.FC = () => {
    return (
        <div>
            <ContractProvider>
                <OrderCard />
            </ContractProvider>
        </div>
    );
}

export default App;
