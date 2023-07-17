
const NotFound=(req,res)=>{
    return res.status(404).json({"mgs":"route does not exits"})
}

module.exports=NotFound