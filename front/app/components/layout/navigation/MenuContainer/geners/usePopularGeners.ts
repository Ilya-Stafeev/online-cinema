import { GenreService } from "@/services/genre.services"
import { useQuery } from "react-query"
import { IMenuItem } from "../menu.interface"
import { getGenreUrl } from "@/configs/url.config"

export const usePopularGenres = () => {
    const queryData = useQuery(
		'popular genres menu',
		() => GenreService.getPopularGenres(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						})
					)
					.splice(0, 4),
		}
	)

	return queryData
}