import { FC } from "react"
import { View } from "@tarojs/components"
import Tabbar from "../../components/tabbar"
import Header from "./header"
import Board from "./board"
import "./data.scss"

const Data: FC = () => {
  return (
    <View className="data">
      <Header />
      <Board />

      <Tabbar active="数据" />
    </View>
  )
}
export default Data
