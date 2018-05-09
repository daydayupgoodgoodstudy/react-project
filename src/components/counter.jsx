import React from 'react'

export const Counter = ({ value, onIncrement, onDecrement }) => (
    <div className="aaa">
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )

  
  export const Input_label = ({ value, onget, onedit }) => (
    <div>
      <h1>{value}</h1>
      <button onClick={onget}>获取</button>
      <input type="text"/>
      <button onClick={onedit}>修改</button>
    </div>
  )