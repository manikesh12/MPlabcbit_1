const m=require('mongoose')

const s1=new m.Schema(
{
name:
{
    type:String,
    required:true
},
tech:
{
    type:String,
    required:true
},
section:
{
    type:String,
    required:true
}
})

module.exports = m.model('schema1',s1)