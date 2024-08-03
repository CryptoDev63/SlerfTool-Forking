import Divider from "../../components/Divider"
import Header from "../../components/Header"
import BatchSettingsCard from "./BatchSettingsCard"
import OverviewCard from "./OverviewCard"
import ParameterSettingsCard from "./ParameterSettingsCard"
import TransactionLogCard from "./TransactionLogCard"
import WalletListCard from "./WalletListCard"

const Title = 'Pump Batch Trading'
const Description = 'Presets and automatically executes trading commands, facilitating batch transactions on Pump, enhances trading efficiency and timeliness, especially suitable for scenarios requiring quick execution of large volumes of transactions.'

const VolumeBot = () => {
    return (
        <div className="text-black">            
            <Header title={Title} description={Description}/>
            <Divider />
            <div className="flex justify-between gap-3 my-8">
                <div className="flex flex-col gap-3">
                    <OverviewCard />
                    <BatchSettingsCard />
                </div>
                <WalletListCard />
            </div>
            <div className="flex justify-between gap-3">
                <ParameterSettingsCard />
                <TransactionLogCard />
            </div>
        </div>
    )
}

export default VolumeBot