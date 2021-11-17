const Cinema = function (films) {
  this.films = films;
};

// Cinema.prototype.getFilmTitles = function (){
//   const filmList = [];
//   for (const film of this.films) {
//     filmList.push(film.title)
//   }
//   return filmList
  
// }

Cinema.prototype.getFilmTitles = function () {
  const filmList = this.films.map((film) => {
    return film.title;
  });
  
  return filmList;
}


Cinema.prototype.getFilmByTitle = function (title){
  const foundFilm = this.films.filter((film) => {
    return film.title === title;
  });
  console.log(`This is ${foundFilm}`)
  return foundFilm;
}

Cinema.prototype.filterByGenre = function (genre){
  const foundFilms = this.films.filter((film) => {
    return film.genre === genre;
  });
  console.log(`This is ${foundFilms}`)
  return foundFilms;
}

Cinema.prototype.filmsPresentFromYear = function (year) {
  const yearList = this.films.map((film) => {
    return film.year;
  });
  return yearList.includes(year)
}

Cinema.prototype.allFilmsOver = function (length_input) {
  const lengthList = this.films.map((film) => {
    return film.length;
  });
  const result =  lengthList.every((length) => { 
    return length > length_input;
  })
  return result
}

module.exports = Cinema;


