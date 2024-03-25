import React from 'react'
import { LinkedIn } from './Icons'
import Link from 'next/link'
import Image from 'next/image'

const ReviewCard = ({ review }: any) => {
  return (
    <div className="bg-white p-6 md:rounded-2xl rounded-lg shadow-lg">
      <div className="flex items-center mb-3 gap-2">
        {!!review.image && (
          <Image
            src={review.image}
            alt={review.name}
            height={40}
            width={40}
            className="rounded-full"
          />
        )}

        <div className="flex-grow">
          <p className="mb-1">{review.name}</p>
          <p className="text-contentLighter leading-tight">{review.role}</p>
        </div>

        {!!review.link && (
          <Link
            href={review.link}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:opacity-70"
          >
            <LinkedIn className="w-6 h-6" />
          </Link>
        )}
      </div>

      <p>{review.message}</p>
    </div>
  )
}

export default ReviewCard
