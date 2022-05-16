import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Movie } from '../../typings'
import { baseUrl } from '../../utils/constants'

import styles from './banner.module.css'

import { FaPlay } from 'react-icons/fa'
import { BsInfoSquare } from 'react-icons/bs'

interface Props {
  bannerMovie: Movie[]
}

const Banner = ({ bannerMovie }: Props) => {
  const [movie, setMovie] = useState<Movie | null>()

  let randomMovie = Math.floor(Math.random() * bannerMovie.length)

  useEffect(() => {
    setMovie(bannerMovie[randomMovie])
  }, [bannerMovie])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[75vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
          {movie?.title || movie?.name}
        </h1>
        <p className="mt-2 max-w-xs font-pops text-xs text-shadow-md sm:mt-4 md:max-w-lg md:text-lg lg:mt-6 lg:max-w-2xl lg:text-xl">
          {
            movie?.overview
            /* movie?.overview.length <= 200
            ? movie?.overview
            : movie?.overview.slice(0, 200) + '...' */
          }
        </p>
      </div>

      <div className="flex space-x-3">
        <button className="buttonBanner bg-white text-black">
          <FaPlay className="h-4 w-4 md:h-7 md:w-7" />
          Play
        </button>
        <button className="buttonBanner bg-gray-500/70 text-white">
          Info
          <BsInfoSquare className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  )
}

export default Banner
