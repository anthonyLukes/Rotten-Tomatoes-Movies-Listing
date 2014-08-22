app.factory('movieListProvider', function($q, $http) {
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