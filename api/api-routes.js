module.exports = function(methods){

async function home(req, res, next){
    try{
        res.render('home')
    }
    catch(err){
        console.error(err)
    }
}

    async function routes(req, res, next){
        try{
            res.json({
                status: "Success",
                data:'Hello World'
            })
        }
        catch(err){
            console.error(err)
            res.json({
                status:"Failed",
                error:err
            });
    }
}

    async function allGames(req, res, next){
        try{
            let games = await methods.allGames();
            res.json(
                {
                status: "Success",
                data : games
                }
            );
        }
        catch(err){
            console.error(err)
            res.json({
                status:"Failed",
                error:err
            });
        }
    }

    async function allPlatforms(req, res, next){
        try{
            let plats = await methods.allPlatforms();
            console.log(plats)
            res.json(
                {
                status: "Success",
                data: plats
                }
            );
        }
        catch(err){
            console.error(err)
            res.json({
                status:"Failed",
                error:err
            });
        }
    }

    return{
        allGames,
        routes,
        home,
        allPlatforms
    }
}