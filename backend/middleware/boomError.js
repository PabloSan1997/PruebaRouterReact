
function handleBoom(err, req, res, next){
    if(err.isBoom){
        const {statusCode, error, message}=err.output.payload;
        res.status(statusCode).json({statusCode, error, message});
    }else{
        next(err);
    }
}
module.exports={handleBoom};