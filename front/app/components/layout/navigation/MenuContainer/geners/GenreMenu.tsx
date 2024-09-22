import React, { FC } from 'react'
import { usePopularGenres } from './usePopularGeners'
import Menu from '../Menu'


export const GenreMenu: FC = () => {
  const { data, isLoading } = usePopularGenres() 
  
  return (
    isLoading ? (
      <div className='mx-11 mb-6'>Loading...</div>
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