


export default {


    get(url,cb){
        fetch(url).then(res=>{
            res.json().then(cb)
        })
    }
}
