import Mock from "mockjs";

// 引入banner数据和floor的数据
import banner from "./banner.json";
import floor from "./floor.json";

// mock数据，第一个参数是请求的地址，第二个参数是请求的数据的位置
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
