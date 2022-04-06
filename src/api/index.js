// 当前模块用于统一管理API接口
// 引入axios
import requests from "./request";

// 三级联动接口
// /api/product/getBaseCategoryList    get   无参数

// export const reqCategoryList = () => {
//   // 发送请求:axios发送请求返回的是promise对象
//   return requests({ url: "/product/getBaseCategoryList", method: "get" });
// };
export const reqCategoryList = () =>
  requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
