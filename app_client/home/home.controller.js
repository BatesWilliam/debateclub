(function(){
    angular
        .module('rainbowApp')
        .controller('homeCtrl', homeCtrl);
        
    homeCtrl.$inject = ['$scope'];
    
    function homeCtrl($scope, SelectedData) {
        var vm = this;
        //console.log(window.location);
        console.log("Connected to Home Controller");
        
        vm.content = "Debate Club";
        
        vm.selectedEvent= "";
        vm.selectedSeason="";
        
    }
})();