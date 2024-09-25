import { IMovie } from "@/shared/types/movie.types"
import { FC } from "react"
import styles from './MovieList.module.scss'
import { getGenreUrl, getMovieUrl } from "@/configs/url.config"
import Image from "next/image"
import Link from "next/link"
import { getGenresListEach } from "@/utils/movie/getGenresListEach"
import { MaterialIcon } from "@/components/ui/icons/MatetialIcon"

const MovieItem:FC<{movie: IMovie}> = ({ movie }) => {

    console.log(movie);
    
  return (
    <div className={styles.item}>
        <Link href={getMovieUrl(movie.slug)}>
            <Image
                width={65}
                height={97}
                src={movie.poster}
                alt={movie.title}
                draggable={false}
                priority
            />
        </Link>

        <div className={styles.info}>
            <div>
                <div className={styles.title}>
                    {movie.title}
                </div>
                <div className={styles.genres}>
                    {movie.genres.map((genre, index) => 
                        <Link key={genre._id} href={getGenreUrl(genre.slug)}>
                            {getGenresListEach(index, movie.genres.length, genre.name)}
                        </Link> )
                    }
                </div>
            </div>

            <div className={styles.rating}>
                <MaterialIcon name='MdStarRate'/>
                <span>{movie.rating.toFixed(1)}</span>
            </div>
        </div>
    </div>
  )
}

export default MovieItem