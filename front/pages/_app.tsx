import { MainProviders } from 'providers/MainProviders'
import '@/assets/styles/globals.scss'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return ( 
		<MainProviders>
			<Component {...pageProps} />
		</MainProviders>		
	)
}

export default MyApp
