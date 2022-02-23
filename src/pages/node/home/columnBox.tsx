import { FC, useEffect, useState } from "react"
import { View, Text, Image } from "@tarojs/components"
import "./home.scss"
import Request from "../../../utils/request"

const ColumnBox: FC = () => {
  const tagList = [
    {
      label: "全部",
      value: "all",
    },
    {
      label: "精华",
      value: "good",
    },
    {
      label: "分享",
      value: "share",
    },
    {
      label: "问答",
      value: "ask",
    },
    {
      label: "招聘",
      value: "job",
    },
    {
      label: "客户",
      value: "dev",
    },
  ]
  // 声明数组渲染
  const [list, cutList] = useState([])

  const [isTag, selectTag] = useState("all")

  useEffect(() => {
    Request(`/topics?tab=${isTag}`).then((res: any) => {
      cutList(res.data)
    })
  }, [isTag])

  return (
    <View className="column_box">
      <View className="header_nav">
        {tagList.map((item: { label: string; value: string }): any => {
          return (
            <View
              className={[
                "single_tag",
                isTag == item.value ? " check" : "",
              ].join("")}
              onClick={() => selectTag(item.value)}
              key={item.value}
            >
              {item.label}
            </View>
          )
        })}
      </View>
      <View className="content_box">
        {list.map((item: any) => {
          return (
            <View className="single_journalism" key={item.id}>
              <View className="journalism_left">
                <Image
                  src={item.author.avatar_url}
                  className="journalism_left_image"
                ></Image>
              </View>
              <View className="journalism_middle">
                <Text className="hot_tags">置顶</Text>
                <Text className="journalism_content">{item.title}</Text>
              </View>
              <View className="journalism_right">{item.reply_count}小时前</View>
            </View>
          )
        })}
      </View>
    </View>
  )
}
export default ColumnBox
