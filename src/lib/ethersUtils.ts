import { ethers } from 'ethers';
import strategyABI from '@/abi/IStrategy';
import { RPC_URL, tokenList } from './constants';

const provider = new ethers.JsonRpcProvider(RPC_URL);

// Function to return the balance of a token for a given strategy address
export const getTokenBalance = async (strategyAddress: string) => {
    const contract = new ethers.Contract(strategyAddress, strategyABI, provider);
    const totalShares = await contract.totalShares();
    return Number(ethers.formatEther(totalShares));
};

// Function to get price data from Coingecko
export const fetchPrices = async () => {
    const ids = `ethereum,${tokenList.map((token) => token.coingeckoID).join(',')}`;
    const vsCurrencies = 'usd,eth';
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vsCurrencies}`;
    console.log({ url });
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
