import { FC } from "react"
import Taro from "@tarojs/taro"
import { View, Button } from "@tarojs/components"
import Tabbar from "../../components/tabbar"
import "./order.scss"
// import { setName,testObj } from './utils'

const Order: FC = () => {
  const basics = (): void => {
    Taro.navigateTo({ url: "pages/node/home/home" })
  }

  return (
    <View className="data">
      <Button onClick={basics}>点击按钮</Button>
      <Tabbar active="订单" />
    </View>
  )
}
export default Order
