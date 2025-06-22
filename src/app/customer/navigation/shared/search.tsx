import React from 'react'

function SearchComponent() {
  return (
    <div className='"flex items-center justify-center h-[45px] px-3 py-2 border
                     rounded-lg shadow-sm border-[var(--border-color)]'>
      <input type="text" 
    placeholder="Search..." 
    className="flex-grow outline-none lg:w-[300px] placeholder-[var(--text-secondary)] text-sm"/>
      <span className='ml-2 px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 
                        border border-gray-300 rounded'>⌘K</span>
                    </div>
  )
}

export default SearchComponent
