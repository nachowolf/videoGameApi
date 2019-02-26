module.exports = function(service){

    async function allGames(){
        try{
            let games = await service.allGames()
            let gamesTotal = await service.allGamesTotal()
            let total = gamesTotal.map(input => input.count)
            return {"Total Games" : total, games}
        }
        catch(err){
            console.error(err)
        }
    }

    async function allPlatforms(){
        try{
            let allPlats = await service.allPlatforms()
            let platforms = allPlats.map(input => input.platform)
            let allPlatformsAndGames = await service.allGamesForPlatform(platforms)
            // console.log(platforms)
            return allPlatformsAndGames
        }
        catch(err){
            console.error(err)
        }
    }

    return{
        allGames,
        allPlatforms
    }
}