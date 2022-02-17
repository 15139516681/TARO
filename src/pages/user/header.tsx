import {View, Text} from '@tarojs/components';
import  {FC} from 'react';

const Header: FC<{name:string}> = (props) => {
    return(
        <View className='user_header'>
           <View className='header_title'>
               <View className='left_title_box'>
                   <Text className='shop_name'>{props.name}</Text>
                   <Text className='shop_status'>
                       <Text className='at-icon at-icon-clock' />
                       营业中</Text>
               </View>
               <View className='right_title_box'>
                  <View className='at-icon at-icon-share'/>
                   <View className='at-icon at-icon-settings'/>
               </View>
           </View>
            <View className='nav_box'>
            <View className='out_stand'>
                <View className='out_stand_left'>
                    <View className='out_stand_title'>待结货款 {'>'} </View>
                    <View className='out_stand_price'>
                        ￥{681.50}
                    </View>
                </View>
               <View  className='out_stand_right'>
                <Text className='at-icon at-icon-credit-card' /> 抵扣金￥22842.23 {'>'}
               </View>
            </View>
                <View className='payment'>
                    <View className='payment_left'>
                        <View className='payment_title'>核销货款 <Text className='at-icon at-icon-help' /></View>
                        <View className='payment_num'>￥602.30</View>
                    </View>
                    <View className='payment_left'>
                        <View className='payment_title'>核销货款 <Text className='at-icon at-icon-help' /></View>
                        <View className='payment_num'>￥602.30</View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export  default  Header;
