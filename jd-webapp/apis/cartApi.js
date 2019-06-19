import api from "../common/api"
import {CARTURL} from "../common/URLs"


export default {

    getCartInfo(cb){
      api.get(CARTURL,cb)
    }

}
