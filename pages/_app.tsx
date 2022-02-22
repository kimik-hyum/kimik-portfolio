import "../styles/globals.css";
import type { AppProps } from "next/app";
import Wrap from "../src/layout/Wrap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrap>
      <Component {...pageProps} />
    </Wrap>
  );
}
export default MyApp;
