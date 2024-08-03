import { TokenProps } from "../constants/tokens"
import { maskAddress } from "../lib/utils"

interface SelectTokenProps {
    direction: string
    token: TokenProps
}

const SelectToken = ({direction, token}: SelectTokenProps) => {
    return (
        <div className="flex flex-col">
            <label>{direction}</label>
            <div className="flex mt-2 items-center border border-black rounded-md p-2 cursor-pointer">
                <img className="rounded-full w-7 mr-2" src={token.logo} alt={token.name} />
                <label className="pr-2 border-r border-yellow-400">{token.symbol}</label>
                <label className="pl-2">{maskAddress(token.address)}</label>
            </div>
        </div>
    )
}

export default SelectToken