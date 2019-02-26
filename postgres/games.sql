/*CREATE TITLES*/
create table titles(
titleid serial not null primary key,
title text not null
);

/*CREATE GENRES*/
create table genres(
    genreid serial not null primary key,
    genre text not null
);

/*CREATE PLATFORMS*/
create table platforms(
    platformid serial not null primary key,
    platform text not null
);

/*CREATE RATINGS*/
create table ratings(
    ratingid serial not null primary key,
    icon text not null,
    rating text not null
);

/*CREATE AGES*/
create table ages(
    ageid serial not null primary key,
    age int,
    icon text not null
);

/*CREATE RELEASES*/
create table releases(
releaseid serial not null primary key,
release date not null
);

/*CREATE DEVELOPERS*/
create table developers(
developerid serial not null primary key,
developer text not null,
logo text not null
);

/*CREATE GAMES*/
create table games(
    gameid serial not null primary key,
    titleid int,
    genreid int,
    platformid int,
    ageid int,
    ratingid int,
    releaseid int,
    developerid int,
    foreign key (titleid) references titles(titleid),
    foreign key (genreid) references genres(genreid),
    foreign key (platformid) references platforms(platformid),
    foreign key (ageid) references ages(ageid),
    foreign key (ratingid) references ratings(ratingid),
    foreign key (releaseid) references releases(releaseid),
    foreign key (developerid) references developers(developerid)
);
