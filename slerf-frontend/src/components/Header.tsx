interface HeaderProps {
    title: string,
    description: string
}
const Header = ({title, description} : HeaderProps) => {
    return (
        <div className="mb-4">
            <h1 className="text-2xl font-bold mb-1">{title}</h1>
            <h5 className="text-sm">{description}</h5>
        </div>
    )
}

export default Header