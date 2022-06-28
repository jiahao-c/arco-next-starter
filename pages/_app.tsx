import type { AppProps } from 'next/app'
import '../style/global.less';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
