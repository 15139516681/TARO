import { FC, useState } from "react"
import { View, Image, Input } from "@tarojs/components"
import "./home.scss"
import ColumnBox from "./columnBox"

const Home: FC = () => {
  // 搜素框的值
  const [search, searchHandle] = useState("")
  return (
    <View className="node_home">
      <View className="header_box">
        <View className="header_image">
          <Image
            src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
            className="header_icon"
          ></Image>
        </View>
        <View className="header_search">
          <Input
            value={search}
            placeholder="请输入搜索内容"
            className="search_input"
            onInput={(e) => searchHandle(e.detail.value)}
          ></Input>
        </View>
        <View className="tabs_box">
          <View className="single_tab">首页</View>
          <View className="single_tab">新手入门</View>
          <View className="single_tab">API</View>
          <View className="single_tab">关于</View>
          <View className="single_tab">注册</View>
        </View>
      </View>
      <ColumnBox />
    </View>
  )
}
export default Home
