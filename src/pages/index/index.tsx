import { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import Tabbar from '../../components/tabbar/index'
import Menu from './menu'
import Request  from '../../utils/request'

const Page: FC = () => {
    const [active, setActive] = useState(true)
    // 面板数据
    const [panel] = useState({
        yesterday: { order: 20, tur: 10.05 },
        today: { order: 30, tur: 2.14 },
    })

    useEffect((): void => {
        console.log('请求数据', active)
        Request('/topics').then(res=>{
            console.log('222wwewe2',res.data)
        })
    }, [active])
    /*
     * 面板数据
     * 昨日今日数据切换
     * */
    const toDay = () => {
        let data: { order: number; tur: number }
        if (active) {
            data = panel.today
        } else {
            data = panel.yesterday
        }
        return (
            <View className="panel_data">
                <View className="order_num">
                    <View className="order_num_title">开单数(笔)</View>
                    <View className="order_num_value">{data.order}</View>
                </View>
                <View className="turnover">
                    <View className="turnover_title">营业额(元)</View>
                    <View className="turnover_value">{data.tur}</View>
                </View>
            </View>
        )
    }

    return (
        <View className="home">
            <View className="home_header_box">
                <View className="home_header">我是头部标签</View>
                <View className="panel_box">
                    <View className="panel_date">
                        <View
                            className={[
                                'yesterday',
                                !active ? 'active' : '',
                            ].join(' ')}
                            onClick={() => setActive(false)}
                        >
                            昨日
                        </View>
                        <View
                            className={['today', active ? 'active' : ''].join(
                                ' '
                            )}
                            onClick={() => setActive(true)}
                        >
                            今日
                        </View>
                    </View>
                    {toDay()}
                </View>
            </View>
            <Menu panel={panel} />
            <Tabbar active="首页" />
        </View>
    )
}
export default Page
