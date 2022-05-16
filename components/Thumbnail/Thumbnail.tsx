import React from 'react'
import Image from 'next/image'
import { Movie } from '../../typings'

interface Props {
  film: Movie

  //   * Using Firebase ↓
  //   film: Movie | DocumentData
}

const Thumbnail = ({ film }: Props) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className="transit relative h-28 min-w-[11.25rem] cursor-pointer rounded-lg md:h-36 md:min-w-[16rem]">
      <div className="peer absolute top-0 left-0 bottom-0 right-0 bg-transparent">
        <Image
          src={`${baseUrl}${film.backdrop_path || film.poster_path}`}
          className="transit rounded object-cover hover:scale-105 md:rounded-lg"
          layout="fill"
          alt={film.name}
          title={film.title}
        />
      </div>
      <div className='peer-hover:opacity-90 pointer-events-none absolute bottom-4 left-2 z-50 transit opacity-0'>
		  <h1 className="text-xs font-semibold text-white sm:text-sm leading-none">
			{film.title || film.name}
		  </h1>
		  <span className='text-xs font-nuno leading-none'>
			  {film.overview.slice(0, 32) + "..."}
		  </span>
	  </div>
    </div>
  )
}

export default Thumbnail
