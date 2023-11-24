import { useState } from 'react';
import './index.css'

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(['ああああ', 'いいいい']);
  return (
    <>
      <div className='input-area'>
        <input placeholder="TODOを入力"></input>
        <button>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            )
          })
        }
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          <li>
            <div className='list-row'>
              <p className='todo-item'>TODOでした</p>
              <button>戻す</button>
            </div>
          </li>
          <li>
            <div className='list-row'>
              <p className='todo-item'>TODOでした</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

