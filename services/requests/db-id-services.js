module.exports = function(pool){

    async function platform (input){
        try{
            let ID = await pool.query(`select platformid from platforms where platform = $1`, [input]);
            let platformID = ID.rows
            let id = platformID.map(id => id.platformid);            
            return id[0]
        }
        catch(err){
            console.error
        }
    }

    module.exports = function(pool){
        async function newTitle(title){
            try{
                let add = (`insert into titles (title) values ('The Witcher 3')`, []);
            }
            catch(err){
                console.error(err)
            }
        }
    
        async function newGenre(){
            try{}
            catch(err){
                console.error(err)
            }
        }
    
        async function newPlatform(){
            try{}
            catch(err){
                console.error(err)
            }
        }
    
        async function newRelease(){
            try{}
            catch(err){
                console.error(err)
            }
        }
    
        async function newDeveloper(){
            try{}
            catch(err){
                console.error(err)
            }
        }
    
        async function newGame(){
            try{}
            catch(err){
                console.error(err)
            }
        }
    
        return{
            newTitle,
            newGenre,
            newPlatform,
            newRelease,
            newDeveloper,
            newGame
        }
    }

    return{
        platform
    }
}