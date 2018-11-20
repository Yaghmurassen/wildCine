const express = require('express');
const fs = require('fs');

const app = express();

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 * CORS PROBLEM
 */
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
/**
 * INJECT MIDDLEWARE
 */
app.use(allowCrossDomain);

///////////////////////////////////

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/movies', function(req, res) {
  fs.readFile('movies.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.get('/movies/:title', function(req, res) {
  // console.log(req.params.title);
  // res.send(req.params.title);
  fs.readFile('movies.json', (err, data) => {
    let films = JSON.parse(data);
    let resultatFilm = [];
    films.forEach((e) => {
      if (e.Title.toLowerCase().match(req.params.title.toLowerCase())) {
        console.log('Le titre du film est : ' + e.Title + '.');
        resultatFilm.push(e);
      }
    });
    // console.log(resultatFilm);
    res.json(resultatFilm);
  });
});

app.get('/movies/id/:id', function(req, res) {
	// console.log(req.params.title);
	// res.send(req.params.title);
	fs.readFile('movies.json', (err, data) => {
	  let films = JSON.parse(data);
	  let resultatFilm = [];
	  films.forEach((e) => {
      if (e.id === req.params.id) {
        // console.log('Le titre du film est : ' + e.Title + '.');
        resultatFilm.push(e);
      } 
	  });
	  // console.log(resultatFilm);
	  if (resultatFilm.length) {
		  res.json(resultatFilm);
	  } else {
		  res.json({'error':'Votre recherche n\'a aboutit à aucun résultat. Veuillez faire preuve de moins d\'originalité !'});
	  }
	});
});

/*app.get('/search', function(req, res) {
  // instantiate variables de recherche
  let year, genre, actor;

  if (req.query.year) {
    year = req.query.year;
  }

  if (req.query.genre) {
    let arr = [];
    arr.push(req.query.genre);
    genre = arr.map(e => e.capitalize());
    // console.log(genre);
  }

  if (req.query.actor) {
    let arr = [];
    arr.push(req.query.actor);
    actor = arr.map(e => e.capitalize());
  }
  // boucle pour verifier les infos tapées par l'user
  fs.readFile('movies.json', (err, data) => {
    let films = JSON.parse(data);
    let resultatFilm = [];
    films.forEach((e) => {
      console.log(e.Genre.includes(req.query.genre));
      if (e.Year == req.query.year || e.Genre.includes(req.query.genre)) {
        console.log('Les filtres du film sont : ' + e.Year +' '+ e.Genre + '.');
        resultatFilm.push(e);
      }
      // if (e.Year == req.query.year) {
      //   console.log('En ' + e.Year + ' est sortie le film ' + e.Title + ' où jouent les acteurs ' + e.Actors[0] + ' ' + e.Actors[3]);
      // }
      // if (genre && (genre.some(x => e.Genre.includes(x)))) {
      //   console.log('Le film est de genre : ' + req.query.genre.capitalize());
      // }
      // // console.log(actor.some(x => e.Actors.includes(x)))
      // if (actor && (actor.some(x => e.Actors.includes(x)))) {
      //   console.log('L\'acteur principal est : ' + req.query.actor.capitalize());
      // }
      // } else if (e.Actors.length > 1) {
      //   console.log('les acteurs sont : ' + e.Actors);
      // }
      // if (e.Year !== null && e.genre !== null) {
      //   console.log('L\'année et le genre sont renseignés par l\'utilisateur');
      // }
    });
  })
});*/

app.get('/search', function(req, res) {
  let year, genre;

  const error = [];

  if (req.query.year && typeof(req.query.year) !== "Number" && req.query.year.length !== 4) {
    error.push("L'année renseignée n'est pas valide. Veuillez rentrer une date correct bande de fdp.")
  }

  if (req.query.genre && !/^[a-zA-Z]+$/gi.test(req.query.genre)) {
    error.push("Le genre renseigné n'est pas valide. Veuillez rentrer un genre correct bande de fdp.");
  }

  if (!error.length){
    fs.readFile('movies.json', (err, data) => {
      let films = JSON.parse(data);

      if(req.query.year){
        films = films.filter((e) => {
           if (e.Year.match(req.query.year)) {
            console.log('Film avec l\' année: '+ req.query.year +' => '+ e.Title);
            return true;
          }
        });
      }
      if (req.query.genre){
        films = films.filter((e) => {
           if (e.Genre.includes(req.query.genre.capitalize())) {
            console.log('\nFilm avec le genre: '+ req.query.genre +' => '+ e.Title);
            return true;
          }
        });
      }
      
      res.json(films);
    });
  } else {
    res.send(error);
  }

});

// app.get('/delete', function(req,res) {
//   let title;
//   if (req.query.title) {
//     title = req.query.title;
//      fs.readFile('movies.json', (err, data) => {

//      })
//   }

// })



app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
