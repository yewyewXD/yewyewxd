import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl={process.env.REACT_APP_MORALIS_SERVER!}
      appId={process.env.REACT_APP_MORALIS_APPID!}
    >
      <Component {...pageProps} />;
    </MoralisProvider>
  );
}

export default MyApp;
