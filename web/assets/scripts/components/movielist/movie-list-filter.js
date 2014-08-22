(function() {
    app.filter("movieListFilter", function(){
        return function(movies, sortBy) {
            var filteredMovies = []
            for (var i = 0; i < movies.length; i++) {
                var movie = movies[i];

                if (sortBy === "ratings.critics_score" || sortBy === "-ratings.critics_score") {
                    if (movie.ratings) {
                        if (movie.ratings.critics_rating) {

                            filteredMovies.push(movie);
                        }
                    }

                } else if (sortBy === "ratings.audience_score" || sortBy === "-ratings.audience_score") {
                    if (movie.ratings) {
                        if (movie.ratings.critics_rating && movie.ratings.audience_rating) {

                            filteredMovies.push(movie);
                        }
                    }

                } else {
                    filteredMovies.push(movie);
                }
            };

            return filteredMovies;
        };
    });
})();