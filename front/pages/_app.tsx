import { MainProviders } from 'providers/MainProviders'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return ( 
		<MainProviders>
			<Component {...pageProps} />
		</MainProviders>		
	)
}

export default MyApp
