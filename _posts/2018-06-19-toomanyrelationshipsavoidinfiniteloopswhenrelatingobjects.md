---
layout: post
title: Too Many Relationships!? Avoid Infinite Loops When Relating Objects
date: 2018-06-19 19:38:42 +0000
author: Eric Chrobak
---


Do you have too many relationships? Does your app have to many relationships? Actually what I'm wondering is do you get stuck in a loop with bad relationship(s)? Well I'm sure we've all been there where you just cant seem to break out of a bad loop when relating classes to one another(not unlike dating relationships!)I like how coding relates to real life.

Recently while doing a project for the has many relationships I found myself continually getting stuck in loops when relating one object to another. I had an issue in the OO Tic Tac Toe project where I was stuck in an infinite loop and I didn't resolve it but, moved on to a later test in the project. After several hours of debugging I asked a question on the ask a question forum. A tech coach suggested that I fix the loop first. After doing that it was much easier to debug the rest of my code.

While in the has many relationships lab I was doing the following:
1. Relating the Artist class to the Song class via add song method in Artist class.
2. Then I was creating a new song if one wasn't found.
3. Then I was creating a new Artist for the song in the song class
4. Then under that new artist class I added the song to the artist

What happened for one of my tests at this point was {Artist, songs={song1{song name, artist={Artist , name, songs={song 1... so on and so forth endlessly adding a new artist and adding the song and looking for an artist and adding an artist.

I was't sure what to do and remembered back to the OO Tic Tac Toe lab where the tech coaches recommended I fix my infinite loop first. So in the has many relationships lab I fixed my loop first.

So in the example I gave this is what would need to happen:
1. The Artist class has: songs array, artist name, and add song method
2. The add song method has argument of song name and creates new instance of song with self(the current instance of the artist) as the artist of the new song instance.
3. The song class has: song name, artist name
4. when a new song is created with an artist name or an artist name is added then you search the artist class variable @@all by name for the artist and if one isn't found then create a new artist with the current instance of song added to the existing or new instance of artist. You don't use the add a song method because that will create your infinite loop but rather you add the song to the songs array for the instance of Artist.

Searching for the artist prevents you from creating a new artist. This process will work for for any simple relationship. For other classes change the names of the class and the necessary properties.

Cheers and happy relationships!
