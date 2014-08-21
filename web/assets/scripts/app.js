(function() {
    var app = angular.module("movieApp", []);

    app.filter("myFilter", function(){
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

    app.factory('moviesProvider', function($q, $http) {
        var MoviesProvider = {
            getMovies: function() {

                var deferred = $q.defer();

                $http.get("assets/data/movies.json").success(function(data){
                    deferred.resolve(data);
                }).error(function(data){
                    deferred.reject(data);
                });


                return deferred.promise;
            }
        }

        return MoviesProvider;
    });

    app.controller("MoviesController", ["$http","$scope", "moviesProvider", function($http,$scope,moviesProvider) {
        $scope.movies = [];
        $scope.movieLoadingError = false;

        $scope.displayOptions = {
            movieSort: "ratings.critics_score",
            moviesLimit: 10
        };

        $scope.displayOptionsTemporary = {};

        // Copy initial values to temp variables
        // to populate values in the UI.
        //
        // Need to use objects to bind to the model in ng-include and need
        // to use angular copy to not bind the objects together.
        angular.copy($scope.displayOptions, $scope.displayOptionsTemporary);

        $scope.updateMovies = function() {
            angular.copy($scope.displayOptionsTemporary, $scope.displayOptions);
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
        // $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=gz5uhgtn2my2zy7dsfmnjyrb&page_limit=25&callback=JSON_CALLBACK').success(function(data) {
        //     $scope.movies = data.movies;
        // });

        moviesProvider.getMovies().then(function(data) {
            // success
            $scope.movies = data.movies;
        }, function(reason) {
            // error
            $scope.movieLoadingError = true;
        });
    }]);
})();
