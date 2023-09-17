import React from 'react'

export default function Title({ text }) {
  return (
    <h1 className=' text-center text-xl font-semibold font-mono '> {!text ? 'Title here ': text } </h1>
  )
}
