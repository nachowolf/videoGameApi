-- select 
-- titles.title,
-- genres.genre,
-- platforms.platform,
-- ages.age,
-- releases.release,
-- developers.developer
-- from games
-- inner join titles
-- on games.titleid = titles.titleid
-- inner join genres
-- on games.genreid = genres.genreid
-- inner join platforms
-- on games.platformid = platforms.platformid
-- inner join ages
-- on games.ageid = ages.ageid
-- inner join releases
-- on games.releaseid = releases.releaseid
-- inner join developers
-- on games.developerid = developers.developerid
-- order by titles.title asc;

-- select platforms.platform from platforms order by platforms.platform asc;

select count(*) from games;