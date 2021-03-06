/*
 * @Author: your name
 * @Date: 2020-11-10 17:55:00
 * @LastEditTime: 2020-11-26 13:47:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactViewer\src\routes\IndexPage.js
 */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react"
import {connect} from "dva"

import ShowImg from "../components/Images"

class IndexPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				"http://img.s.youfenba.com/material_thumb/BYX6Mm67ba.jpg",
				"http://img.s.youfenba.com/material_thumb/8nzxJwpsPX.jpg",
				"http://img.s.youfenba.com/material_thumb/SaNktASjmp.jpg",
				"http://img.s.youfenba.com/material_thumb/cTma2FTPEC.jpg",
				"http://img.s.youfenba.com/material_thumb/KnNc6D4sGs.jpg"
			],
			showimgs: false, //必须字段控制弹框显示隐藏
			firstIndex: 0 //点击时默认下标
		}
	}

  showimg = (i) => {
  	this.setState({ showimgs: true, firstIndex: i })
  	console.log(this.state.firstIndex)
  };

  toggleshow = () => {
  	this.setState({ showimgs: false })
  };
  render() {
  	const { firstIndex, showimgs, data } = this.state

  	return (
  		<div>
  			<div className="custcontent">
  				{/*图片正常的列表显示 */}
  				<div className="showimg">
  					{data.map((item, i) => (
  						<img
  							style={{ width: "200px", height: "100px" }}
  							alt={item}
  							src={item}
  							onClick={() => this.showimg(i)}
  							key={item}
  						/>
  					))}
  				</div>
  				{/* 引入的image组件 */}
  				<ShowImg
  					data={data}
  					firstIndex={firstIndex}
  					showimgs={showimgs}
  					toggleshow={this.toggleshow}
  				/>
  			</div>
  		</div>
  	)
  }
}

const modelPorps = ({example}) => ({example})

export default connect(modelPorps)(IndexPage)

