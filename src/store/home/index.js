import { reqGetCategoryList, reqGetBannerList } from "@/api";
// home模块小仓库
const state = {
  // state中数据默认初始值不能乱写，服务器返回对象，就写对象，返回数组就写数组【根据接口返回值定义】
  categoryList: [],
  bannerList: [],
};
const actions = {
  // 通过api里面的接口调用函数，向服务器发送请求，获取服务器数据
  async categoryList({ commit }) {
    let result = await reqGetCategoryList();
    if (result.code == 200) {
      commit("CATEGOTYLIST", result.data);
    }
  },
  // 获取首页轮播图
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
};
const mutations = {
  CATEGOTYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
};
const getters = {};

// 对外暴露store类的一个实例
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
