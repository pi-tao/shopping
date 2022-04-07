//对于axios进行二次封装
//引入axios
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// start方法代表进度条开始
// done代表进度条结束
// 引入进度条样式
import "nprogress/nprogress.css";

//利用axios对象的方法create，创建一个axios实例
const mockAjax = axios.create({
  // 配置对象
  baseURL: "/mock",
  timeout: 5000,
});
// 请求拦截器:可以在发送请求之前检测到，并在发送前做一些事情
mockAjax.interceptors.request.use((config) => {
  // config是配置对象，对象里面有一个属性很重要，headers请求头
  nprogress.start();
  return config;
});
// 响应拦截器
mockAjax.interceptors.response.use(
  // 成功的回调，服务器响应数据回来后能够检测到，可以做一些事情
  (res) => {
    nprogress.done();
    return res.data;
  },
  (err) => {
    //响应失败的回调
    console.log(err);
  }
);

// 对外暴露
export default mockAjax;
