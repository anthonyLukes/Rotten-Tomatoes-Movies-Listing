app.factory('movieListProvider', function($q, $http) {
    var MoviesProvider = {
        getMovies: function() {

            var deferred = $q.defer();

            // $http.get("assets/data/movies.json").success(function(data){
            //     deferred.resolve(data);
            // }).error(function(data){
            //     deferred.reject(data);
            // });
            $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=gz5uhgtn2my2zy7dsfmnjyrb&page_limit=25&callback=JSON_CALLBACK').success(function(data) {
                deferred.resolve(data);
            }).error(function(data){
                deferred.reject(data);
            });


            return deferred.promise;
        }
    }

    return MoviesProvider;
});