(function() {
    
    angular
        .module('rainbowApp')
        .service('Y2s3Data', y2s3Data);
        
    y2s3Data.$inject = ['$http'];
    
    function y2s3Data($http) {
        var getY2s3Data = function() {
            return $http.get('/api/y2s3Data');
        };
        
        var getY2s3DataForTeam = function(team){
            console.log("For team area");
            console.log(team);
            return $http.get('/api/y2s3Data/' + team);
            
        };
        
        return{
            getY2s3Data : getY2s3Data,
            getY2s3DataForTeam : getY2s3DataForTeam
        };
    }
})();