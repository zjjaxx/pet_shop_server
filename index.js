const Koa=require("koa")
const path=require("path")
const app=new Koa()

app.use(require("koa-static")(path.resolve(__dirname,"./public/dist")))

app.listen(3000,()=>{
    console.log("koa start listen")
})