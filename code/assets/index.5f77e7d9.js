import{d as e,b as o,r as i,o as t,c as a,a as l,w as n,F as r,e as s,f as m,H as d}from"./vendor.9d963d30.js";const p=e({name:"App",data:()=>({form:{zhihu:"https://zhuanlan.zhihu.com/p/77803705",bili:"https://www.bilibili.com/video/BV1sf4y1L7U6",taobao:"https://item.taobao.com/item.htm?id=646549343308",alipay:"https://openapi.alipay.com/gateway.do?timestamp=2013-01-01 08:08:08&method=alipay.mobile.public.qrcode.create&app_id=1228&sign_type=RSA2&sign=ERITJKEIJKJHKKKKKKKHJEREEEEEEEEEEE&version=1.0&biz_content="},currentLink:""}),methods:{onClick(){window.open(this.currentLink,"_self")},goVideo(){window.open("//www.webq.top/video/","_self")},generateQr(e){this.currentLink=this.form[e],o.toCanvas(this.$refs.qrcode,this.form[e],(e=>{e?this.$message.error(e):this.$message.success("生成成功")}))}}}),u=s("返回视频页面"),c=s("生成"),h=s("生成");p.render=function(e,o,s,m,d,p){const f=i("el-button"),b=i("el-input"),w=i("el-form-item"),g=i("el-form");return t(),a(r,null,[l(f,{type:"primary",onClick:e.goVideo,style:{"margin-bottom":"20px"}},{default:n((()=>[u])),_:1},8,["onClick"]),l(g,{modelValue:e.form,"onUpdate:modelValue":o[5]||(o[5]=o=>e.form=o),"label-position":"left"},{default:n((()=>[l(w,{label:"知乎网页"},{default:n((()=>[l(b,{modelValue:e.form.zhihu,"onUpdate:modelValue":o[1]||(o[1]=o=>e.form.zhihu=o),style:{width:"50vw","margin-right":"20px"}},null,8,["modelValue"]),l(f,{type:"primary",onClick:o[2]||(o[2]=o=>e.generateQr("zhihu"))},{default:n((()=>[c])),_:1})])),_:1}),l(w,{label:"B站视频"},{default:n((()=>[l(b,{modelValue:e.form.bili,"onUpdate:modelValue":o[3]||(o[3]=o=>e.form.bili=o),style:{width:"50vw","margin-right":"20px"}},null,8,["modelValue"]),l(f,{type:"primary",onClick:o[4]||(o[4]=o=>e.generateQr("bili"))},{default:n((()=>[h])),_:1})])),_:1})])),_:1},8,["modelValue"]),l("canvas",{ref:"qrcode",onClick:o[6]||(o[6]=(...o)=>e.onClick&&e.onClick(...o))},null,512)],64)};const f=m(p);f.use(d),f.mount("#app");