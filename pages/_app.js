import "../styles/globals.scss";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APPID}
    >
      <Component {...pageProps} />;
    </MoralisProvider>
  );
}

export default MyApp;
