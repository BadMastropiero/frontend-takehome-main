import { useQuery } from '@tanstack/react-query';
import { getTokenBalance, fetchPrices } from '@/lib/ethersUtils';
import { tokenList } from '@/lib/constants';

export interface TokenTVLData {
    name: string;
    balance: number; // in token amount
    tvlInEth: number;
    tvlInUsd: number;
}

export const useTVLData = () => {
    const { data: balances, isLoading: balancesLoading, error: balancesError } = useQuery(
        {
            queryKey: ['tokenBalances'],
            initialData: {},
            queryFn:
                async () => {
                    const balances: Record<string, number> = {};
                    for (const token of tokenList) {
                        const balance = await getTokenBalance(token.strategyAddress);
                        balances[token.name] = balance;
                    }

                    return balances;
                },
        }
    )

    const { data: prices, isLoading: pricesLoading, error: pricesError } = useQuery(
        {
            queryKey: ['tokenPrices'],
            initialData: undefined,
            queryFn: fetchPrices
        },
    );

    const isLoading = balancesLoading || pricesLoading;
    const error = balancesError || pricesError;

    let tvlData: TokenTVLData[] = [];

    if (balances && prices) {
        tvlData = tokenList.map((token) => {
            const balance = balances[token.name];
            const tokenPriceData = prices[token.coingeckoID];

            const priceInUsd = tokenPriceData?.usd || 0;
            const priceInEth = tokenPriceData?.eth || 0;

            const tvlInUsd = balance * priceInUsd;
            const tvlInEth = balance * priceInEth;

            return {
                name: token.name,
                balance,
                tvlInUsd,
                tvlInEth,
            };
        });
    }

    return {
        tvlData,
        isLoading,
        error,
    };
};
