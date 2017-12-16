(function(){
    angular
        .module('rainbowApp')
        .controller('bracketCtrl', bracketCtrl);
        
    y2s3Ctrl.$inject = ['$scope'];
    
    function y2s3Ctrl($scope, SelectedData) {
        var vm = this;
        //console.log(window.location);
        console.log("In Bracket controller");
        
        vm.content = "Sample Bracket";
        

        
    }
})();