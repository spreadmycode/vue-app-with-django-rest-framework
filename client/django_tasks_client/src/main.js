import Vue from "vue";
import App from "./App.vue";

// import axios
import axios from "axios";

// import moment
import moment from "moment";

// set a prototype for http
Vue.prototype.$http = axios;

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY hh:mm");
  }
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
