# Take home

## How to run

- Install dependencies using `npm`
- `npm run dev` and check which port

## Intro

This is a toy application designed to be built in a few hours.

We installed a few dependencies here to help you along the way

- [Shadcn](https://ui.shadcn.com/docs) for components
- [Tailwind](https://tailwindcss.com/docs/installation) for styling
- Typescript
- [ReactQuery](https://tanstack.com/query/latest) for data management
- [Ethers.js](https://docs.ethers.org/v5/) for web3
- [Rechart](https://recharts.org/en-US/) for data visualization

You are free to use whatever tooling you are comfortable. We are framework and tooling agnostic. e.g.

- [Viem](https://viem.sh/)
- [Wagmi](https://wagmi.sh/)
- [React Router](https://reactrouter.com/en/main)
- etc

## Takehome Rubric

- Find the TVL locked up for the following ERC 20 tokens in EigenLayer and display the amounts and the USD & ETH equvialent in the widgets

  - rETH
  - stETH
  - cbETH

- Create a Pie chart with the token data for ETH or USD [HINT: Check your work with our [production application](https://holesky.eigenlayer.xyz/restake). The footer has the TVL on hover]

- Create a button or switch to toggle TVL values between ETH or USD on the pie chart

  - Persist the toggle if the page is refreshed

- _EXTRA_ Document how you would test this? And what are the tradeoffs

## Files to look at

- `/abi` has the ABI for the contract. You want to call `totalShares` on the smart contract with the strategy address. HINT: `tokenList` const in `/constants.ts`, visit `strategyAddress` Contract on Etherscan and read as proxy

- `/constants.ts` has the APIs to call
  - [Coingecko](https://docs.coingecko.com/v3.0.1/reference/introduction) has a free version and you should be able to call `https://api.coingecko.com/api/v3/simple/price`
  - You should use any free ETH RPC, e.g. `https://rpc.ankr.com/eth`

### Things we care about

- Assume that someone else has to maintain your code and that it's readable.
- If you were part of a team that needed to refactor or improve the application to better maintain and support it over the next 2-3 years, what are things you would change or improve, and why?
