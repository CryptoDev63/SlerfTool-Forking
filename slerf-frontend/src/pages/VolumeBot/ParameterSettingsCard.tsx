import { useState } from "react"
import Card, { CardTitle } from "../../components/Card"
import RadioButtonsGroup from "./components/TypeSelect"

const ModeList = ['Total Amount', 'Fixed Amount', 'Random Amount', 'Random Percentage']

const ParameterSettingsCard = () => {
    const [modeOption, setModeOption] = useState(ModeList[0])

    // const handleRadioChange = (e: any) => {
    //     console.log("pooh, value = ", e.target.value)
    //     setModeOption(e.target.value)
    // }

    // console.log("pooh, modeOption = ", modeOption)

    return (
        <Card>
            <div className="w-[440px] text-sm">
                <CardTitle title="Transaction Parameter Settings" />
                <div className="flex items-center mt-6">Transaction Quantity<img className="w-5 h-5 rounded-full mx-1" src="/images/tokens/SOL.png" />SOL</div>
                <div className="flex mt-2">
                    <RadioButtonsGroup action={setModeOption} value={modeOption} options={ModeList} />
                </div>
                <div>
                    <div>
                        <label>Task Interval (seconds)</label>

                    </div>
                    <div className="flex justify-between gap-1">
                        <div className="border rounded-md px-3 py-2">
                            <input className="w-full bg-transparent outline-none" />
                        </div>
                        <label>~</label>
                        <div className="border rounded-md px-3 py-2">
                            <input className="w-full bg-transparent outline-none" />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ParameterSettingsCard