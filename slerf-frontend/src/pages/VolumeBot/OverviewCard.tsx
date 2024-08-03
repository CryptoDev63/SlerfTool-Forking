import Balance from "../../components/Balance"
import Card, { CardTitle } from "../../components/Card"
import Divider from "../../components/Divider"

const OverviewCard = () => {
    return (
        <Card>
            <div className="w-[440px] text-sm">
                <CardTitle title="User Overview" />
                <div className="mt-4">Total Address Count: -</div>
                <div className="my-4 flex justify-between ">
                    <Balance title="SOL Balance" value={0} />
                    <Balance title="USDC Balance" value={0} />
                    <Balance title="Token Balance" value={0} />
                </div>
                <Divider/>
                <div className="mt-4">Active Account Count: -</div>
                <div className="my-4 flex justify-between ">
                    <Balance title="SOL Balance" value={0} />
                    <Balance title="USDC Balance" value={0} />
                    <Balance title="Token Balance" value={0} />
                </div>
            </div>
        </Card>
    )
}

export default OverviewCard