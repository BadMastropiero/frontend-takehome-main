export const RPC_URL = "https://rpc.ankr.com/eth" as const;

export const COIN_GECKO_URL =
  "https://api.coingecko.com/api/v3/simple/price" as const;

export const tokenList = [
  {
    icon: "rETHIcon",
    name: "Rocket Pool Ether",
    symbol: "rETH",
    decimals: 18,
    coingeckoID: "rocket-pool-eth",
    strategyAddress: "0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2",
  },
  {
    icon: "stETHIcon",
    name: "Lido Staked Ether",
    symbol: "stETH",
    decimals: 18,
    coingeckoID: "staked-ether",
    strategyAddress: "0x93c4b944D05dfe6df7645A86cd2206016c51564D",
  },
  {
    icon: "cbETHIcon",
    name: "Coinbase Staked Ether",
    symbol: "cbETH",
    decimals: 18,
    coingeckoID: "coinbase-wrapped-staked-eth",
    strategyAddress: "0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc",
  },
] as const;
