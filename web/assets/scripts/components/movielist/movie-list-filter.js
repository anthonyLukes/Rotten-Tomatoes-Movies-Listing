(function() {
    app.filter("movieListFilter", function(){
        return function(movies, sortBy) {
            var filteredMovies = []
            for (var i = 0; i < movies.length; i++) {
                var movie = movies[i];

                if (sortBy === "criticsScore" || sortBy === "-criticsScore") {
                   if (movie.criticsRating) {
                        filteredMovies.push(movie);
                    }

                } else if (sortBy === "audienceScore" || sortBy === "-audienceScore") {
                    if (movie.criticsRating && movie.audienceRating) {
                        filteredMovies.push(movie);
                    }

                } else {
                    filteredMovies.push(movie);
                }
            };

            return filteredMovies;
        };
    });
})();