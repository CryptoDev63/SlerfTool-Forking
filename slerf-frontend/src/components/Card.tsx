interface CardProps {
    children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return (
        <div className="w-fit border rounded-md p-4">
            {children}
        </div>
    )
}

interface CardTitleProps {
    title: string
}

export const CardTitle = ({title}: CardTitleProps) => {
    return (
        <label className="text-[16px]">{title}</label>
    )
}

export default Card