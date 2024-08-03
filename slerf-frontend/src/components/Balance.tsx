interface BalanceProps {
    title: string,
    value: number
}

const Balance = ({title, value}: BalanceProps) => {
    return (
        <div className="flex flex-col">
            <label>{title}</label>
            <label>{value === 0 ? '-' : value}</label>
        </div>
    )
}

export default Balance