import { getMoviesUrl } from "@/configs/api.config"
import { IMovie } from "@/shared/types/movie.types"
import { axiosClassic } from "api/interceptor"

export const MovieService = {
    async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
}