import { FC } from "react"
import { Image, View } from "@tarojs/components"
import Taro from "@tarojs/taro"

import "./index.scss"

const Tabbar: FC<{ active: string }> = ({ active }) => {
  const toTab = (data: string) => {
    switch (data) {
      case "首页":
        Taro.redirectTo({ url: "pages/index/index" })
        break
      case "数据":
        Taro.redirectTo({ url: "pages/data/data" })
        break
      case "订单":
        Taro.redirectTo({ url: "pages/order/order" })
        break
      case "我的":
        Taro.redirectTo({ url: "pages/user/user" })
        break
    }
  }

  // tabbar组件
  const tabbarBox = () => {
    const data = [
      {
        title: "首页",
        icon: require("@/assets/image/tabbar/home.png"),
        iconA: require("@/assets/image/tabbar/homeA.png"),
      },
      {
        title: "数据",
        icon: require("@/assets/image/tabbar/data.png"),
        iconA: require("@/assets/image/tabbar/dataA.png"),
      },
      {
        title: "订单",
        icon: require("@/assets/image/tabbar/order.png"),
        iconA: require("@/assets/image/tabbar/orderA.png"),
      },
      {
        title: "我的",
        icon: require("@/assets/image/tabbar/user.png"),
        iconA: require("@/assets/image/tabbar/userA.png"),
      },
    ]
    return data.map((item: { title: string; icon: any; iconA: any }) => {
      return (
        <View
          className="tabbar_single_box"
          onClick={() => {
            toTab(item.title)
          }}
          key={item.title}
        >
          <View className="tabbar_single_image">
            <Image
              className="img"
              src={active === item.title ? item.iconA : item.icon}
            />
          </View>
          <View className="tabbar_single_name">{item.title}</View>
        </View>
      )
    })
  }

  return <View className="tabbar">{tabbarBox()}</View>
}
export default Tabbar
