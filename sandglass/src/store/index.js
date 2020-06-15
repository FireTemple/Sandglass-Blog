import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    // Home页面幻灯片的图片
    ImgUrl:[
      'assets/img/img-1.jpg',
      'assets/img/img-2.jpg',
      'assets/img/img-3.jpg',
      'assets/img/img-2.jpg',
    ]
  }
});

export default store;
