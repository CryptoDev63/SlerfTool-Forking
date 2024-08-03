export interface TokenProps {
    name: string
    symbol: string
    logo: string
    address: string
    description?: string
}

const Tokens: TokenProps[] = [
    {
        name: "SOL",
        symbol: "SOL",
        address: "So11111111111111111111111111111111111111112",
        logo: "/images/tokens/SOL.png",
    },
    {
        name: "USDC",
        symbol: "USDC",
        address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        logo: "/images/tokens/USDC.png",
    },
    {
        name: "USDT",
        symbol: "USDT",
        address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        logo: "/images/tokens/USDT.png",
    }
]

export default Tokens