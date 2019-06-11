

<script>
    import Hello from "./components/Hello"
    export default {
        name: "app",
        data(){
          return {
              title:"hello vue jsx app"
          }
        },
        render(){
            return <div><h1>{this.title}</h1><Hello/></div>
        }
    }
</script>

<style scoped>

</style>
