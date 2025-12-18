'use client'

import { useEffect, useState } from 'react'

interface RotatingHeadingsProps {
  headings: string[]
  className?: string
}

const RotatingHeadings = ({
  headings,
  className = '',
}: RotatingHeadingsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headings.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [headings.length])

  return (
    <div className={`statistics__content--header ${className}`}>
      {headings.map((heading, index) => (
        <div
          key={index}
          className={`statistics__heading ${
            index === activeIndex ? 'statistics__heading--active' : ''
          }`}
        >
          {heading}
        </div>
      ))}
    </div>
  )
}

export default RotatingHeadings
