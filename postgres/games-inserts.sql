/*INSERT INTO TITLES*/
/*insert into titles (title) values ("The Witcher 3")*/

/*INSERT INTO GENRES*/
/*insert into genres (genre) values ('Action Role-playing Game')*/

/*INSERT INTO PLATFORMS*/
/*insert into platforms (platform) values ('Playstation 4')
insert into platforms (platform) values ('pc')
insert into platforms (platform) values ('mobile')*/

/*INSERT INTO RATINGS*/
/*insert into ratings (icon, rating) values ("card", "Includes in-game purchases.")
insert into ratings (icon, rating) values ("dice", "May encourage or teach gambling.")
insert into ratings (icon, rating) values ("spider", "May be frightening to younger children.")
insert into ratings (icon, rating) values ("needle", "Contains the use or glamorisation of alcohol and / or drugs.")
insert into ratings (icon, rating) values ("gender", "Contontains depictions of nudity and / or references to sexual behaviour")
insert into ratings (icon, rating) values ("ethnic groups", "Contains depictions of ethnic, religious, nationalistic or other stereotypes that could encourage hatred.")
insert into ratings (icon, rating) values ("@*!", "Contains bad and / or  offensive language.")
insert into ratings (icon, rating) values ("fist", "Contains depictions of violence.")
insert into ratings (icon, rating) values ("network to globe", "Can be played online")*/

/*INSERT INTO DEVELOPERS*/
/*insert into developers (developer, logo) values ("CD Projekt Red", "") 
insert into developers (developer, logo) values ("EA", "") 
insert into developers (developer, logo) values ("Bethesda", "") 
insert into developers (developer, logo) values ("Insomiac games", "")
insert into developers (developer, logo) values ("Mojang", "")
insert into developers (developer, logo) values ("Ubisoft", "")
insert into developers (developer, logo) values ("Insomiac games", "")
insert into developers (developer, logo) values ("Bungie", "")
insert into developers (developer, logo) values ("Activision", "")
insert into developers (developer, logo) values ("RE-Logic", "")
insert into developers (developer, logo) values ("505Games", "")
insert into developers (developer, logo) values ("Techland", "")
insert into developers (developer, logo) values ("Konami", "")
insert into developers (developer, logo) values ("Sumo Digital", "")
insert into developers (developer, logo) values ("NetherRealm", "")
insert into developers (developer, logo) values ("Blizzard Entertainment", "")
insert into developers (developer, logo) values ("Sucker Punch", "")
insert into developers (developer, logo) values ("Rockstar Games", "")*/

/*INSERT INTO AGES*/
/*insert into age (age, icon) values (3, "")
insert into age (age, icon) values (7, "")
insert into age (age, icon) values (12, "")
insert into age (age, icon) values (16, "")
insert into age (age, icon) values (18, "")*/
insert into platforms (platform) values ('PC');

insert into titles (title) values ('The Witcher 3');
insert into genres (genre) values ('Action Role-playing Game');
insert into platforms (platform) values ('Playstation 4');
insert into ages (age, icon) values (18, '18');
insert into ratings (icon, rating) values ('card', 'Includes in-game purchases.');
insert into releases (release) select '2015-05-19';
insert into developers (developer, logo) values ('CD Projekt Red', 'logo');

insert into games (titleid, genreid, platformid, ageid, ratingid, releaseid, developerid) values (1,1,1,1,1,1,1);

insert into titles (title) values ('Watch Dogs');
insert into releases (release) select '2014-05-27';
insert into developers (developer, logo) values ('Ubisoft', 'logo');
insert into games (titleid, genreid, platformid, ageid, ratingid, releaseid, developerid) values (2,1,1,1,1,2,2);

insert into titles (title) values ('The Elder Scrolls V : Skyrim');
insert into releases (release) select '2011-11-11';
insert into developers (developer, logo) values ('Bethesda', 'logo');
insert into games (titleid, genreid, platformid, ageid, ratingid, releaseid, developerid) values (3,1,1,1,1,3,3);