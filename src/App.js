import React from 'react'
import FilterProvider from './state/filter/Provider'
import TodosProvider from './state/todos/Providerr'

function App() {
  return (
    <TodosProvider>
      <FilterProvider>
        <h1>Hello World!</h1>
      </FilterProvider>
    </TodosProvider>
  )
}

export default App
