import React, { Component } from 'react';

let style = {
  maxWidth: '700px',
};

let bin = {
  cursor: 'pointer'
};

const List = (props) => (
  <ul className="siimple-list">
    {props.todos.map((todo, i) => {
        return <li key={i} className="siimple-list-item siimple--bg-white" style={style}>{todo.title} <span className="siimple-tag siimple-tag--error siimple-hover" style={bin} onClick={() => props.handleRemove(i)}>Delete</span></li>
    })};
      
    {/* 親コンポーネント(App.jsx)でtodosを渡したので、子コンポーネント(List.jsx)でpropsを使い受け取り、ループを回しています。
    この際にReactのルールでループで処理した要素には一意なKeyを指定する必要があります。なので、key={i}としています。 */}
  </ul>
);

export default List;