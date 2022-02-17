import Taro, { request } from '@tarojs/taro'

const Request: any = (url: string, data = {}, type) => {
    const API = `https://cnodejs.org/api/v1${url}`
    return new Promise((resolve, reject) => {
        request({
            url: API,
            data,
            dataType: 'json',
            method: type ?? 'GET',
        }).then((res) => {
            switch (res.statusCode) {
                case 200:
                    return resolve(res.data)
                default:
                    Taro.showToast({
                        title: '网络错误',
                        icon: 'success',
                    })
                    return reject(res.data)
            }
        })
    })
}
export default Request
