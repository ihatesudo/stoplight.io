---
path: /blog/just-a-simple-api
tags:
  - blog
  - blog-general
  - blog-testing
  - blog-featured
relatedTags:
  - blog-general
  - blog-mocking
  - blog-testing
  - blog-featured
publishedDate: 2020-06-08
author: Luke Russell
title: >-
  Just a Simple API: List of APIs with Fun Data for Quick Mock-ups
subtitle: >-
  Todos, Entertainment, and APIs That Are Out of This World (Literally)
image: /images/roller-coaster.jpg
includeToc: false
actionBar:
  enabled: false
meta:
  url: https://stoplight.io/blog/just-a-simple-api/
  description: >-
    Todos, Entertainment, and APIs That Are Out of This World (Literally)
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: >-
    Just a Simple API: List of APIs with Fun Data for Quick Mock-ups
  image: /images/roller-coaster.jpg
  twitter:
    title: >-
      Just a Simple API: List of APIs with Fun Data for Quick Mock-ups
    image: /images/roller-coaster.jpg
    username: '@stoplightio'
---

APIs can convey an incredible amount of information, making them indispensable for modern software. But sometimes you just want to take on a quick project. Perhaps you just need some data to test a small script, or maybe you want to show an example to an API-novice. In these cases, take a pick from this list of simple APIs.

From Pokemon to Star Wars, you’re sure to find an API out there that’s fun and conducive to quick mocks, no key required. Let’s look at a few examples of such APIs and show how to make an example call with each of them. Then you’ll have some quick APIs at your disposal whenever you may need them.

## APIs for a Fantastical World

Think back to when you were first learning about the power of APIs. It seemed almost magical, right? We can bring some of it back by looking at some fantastical APIs.

If you’ve read the *A Song of Ice and Fire* series, or the TV show *Game of Thrones*, you’re aware of just how much information the world of Westeros has. **[An API of Ice And Fire](https://anapioficeandfire.com/)** contains much of that information, freely available for your use. Since it’s an open API with no required authorization, you can only GET data. This will also be the case for the rest of the APIs mentioned in this piece.

With An API of Ice and Fire, you’ll be able to request information about the books, characters, and houses of the series. Let’s request data for the first house listed in their API:

```curl
curl https://anapioficeandfire.com/api/houses/1

{
	"url": "https://anapioficeandfire.com/api/houses/1",
	"name": "House Algood",
	"region": "The Westerlands",
	"coatOfArms": "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
	"words": "",
	"titles": [
		""
	],
	"seats": [
		""
	],
	"currentLord": "",
	"heir": "",
	"overlord": "https://anapioficeandfire.com/api/houses/229",
	"founded": "",
	"founder": "",
	"diedOut": "",
	"ancestralWeapons": [
		""
	],
	"cadetBranches": [],
	"swornMembers": []
}
```

Each house has a ton of potential information! With the “overlord” parameter, they also link to other API endpoints, which could be useful for some test purposes. Their website has pretty robust documentation, along with information about wrappers for languages such as Python, so give it a look-see if you’re interested!

If you’re looking for an API with a combination of numbers and text, **[The 5th Edition Dungeons and Dragons API](https://www.dnd5eapi.co/)** is a good fit. Any D&D player is aware of just how much material there is out there, and with so many rules there’s a wide variety of information to request. For example, in D&D characters can suffer from “conditions”, whose effects are described in the API. Let’s request the information for the “blinded” condition:

```curl
curl http://dnd5eapi.co/api/conditions/blinded

{
	"_id": "5e4ca3350b1bb138c589631a",
	"index": "blinded",
	"name": "Blinded",
	"desc": [
		"- A blinded creature can't see and automatically fails any ability check that requires sight.",
		"- Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage."
	],
	"url": "/api/conditions/blinded"
}
```

If Dungeons and Dragons isn’t your game, that’s okay. Another open API with great documentation is the **[PokéAPI](https://pokeapi.co/docs/v2.html)**, an API for Pokemon data. There’s an incredible amount of Pokemon data, and PokeAPI has a lot of it, so it may be useful to limit the data. For a short example, let’s just look at the first two entries under the “generations” endpoint:

```curl
curl https://pokeapi.co/api/v2/generation/?limit=2

{
	"count": 7,
	"next": "https://pokeapi.co/api/v2/generation/?offset=2&limit=2",
	"previous": null,
	"results": [
    	{
        	"name": "generation-i",
        	"url": "https://pokeapi.co/api/v2/generation/1/"
    	},
    	{
        	"name": "generation-ii",
        	"url": "https://pokeapi.co/api/v2/generation/2/"
    	}
	]
}
```

Not a fan of magic and fantasy? No problem, there are APIs that cover other types of material as well. Let’s move on from magical forests to the planets far beyond.

## APIs in the Stars Above

One of the most well-known sci-fi APIs, **[The Star Wars API](https://swapi.co/documentation)** can be used to pull data from a galaxy far, far away. It’s got information on the people and places of the Star Wars universe. For example, looking at the first person listed, we get all the known information about the Jedi Luke Skywalker:

```curl
curl https://swapi.co/api/people/1/

{
   "birth_year" : "19BBY",
   "created" : "2014-12-09T13:50:51.644000Z",
   "edited" : "2014-12-20T21:17:56.891000Z",
   "eye_color" : "blue",
   "films" : [
  	"https://swapi.co/api/films/2/",
  	"https://swapi.co/api/films/6/",
  	"https://swapi.co/api/films/3/",
  	"https://swapi.co/api/films/1/",
  	"https://swapi.co/api/films/7/"
   ],
   "gender" : "male",
   "hair_color" : "blond",
   "height" : "172",
   "homeworld" : "https://swapi.co/api/planets/1/",
   "mass" : "77",
   "name" : "Luke Skywalker",
   "skin_color" : "fair",
   "species" : [
  	"https://swapi.co/api/species/1/"
   ],
   "starships" : [
  	"https://swapi.co/api/starships/12/",
  	"https://swapi.co/api/starships/22/"
   ],
   "url" : "https://swapi.co/api/people/1/",
   "vehicles" : [
  	"https://swapi.co/api/vehicles/14/",
  	"https://swapi.co/api/vehicles/30/"
   ]
}
```

As you can see, there are multiple associated endpoints with him, from his vehicles to his homeworld. Another thing to note; if you would like to return the data in Wookiee instead of English, you can do that, too! Just append `?format=wookiee` to your request.

Another out of this world example is the **[Futurama API](https://futuramaapi.herokuapp.com/)**. This is an API great for pulling information about another set of space explorers, the crew of the Planet Express. One useful ability this API has is the ability to search endpoints for specific strings. For example, we can search for instances of a character saying the word “Fry”. It’ll return the matched quotes, along with the names and pictures of the characters who said them.

```curl
curl futuramaapi.herokuapp.com/api/quotes?search=Fry

[
   {
  	"character" : "Bender",
  	"image" : "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png",
  	"quote" : "He's a loser; he's the lobster equivalent of Fry."
   },
   {
  	"character" : "Professor Farnsworth",
  	"image" : "https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/farnsworth.png",
  	"quote" : "And with Fry gone, I'm free to leave my jigsaw puzzle pieces out without him\neating them."
   }
]
```

These are just two of the countless sci-fi related APIs out there. If you want something a little more grounded in reality, or are in an environment where reading about Star Wars is frowned upon, don’t worry, there are some fun scientific APIs as well.

## APIs in the Real World

While the space of our solar system doesn’t have a theatrical score like Star Wars, it is still plenty interesting in its own right. There are some APIs out there with data that shows that, such as the Jet Propulsion Laboratory’s **[Fireball Data API](https://ssd-api.jpl.nasa.gov/doc/fireball.html)**. With it, you can view the data for each fireball, or bright meteor, that their systems have detected. It allows you to get pretty specific with what you request. For example, here we’re only including fireball events that happen after February 15th that also have associated location information.

```curl
curl 'https://ssd-api.jpl.nasa.gov/fireball.api?date-min=2020-02-15&req-loc=true'

{
   "count" : "2",
   "data" : [
  	[
     	"2020-02-28 09:30:34",
     	"11.5",
     	"0.34",
     	"45.7",
     	"N",
     	"15.1",
     	"E",
     	"34.5",
     	"21.5"
  	],
  	[
     	"2020-02-24 22:21:28",
     	"2.0",
     	"0.073",
     	"3.6",
     	"N",
     	"96.0",
     	"W",
     	null,
     	null
  	]
   ],
   "fields" : [
  	"date",
  	"energy",
  	"impact-e",
  	"lat",
  	"lat-dir",
  	"lon",
  	"lon-dir",
  	"alt",
  	"vel"
   ],
   "signature" : {
  	"source" : "NASA/JPL Fireball Data API",
  	"version" : "1.0"
   }
}
```

If a collection of meteor data is too numerically-dense for you, but you’re still fascinated by space, there’s also the **[Open Notify](http://open-notify.org/) API**. It’s an API that lets you pull some simple space-related data, such as the location of the ISS and the number of people in space at the current moment. How many people are in space right now? Let’s see:

```curl
curl 'http://api.open-notify.org/astros.json'

   "message" : "success",
   "number" : 3,
   "people" : [
  	{
     	"craft" : "ISS",
     	"name" : "Andrew Morgan"
  	},
  	{
     	"craft" : "ISS",
     	"name" : "Oleg Skripochka"
  	},
  	{
     	"craft" : "ISS",
     	"name" : "Jessica Meir"
  	}
   ]
```

And just like that, we quickly know the names of all three people in space right now. And If you’re a fellow scientist, there are some APIs that can be fun tools to use for you, too. One such tool is **[newton](https://newton.now.sh/)**, an API that performs many mathematical functions. From factoring polynomials to finding the tangent line of a function, it’s quite powerful for how simple it is to use. Using the integrate endpoint, we can quickly integrate an equation:

```curl
curl https://newton.now.sh/integrate/4x^4+3

{
   "expression" : "4x^4+3",
   "operation" : "integrate",
   "result" : "4/5 x^5 + 3 x"
}
```

As you can see, there’s quite a wide range of quick APIs you can use. And all of these examples are completely open, and thus don’t require accounts or keys. APIs can be monotonous at times, so use an API from this list to add some flavor to your testing. And on that note, let’s look at one final API: the **[Programming Quotes API](https://programming-quotes-api.herokuapp.com/)**, using the random quote endpoint:

```curl
curl https://programming-quotes-api.herokuapp.com/quotes/random
{
	"_id": "5aa6e37801c2c400048eb9aa",
	"author": "Douglas Crockford",
	"en": "Part of what makes programming difficult is most of the time we’re doing stuff we’ve never done before.",
	"id": "5aa6e37801c2c400048eb9aa"
}
```

While Douglas Crockford is certainly right, all of these APIs are so simple and easy to use they’re sure to make your nascent projects at least a little bit easier.

## Read and Write with Todos

If you need a quick API that you’re able to read *and* write to, check out the **[Stoplight Todos API](https://todos.stoplight.io/)**. It’s a demo app with a simple format that allows you to easily test out calls. For example, you can write an endpoint for the API using the PUT command:

```curl
curl -X PUT http://todos.stoplight.io/todos/66555 -d '{"name":"new todo"}'
```

Afterward, you can read that endpoint, or any of the others that exist, just as easily:

curl https://todos.stoplight.io/todos/66555

```
{
	"completed": false,
	"completed_at": null,
	"created_at": "2020-03-04T13:22:40.048Z",
	"id": 66555,
	"name": "new todo",
	"updated_at": "2020-03-04T13:22:40.048Z"
}
```

The simplicity of this API makes it incredibly useful for some quick mock data. You can also get your own copy of the Todo API when you start a new [Stoplight Studio](https://stoplight.io/studio/) project. You can even change the design of the API and try it out with instant mock servers.

Hopefully, this list of simple APIs helps you scope out a project or add some fun diversion to your day.
