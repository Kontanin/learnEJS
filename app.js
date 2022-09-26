const express =require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

const user={
    firstName:'John',
    lastName:'Doe',
    admin:false
}
const post=[
    {title:'title 1',body:"body1"},
    {title:'title 2',body:"body2"},
    {title:'title3 ',body:"body3"}
]
app.get('/articles',(req,res)=>{
    res.render('pages/articles',{
        articles:post,

        
    })

})
app.get('/',(req,res)=>{
    res.render('pages/index',{ user:user,title:"home"})


})

app.listen(port,()=>{
    console.log(`Express server listening on ${port}`)
})