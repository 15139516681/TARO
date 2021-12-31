import { FC, useState } from 'react';
import { View } from '@tarojs/components';
import './index.scss';

const Page:FC = () => {
  const [count, setCount] = useState(0);
     const getName = (data:any) => {
       setCount(data)
     }

    
     const toDay = (data: any) => {
       return(
         <View className='panel_data'>
       <View className='order_num'>
         <View className='order_num_title'>开单数(笔)</View>
         <View className='order_num_value'>20</View>
       </View>
           <View className='turnover'>
             <View className='turnover_title'>营业额(元)</View>
             <View className='turnover_value'>0</View>
           </View>
         </View>
       )
     }

  return(
    <View className='home'>
      <View className='header'>
        我是头部标签
      </View>
      <View className='panel_box'>
        <View className='panel_date'>
          <View className='yesterday'>昨日</View>
          <View className='today'>今日</View>
        </View>
        {toDay()}
      </View>
    </View>
  )
}
 export default Page;
