const Post=require('../model/postmodel.js');
exports.Post=( req, res) => {
    const title = req.body.title;
    const desc = req.body.desc;
    const photo = req.body.photo;
    const PostData = {
        title,
        desc,
        photo
    }

    const p = new Post(PostData);

    p.save()
           .then(() => res.json({
               msg:" post succesfully updated"
           }))
           .catch(err => res.status(400).json('Error: ' + err));
};
exports.Get=async (req,res)=>{
    const data=await Post.find();
    if(data){
        return res.status(200).json({
            Data:data,
        })
    }else{
        return res.status(404).json({
            error:"err"
        })
    }

}


