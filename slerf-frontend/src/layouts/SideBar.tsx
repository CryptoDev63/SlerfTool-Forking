import { useNavigate } from "react-router-dom"
import Logo from "../components/Logo"

const MenuItems = [
    {
        name: 'home',
        href: '/'
    },
    {
        name: 'bundler',
        href: '/bundler',
        items: [
            {
                name: 'launch and buy',
                href: '/bundler'
            },
            {
                name: 'volume bot',
                href: '/volumebot'
            },
        ]
    },
    {
        name: 'market maker',
        href: '/market',
        items: [
            {
                name: 'wallet controller',
                href: '/market'
            },
            {
                name: 'buy and sell',
                href: '/buysell'
            },
        ]
    }
]

const SideBar = () => {
    const navigate = useNavigate()

    const handleNaviate = (path: string) => {
        navigate(path)
    }

    return (
        <div className="bg-[#262b3f] min-w-72 h-screen">
            <Logo />
            <ul className="p-8 text-lg">
                {MenuItems.map((menu, index) => {
                    return (
                        <div className="uppercase py-3" key={`${menu}_${index}`}>
                            <li className="cursor-pointer hover:text-[#ff9815]">{menu.name}</li>
                            { menu.items?.map((subMenu, index) => {
                                return (
                                    <li className="pl-5 py-2 cursor-pointer hover:text-[#ff9815]" key={`${subMenu}_${index}`} onClick={() => handleNaviate(subMenu.href)}>{subMenu.name}</li>
                                )
                            })}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar