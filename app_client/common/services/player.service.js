(function() {

    angular
        .module('rainbowApp')
        .service('PlayerData', playerData);

    playerData.$inject = ['$http'];
    function playerData($http) {
        var getPlayerData = function(id) {
            console.log(id);
            return $http.get('/api/rankeddata/' + id);
        };
        
        return {
            getPlayerData: getPlayerData
        };
    }
})();