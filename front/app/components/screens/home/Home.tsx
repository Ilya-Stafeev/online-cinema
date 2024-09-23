import { FC } from 'react'
import { IHome } from './home.interface'
import { Meta } from '@/utils/meta'
import Heading from '@/components/ui/heading/Heading'

export const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	)
}
