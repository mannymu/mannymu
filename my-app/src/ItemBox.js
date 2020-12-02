import React,{Component} from "react";

import { Image,Button } from 'antd';

import defaultImg from "./img/default.png"

export default class ItemBox extends Component{
    onClick=()=>{
        this.props.remove(this.props.index);
    }
    render(){
        let data = this.props.data
        return (
            <li>
                <Image
                    src={data.src}
                    preview={false}
                    fallback={defaultImg}
                />
                <p style={{marginBottom:0}}>{data.name}</p>
                <div className="operate">
                    <Button size="small" onClick={this.onClick}>删除</Button>
                </div>
            </li>
        )
    }
}