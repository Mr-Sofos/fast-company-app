import React from 'react'
const pluralize = require('numeralize-ru').pluralize

const SearchusersCount = ({usersCount}) => {
  const peoples = pluralize(
    usersCount.length,
    'человек',
    'человека',
    'человека'
  )
  const party = pluralize(usersCount.length, 'тусанет', 'тусанут', 'тусанут')

  return (
    <span className='bg-primary p-1 m-1 rounded text-white'>
      {usersCount} {peoples} {party} с тобой сегодня
    </span>
  )
}

export default SearchusersCount
