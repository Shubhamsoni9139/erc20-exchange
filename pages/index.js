import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const connectWithMetamask = useMetamask();
  const router = useRouter();
  const address = useAddress();

  useEffect(() => {
    if (address) router.replace("/exchange");
  }, [address]);

  return (
    <>
      <div className="body__container">
        <Head>
          <title>Exchange TEST tokens</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="home__container">
        <div className="home__image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.png"
                alt="MetaMask Fox"
                width={300}
                height={300}
              />
            </div>
          <div className="home__content">
            <div>
              <h1>Sign in to exchange</h1>
              <button className="home__button" onClick={connectWithMetamask}>
                Sign in using MetaMask
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
