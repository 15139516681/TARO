import { useState, forwardRef } from "react"
import { View, Image } from "@tarojs/components"
import "./index.scss"

type Props = {
  panel: {}
}
const MenuRef: any = (props: Props) => {
  const toRoute = (data: string) => {
    console.log(props)
    switch (data) {
      case "开单":
        console.log(1111)
        break
    }
  }

  const [menuList] = useState([
    { name: "开单", image: require("@/assets/image/home/menu1.png") },
    { name: "会员", image: require("@/assets/image/home/menu2.png") },
    { name: "商品", image: require("@/assets/image/home/menu3.png") },
    { name: "仓储管理", image: require("@/assets/image/home/menu4.png") },
    { name: "退换货", image: require("@/assets/image/home/menu6.png") },
    { name: "商品拆分", image: require("@/assets/image/home/menu6.png") },
    { name: "营销活动", image: require("@/assets/image/home/menu7.png") },
  ])

  /*
   * 单个模块Dom
   * */
  const menuSingle = () => {
    return menuList.map((item: { name: string; image: string }): any => {
      return (
        <View
          onClick={() => {
            toRoute(item.name)
          }}
          className="single_menu"
          key={item.name}
        >
          <Image className="menu_icon" src={item.image} />
          <View className="menu_name">开单</View>
        </View>
      )
    })
  }
  return (
    <View className="menu">
      <View className="menu_content">{menuSingle()}</View>
    </View>
  )
}
// const Menu = forwardRef(MenuRef)
export default MenuRef
