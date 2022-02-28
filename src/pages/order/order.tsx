import { FC } from "react"
import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"
import Tabbar from "../../components/tabbar"
import "./order.scss"

const Order: FC = () => {
  const goNode = (): void => {
    Taro.navigateTo({ url: "pages/node/home/home" })
  }

  return (
    <View className="order_box">
      <View className="order_header_box" onClick={goNode}>
        大转盘
      </View>
      <View className="order_turntable">
        <View className="turntable_prize"></View>
      </View>
      {/* <Button onClick={basics}>点击按钮</Button> */}
      <Tabbar active="订单" />
    </View>
  )
}
export default Order
