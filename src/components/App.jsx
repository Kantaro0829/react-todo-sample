import React, { Component } from "react";
import Form from './Form';
import List from  './List';

// 追記
import ApiFetch from './ApiFetch';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
    //定義したhandleAdd関数内でthisを使用出来るようにする為にconstructor内に定義
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

   // データ保存  子コンポーネントから呼び出すOnclickなどで
  handleAdd(e){

    //入力された内容  
    console.log(e.target.title.value);
    e.preventDefault(); //リダイレクト防止
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.push({title: e.target.title.value}); // まだ保存されていない
    // setStateを使ってstateを上書き
    this.setState({todo: this.state.todo}); // 保存完了
    // inputのvalueを空に
    e.target.title.value = '';
    
  }

  // データ削除　　子コンポーネントから呼び出すOnclickなどで
  handleRemove(i){
    // todo配列からi番目から1つ目のデータを除外
    this.state.todo.splice(i,1);
    // setStateでtodo配列を上書き
    this.setState({todo: this.state.todo});
  }


  render() {

    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <Form handleAdd={this.handleAdd}/>
        <div className="siimple-rule"></div>
        <List todos={this.state.todo} handleRemove={this.handleRemove}/>
        <ApiFetch />
      </div>
    );

  }
}