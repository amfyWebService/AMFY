export class DefaultController{
    static index(req, res,next){
        res.send('Server is up');
    }
}