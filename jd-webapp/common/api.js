export default {


    get(url, cb) {
        fetch(url).then(res => {
            res.json().then(cb)
        })
    },

    async asyncGet(url) {
        let res = await fetch(url, {
            method:"GET",
            credentials: "include",
            mode: "cors",
        });


        return await res.json()
    },

    async asyncPost(url,params){
        let res = await fetch(url, {
            method:"POST",
            credentials: "include",
            mode: "cors",

        });

        return await res.json()
    }
}
