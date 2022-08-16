const movieList = [
    {
      title: "Batman",
      year: 1989,
      director: "Tim Burton",
      imdbRating: 7.6
    },
    {
      title: "Batman Returns",
      year: 1992,
      director: "Tim Burton",
      imdbRating: 7.0
    },
    {
      title: "Batman Forever",
      year: 1995,
      director: "Joel Schumacher",
      imdbRating: 5.4
    },
    {
      title: "Batman & Robin",
      year: 1997,
      director: "Joel Schumacher",
      imdbRating: 3.7
    },
    {
      title: "Batman Begins",
      year: 2005,
      director: "Christopher Nolan",
      imdbRating: 8.3
    },
    {
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      imdbRating: 9.0
    },
    {
      title: "The Dark Knight Rises",
      year: 2012,
      director: "Christopher Nolan",
      imdbRating: 8.5
    }
  ];
  /*const titles = []
  for(const movie of movieList){
    titles.push(movie.title)  
  }
  console.log(titles)
  
  const nolanMovieList = []
  for(const movie of movieList){
    if(movie.director === 'Christopher Nolan'){
      nolanMovieList.push(movie.title)
    }
  }
  console.log(nolanMovieList)
  
  const bestTitles = []
  for(const movie of movieList){
    if(movie.bestTitles >= 7.5){
      bestTitles.push(movie.title)
    }
  }
  console.log(bestTitles)
  */
  const titles = (movieList) => {
    const oldmovies = []
    for(const movie of movieList){
      //const oldmovies = []
  
      if (movie.year < 2000){
        oldmovies.push(movie.title)
        //return oldmovies
  
      }
    //return oldmovies
    }
    return oldmovies
  
  }
  
  console.log(titles(movieList))
  
  