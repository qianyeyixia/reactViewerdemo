/*
 * @Author: your name
 * @Date: 2020-11-12 15:03:56
 * @LastEditTime: 2020-11-26 13:47:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactViewer\src\routes\rviewer.js
 */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react"
import {RViewer, RViewerTrigger} from "react-viewerjs"
import {connect} from "dva"

class Rviewer extends Component {
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
		}
	}


	render() {
		const { data } = this.state
		return (
			<div>
      1231
				<RViewer imageUrls={data}>
					<ul>
						{
							data && data.map((pic, index) => (
								<li key={pic} style={{marginBottom: "20px"}}>
									<span>image {index + 1}</span>
									<RViewerTrigger index={index}>
										<img src={pic} alt={pic} style={{width: "50px", verticalAlign: "middle"}}/>
									</RViewerTrigger>
								</li>
							))
						}
					</ul>
				</RViewer>
				{/*这里需要设置index值，告知触发图片预览该显示哪张图片*/}
			</div>
		)
	}
}

const modelPorps = ({example}) => ({example})

export default connect(modelPorps)(Rviewer)

