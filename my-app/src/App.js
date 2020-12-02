import React,{Component} from "react";

import ItemBox from "./ItemBox";
import './App.css';

import Img1 from "./img/1.jpg";
import Img2 from "./img/2.jpg";
import Img3 from "./img/3.jpg";
import Img4 from "./img/4.jpg";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      list:[
        {
          src: Img1,
          name:"图片1"
        },
        {
          src: Img2,
          name:"图片2"
        },
        {
          src: "http://xxxx",
          name:"默认图"
        },
        {
          src: Img3,
          name:"图片3"
        },
        {
          src: Img4,
          name:"图片4"
        }
      ]
    }
  }
  remove=(index)=>{
    let list = this.state.list.slice(0);
    list.splice(index,1);
    this.setState({
      list
    })

  }
  render(){
    let list = this.state.list;
    return (
      <div className="App">
        <ul>
          {
            list.map((item,index)=>{
              return (
                <ItemBox key={index} data={item} index={index} remove={this.remove} />
              )
            })
          }
        </ul>
      </div>
    )
  }
};
