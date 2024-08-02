import { FC } from 'react';
import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

const ConnectWalletButton: FC = () => {
  const wallet = useWallet()
  console.log("pooh, wallet = ", wallet)

  return (
    <WalletModalProvider>
      <WalletMultiButton />
    </WalletModalProvider>
  );
}

export default ConnectWalletButton