(function() {
  
  angular
    .module('rainbowApp')
    .factory('SelectedData', selectedData);
    
    function selectedData(){
      return{
        selectedTeam : ''
      };
    }
})();