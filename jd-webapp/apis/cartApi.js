import api from "../common/api"
import {CARTURL} from "../common/URLs"


export default {

    async getCartInfo(){
      return await api.asyncGet(CARTURL)
    },

    async  getProducts() {
       let res = await fetch(CARTURL);
       let data = await res.json()
       return data;
    }

}
