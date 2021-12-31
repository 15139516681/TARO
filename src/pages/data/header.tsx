import  {FC} from 'react';
import  {View, Text} from "@tarojs/components"
const Header:FC =() => {
    return(
        <View className='header_box'>
            <View className='header_title'>数据看板</View>
            <View className='shop_condition'>
                <View className='shop_name'>门店概况</View>
                <View className='income_data'>
                    <View className='income_left'>
                        <View className='income_turnover'>营业额(元)</View>
                        <View className='income_turnover_num'>1210.02</View>
                        <View className='yesterday'><Text className='yesterday_name'>昨日</Text>1200.00</View>
                    </View>
                    <View className='income_right'>
                        <View className='income_turnover'>开单数(笔)</View>
                        <View className='income_turnover_num'>22</View>
                        <View className='yesterday'><Text className='yesterday_name'>昨日</Text>10</View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export  default  Header;
