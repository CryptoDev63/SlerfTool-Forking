import ConnectWalletButton from "../components/ConnectWalletButton"

const Header = () => {
    return (
        <nav className="h-16 flex items-center justify-end px-8 bg-yellow-100/30">
            <ConnectWalletButton />
        </nav>
    )
}

export default Header