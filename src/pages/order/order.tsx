import { FC,useState,useMemo } from 'react'
import { View, Button } from '@tarojs/components'
import Tabbar from '../../components/tabbar'
import './order.scss'
import { setName,testObj } from './utils'
const Order: FC = () => {
   const [testData,setDatas]=  useState<string>('李四');
   const [value,setValue] = useState(1);
    const basics = (): void => {
        setDatas(setName('张三'))
       let m = testObj.saySome()
        // 函数声明类型
        const combine: x = (arr1, arr2) => {
            return arr1.concat(arr2)
        }
        type x = <T>(x: T[], y: T[]) => T[]
        combine<string | number>([1, 2], [222])
    }

    const name1:any = useMemo(()=>{
        return testData + value
    },[testData,value])


    return (
        <View className="data">
            <Button onClick={() => basics()}>点击按钮</Button>
            <View>{name1}</View>
            <Tabbar active="订单" />
        </View>
    )
}
export default Order
