# Market sell card prototype

To launch run
### `yarn && yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Data

The app is using mocked data.
My reasoning  behind  the data structure was to have a option contract with side, contract name, date etc. and a different object that handles the transaction itself. 
The `contract` object is completely self contained and only contains data about the `contract` itself (and maybe top bid/ask).

For simplicity I didn't store the `contract` data in a context obj(I did that for the `transaction`data).

The `contract` interface looks as such:

```
    assetName: string;
    assetDate: string;
    side: 'PUT' | 'CALL';
    price: string;
```

Where `assetName` is the main asset the contract is trading on. Other contract metadata from that interface should be pretty self explanatory.


The `transaction` interface look like:

``` 
    underlying_asset: 'USDC' | 'ETH'
    transaction_asset: 'ETH'
    cost: string
    impact: string
    fee: string
    collateral: string
    total: string
```

 `transaction_asset` represents what the network gas fee is paid on and the rest is just generic metadata about the current transaction. 

## Metamask

Any `chainId`can be used to connect to MM. App is not handling disconnecting, `chainId` switching etc. as it was out of scope for this exercise. 
Only a simple MM network connection. 


## Animations

I didn't add any logic behind the change in position size. Just to have some dynamic visualization I added Liquidation price change (just a random +5/-5)  on Collateralization ratio changes. Also  the progression bar moves to the right/left depending on Collateralization ratio too.

The TX Action timeline and main button changes according to design.

The app also have buttons hover state and working tooltips.

## Input Validation

I added some basic input validations to  Position size, Collateralization Ratio and Spot Change.


## File orgs

I just follow the common `react` best practices in terms of file organizations. 


## TODO

- Input validation
- File restructuring (move MM provider to top layer etc.)
- Theme
- MM error handling
