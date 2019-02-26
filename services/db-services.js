const IDServices = require('./requests/db-id-services.js');


module.exports = function (pool) {
    const getID = IDServices(pool);

    /*SELECT ALL GAMES ON DATABASE*/
    async function allGames() {
        try {
            let games = await pool.query(`
            select 
            titles.title,
            genres.genre,
            platforms.platform,
            ages.age,
            date(release),
            developers.developer
            from games
            inner join titles
            on games.titleid = titles.titleid
            inner join genres
            on games.genreid = genres.genreid
            inner join platforms
            on games.platformid = platforms.platformid
            inner join ages
            on games.ageid = ages.ageid
            inner join releases
            on games.releaseid = releases.releaseid
            inner join developers
            on games.developerid = developers.developerid
            order by titles.title asc;`)
            return games.rows
        }
        catch (err) {
            console.error(err)
        }
    }

    async function allGamesTotal() {
        try {
            let gamesTotal = await pool.query(`select count(*) from games`)
            return gamesTotal.rows
        }
        catch (err) {
            console.error(err)
        }
    }

    async function allPlatforms() {
        try {
            let platform = await pool.query(`select platform from platforms order by platform asc`)
            return platform.rows
        }
        catch (err) {
            console.error(err)
        }
    }

    async function allGamesForPlatform(platforms) {
        try {
            let paired = []
            
            for (let platform of platforms) {
                let platformID = await getID.platform(platform);
                let games = await pool.query(`select count(*) from games where platformid = $1`, [platformID]);
                let gamesAmount = games.rows.map(inputs => inputs.count);
                paired.push({"Platform" : platform,
                             "Total Games" : gamesAmount[0]})
            }
            return paired
        }
        catch (err) {
            console.error(err)
        }
    }

    async function addGame(title, genre, platform, rating, age, release, developer){
     try{
         
     }
     catch(err){
         console.error(err)
     }
    }

    return {
        allGames,
        allGamesTotal,
        allPlatforms,
        allGamesForPlatform
    }
}