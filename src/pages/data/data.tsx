import { FC } from 'react'
import { View } from '@tarojs/components'
import Tabbar from '../../components/tabbar'
import Header from './header'
import Board from './board'
import {useSelector, useDispatch} from 'react-redux'
import './data.scss'
const Data: FC = () => {
    let name = useSelector((state:{dj:any}) => state.dj.djList)
    // const changName = ();

    console.log(name)
    console.log(useDispatch()({type:'GETD',info:{name:'张三'}}))
    console.log(name)
    return (
        <View className="data">
            <Header />
            <Board />

            <Tabbar active="数据" />
        </View>
    )
}
export default Data
