(function() {
    var app = angular.module('movieApp', []);

    app.controller('MoviesController', ['$http','$scope', function($http,$scope) {
        var self = this;

        this.movies = [];
        this.movieSort = "ratings.critics_score";
        this.moviesLimit = 10;

        // copy initial values to temp variables
        // to populate values in the UI
        this.movieSortTemp = this.movieSort;
        this.moviesLimitTemp = this.moviesLimit;

        $scope.updateMovies = function() {
            self.movieSort = self.movieSortTemp;
            self.moviesLimit = self.moviesLimitTemp;
        };

        // get & set movies from jsonp call
        $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=gz5uhgtn2my2zy7dsfmnjyrb&page_limit=25&callback=JSON_CALLBACK').success(function(data) {
            self.movies = data.movies;
        });
    }]);
})();
