import { useState } from "react"
import Card, { CardTitle } from "../../components/Card"
import SelectToken from "../../components/SelectToken"
import Tokens from "../../constants/tokens"

const DexList = ['Raydium', 'PumpFun']

const BatchSettingsCard = () => {
    const [dexIndex, setDexIndex] = useState(0)

    return (
        <Card>
            <div className="w-[440px] text-sm">
                <CardTitle title="Batch Transaction Settings" />
                <div className="mt-4">
                    <SelectToken direction="From" token={Tokens[0]} />
                    <img className="m-auto mt-2" src="/images/down.png" alt="down" />
                    <SelectToken direction="To" token={Tokens[1]} />
                </div>
                <div className="mt-4 flex items-center">
                    <label className="mr-4">DEX:</label>
                    <div className="flex">
                        {DexList.map((dex, index) => {
                            const active = dexIndex === index
                            return (
                                <div className={`border px-3 py-1 cursor-pointer ${active ? 'border-yellow-400 text-yellow-400' : 'border-black text-black'}`} key={`${dex}_${index}`} onClick={() => setDexIndex(index)}>{dex}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default BatchSettingsCard