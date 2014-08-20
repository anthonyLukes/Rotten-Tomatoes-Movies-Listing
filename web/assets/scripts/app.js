(function() {
    var app = angular.module('movieApp', []);

    app.controller('MoviesController', ['$http','$scope', function($http,$scope) {
        $scope.movies = [];
        $scope.movieSort = "ratings.critics_score";
        $scope.moviesLimit = 10;

        // copy initial values to temp variables
        // to populate values in the UI
        $scope.movieSortTemp = $scope.movieSort;
        $scope.moviesLimitTemp = $scope.moviesLimit;

        $scope.updateMovies = function() {
            $scope.movieSort = $scope.movieSortTemp;
            $scope.moviesLimit = $scope.moviesLimitTemp;
        };

        $scope.getRatingCssClass = function(rating) {
            switch (rating) {
                case "Certified Fresh":
                    return "rating_certifiedFresh";
                    break;
                case "Fresh":
                    return "rating_fresh";
                    break;
                case "Rotten":
                    return "rating_rotten";
                    break;
                case "Spilled":
                    return "rating_spilled";
                    break;
                case "Unknown":
                    return "rating_unknown";
                    break;
                case "Upright":
                    return "rating_upright";
                    break;
            };
        };

        // get & set movies from jsonp call
        $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=gz5uhgtn2my2zy7dsfmnjyrb&page_limit=25&callback=JSON_CALLBACK').success(function(data) {
            $scope.movies = data.movies;
        });
    }]);
})();
