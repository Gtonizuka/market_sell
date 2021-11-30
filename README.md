# Market sell card prototype

To launch run
### `yarn && yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Data

The app is using mocked data.

The reasoning  behind  the data structure was that each option contract should have a side, contract name, date etc..
The `contract` object is completely self contained and only contains data about the `contract` itself (probably missing top bid/ask).

I also created a `transaction` object, that contains the user `position size` and metadata regarding the current transaction user is trying to perform.

For simplicity I didn't store the `contract` data in a context obj(I did that for the `transaction`data).

The `contract` interface looks as such:

```
    assetName: string;
    assetDate: string;
    side: 'PUT' | 'CALL';
    price: string;
```

Where `assetName` is the main asset the contract is trading on. Other `contract` properties should be pretty self explanatory.


The `transaction` interface looks like:

``` 
    underlying_asset: 'USDC' | 'ETH'
    transaction_asset: 'ETH'
    cost: string
    impact: string
    fee: string
    collateral: string
    total: string
```

 `transaction_asset` represents what the network gas fees are paid in and the rest is just generic metadata about the current transaction. 

## Metamask

Any `chainId` can be used to connect to MM. 
App is not handling disconnecting, `chainId` switching etc. as it was out of scope for this exercise. 
Only a simple MM network connection. 


## Animations

Most of the data is static. 

For the sake of having some dynamic visualization I added Liquidation price change (just a random +$5/-$5 when `Collateralization ratio` changes). 

Collateral % bar moves to the right/left depending on Collateralization ratio changes too.

The TX Action timeline and main button text/colour change according to Figma design.

The app has buttons hover state and working tooltips that show a generic info text.

## Input Validation

There is some basic input validations to `Position size`, `Collateralization Ratio` and `Spot Change`.


## File orgs

I just follow the common `react` best practices in terms of file organizations. 


## TODO

- Input validation
- Architecture restructuring (move MM provider to top layer etc.)
- Theme
- MM error handling
