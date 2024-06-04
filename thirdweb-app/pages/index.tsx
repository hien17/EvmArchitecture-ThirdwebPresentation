import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import TransferNativeToken from "../components/TransferNativeToken";
import Withdraw from "../components/Withdraw";

const Home: NextPage = () => {
  const address = useAddress();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                thirdweb.
              </a>
            </span>
          </h1>

          <p className={styles.description}>
            Get started by configuring your desired network in{" "}
            <code className={styles.code}>src/index.js</code>, then modify the{" "}
            <code className={styles.code}>src/App.js</code> file!
          </p>

          <div style={{marginBottom: '20px'}}>
            {address}
          </div>

          <div className={styles.connect}>
            <ConnectWallet />
          </div>
        </div>
        <TransferNativeToken/>
        <br/> <br/>
        <Withdraw/>
        
      </div>
    </main>
  );
};

export default Home;
