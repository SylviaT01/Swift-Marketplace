import React from 'react'
import { Button } from './button'

export const NavItems = () => {

  return (
    <div className='flex items-center gap-5'>
        <Button text="Yelp for Business" classname="bg-transparent hover:bg-slate-50 py-1 px-2"/>
        <Button text="Write a Review" classname="bg-transparent hover:bg-slate-50 py-1 px-2" />
        <Button text="Log In" classname="bg-transparent border-2 hover:bg-slate-50 py-1 px-2"/>
        <Button text="Sign Up" classname="bg-red-600 text-slate-50 hover:bg-red-600/90 py-1 px-2"/>
    </div>
  )
}