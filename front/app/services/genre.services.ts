import { getGenresUrl } from "@/configs/api.config"
import { IGenre } from "@/shared/types/movie.types"
import { axiosClassic } from "api/interceptor"

export const GenreService = {
    async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

    async getPopularGenres(limit: number = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(`/popular`), {
			params: {
				limit,
			},
		})
	},
}