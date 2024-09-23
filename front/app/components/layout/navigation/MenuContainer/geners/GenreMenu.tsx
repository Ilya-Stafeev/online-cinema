import React, { FC } from 'react'
import { usePopularGenres } from './usePopularGeners'
import Menu from '../Menu'
import { SkeletonLoader } from '@/components/ui/skeleton-loader/SkeletonLoader'


export const GenreMenu: FC = () => {
  const { data, isLoading } = usePopularGenres() 
  
  return (
    isLoading ? (
      <div className='mx-11 mb-6'>
        <SkeletonLoader count={5} className='h-7 mt-6'/>
      </div>
    ) : (
      <Menu
        menu={{
          title: 'Popular genres',
          items: data || [],
        }}
      />
    )
  )
}