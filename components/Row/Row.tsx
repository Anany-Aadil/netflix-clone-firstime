import React, { useRef, useState } from 'react'
import { Movie } from '../../typings'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import Thumbnail from '../Thumbnail/Thumbnail'

interface Props {
  //   * Using Firebase ↓
  //   category: Movie[] | DocumentData[]
  category: Movie[]
  title: string
}

const Row = ({ category, title }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (dir: string) => {
    setIsMoved(true)

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current


      const scrollTo =
        dir == 'left'
          ? scrollLeft - clientWidth / 1.5
          : scrollLeft + clientWidth / 1.5

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="my-4 h-40 space-y-0.5 md:space-y-2 lg:my-8">
      <h1 className="transit pointer-events-auto font-open text-sm font-semibold text-cgw hover:text-white md:text-xl">
        {title}
      </h1>
      <div className="group relative flex items-center">
        <HiOutlineChevronLeft
          onClick={() => handleClick('left')}
          className={`rowChevs left-2 ${!isMoved && 'hidden'}`}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2"
        >
          {category.map((film) => (
            <Thumbnail key={film.id} film={film} />
          ))}
        </div>
        <HiOutlineChevronRight
          onClick={() => handleClick('right')}
          className="rowChevs right-2"
        />
      </div>
    </div>
  )
}

export default Row
