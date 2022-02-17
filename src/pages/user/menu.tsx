import { View, Image } from '@tarojs/components'

const Menu = () => {
    const M = [
        {
            title: '门店设置',
            img: require('@/assets/image/user/shop.png'),
            router: '',
        },
        {
            title: '设备设置',
            img: require('@/assets/image/user/equipment.png'),
            router: '',
        },
        {
            title: '商户信息',
            img: require('@/assets/image/user/commercial.png'),
            router: '',
        },
        {
            title: '扫码设置',
            img: require('@/assets/image/user/scan.png'),
            router: '',
        },
        {
            title: '店员设置',
            img: require('@/assets/image/user/clerk.png'),
            router: '',
        },
        {
            title: '版本检测',
            img: require('@/assets/image/user/versions.png'),
            router: '',
        },
    ]

    return (
        <View className='menu_box'>
            <View className='menu_title'>通用设置</View>
            <View className='menu_list'>
                {M.map((item: { title: string; img: any; router: string }) => {
                    return (
                        <View className='menu_list_single' key={item.title}>
                            <Image className='menu_list_img' src={item.img} />
                            <View className='menu_list_single_title'>{item.title}</View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
export default Menu
