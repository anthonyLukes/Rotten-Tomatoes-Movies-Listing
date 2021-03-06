app.MovieModel = (function(){
    var MovieModel = function(movieData) {

    };

    MovieModel.prototype.toJSON = function(movieData) {
        return {
            title: movieData.title,
            mpaaRating: movieData.mpaaRating,
            thumbnail: movieData.posters.thumbnail,
            audienceRating: movieData.ratings.audience_rating,
            audienceScore: movieData.ratings.audience_score,
            criticsRating: movieData.ratings.critics_rating,
            criticsScore: movieData.ratings.critics_score,
            releaseDate: movieData.release_dates.theater,
            synopsis: movieData.synopsis,
            runtime: movieData.runtime
        };
    };
    return MovieModel;
}());
