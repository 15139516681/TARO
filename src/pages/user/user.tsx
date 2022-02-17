import { FC } from 'react'
import { View} from '@tarojs/components'
import Tabbar from '../../components/tabbar'
import Header from './header'
import  Menu from './menu'
import './user.scss'

const User: FC = () => {
    return (
        <View className='user'>
            <Header name='电子烟旗舰店' />
            <Menu />
            <Tabbar active='我的' />
        </View>
    )
}
export default User
