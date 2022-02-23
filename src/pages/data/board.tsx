import { FC } from "react"
import { Text, View } from "@tarojs/components"

const Board: FC = () => {
  return (
    <View className="board">
      <View className="board_box">
        <View className="board_top">
          <View className="board_top_left">
            <View className="board_title">支付客户</View>
            <View className="board_num">116</View>
            <View className="yesterday">
              <Text className="yesterday_name">昨日</Text>98
            </View>
          </View>
          <View className="board_top_right">
            <View className="board_title">新增客户</View>
            <View className="board_num">122</View>
            <View className="yesterday">
              <Text className="yesterday_name">昨日</Text>98
            </View>
          </View>
        </View>
        <View className="board_bottom">
          <View className="board_top_left">
            <View className="board_title">支付客户</View>
            <View className="board_num">116</View>
            <View className="yesterday">
              <Text className="yesterday_name">昨日</Text>98
            </View>
          </View>
          <View className="board_top_right">
            <View className="board_title">新增客户</View>
            <View className="board_num">122</View>
            <View className="yesterday">
              <Text className="yesterday_name">昨日</Text>98
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Board
