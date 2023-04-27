import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        
      <div className={styles.connect}>
          <ConnectWallet colorMode="light" accentColor="#043d35" />
        </div>
         
        <br/>

        <h1 className={styles.title}>
          WELCOME TO <a> COCOBLOCKS NFT </a>
        </h1>

        <p className={styles.description}>
        Crafted with meticulous attention to detail, this masterpiece captures the essence of the digital age in all its glory.
        </p>


        <div>
        <Web3Button  contractAddress="0x825C67c860b4b9ea55bf49BCBa93685F36F4C598" action={(contract) =>
           {contract.erc721.claim(5)}}
           colorMode="light" accentColor="#fc0398"> 
            MINT NFT
         </Web3Button>
        </div>
                
        < br />

        <div className={styles.grid}>
          <a href="https://twitter.com/cocoblocksNFT/" className={styles.card}>
            <h2>TWITTER &rarr;</h2>
            <p>
              Our big community is available here!.
            </p>
             </a>

          <a href="https://etherscan.io/address/0x825c67c860b4b9ea55bf49bcba93685f36f4c598" className={styles.card}>
            <h2>ETHERSCAN &rarr;</h2>
            <p>
              You can just mint on etherscan or manage your transactions.
            </p>
          </a>

          <a
            href="https://opensea.io/collection/cocoblocksnft"
            className={styles.card}
          >
            <h2>OPENSEA &rarr;</h2>
            <p>
              Collect our cool NFTs on the marketplace.
            </p>
          </a>
        </div>

        < br />

        <main className={styles.title}>

          <p className={styles.description}>
            Developed by <a> ChumbaLabs </a>
          </p>

         </main>

      </main>
    </div>
  );
};

export default Home;
