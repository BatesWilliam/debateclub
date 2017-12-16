(function (){
    
    angular
            .module('rainbowApp')
            .directive('eventInfo', [eventInfo]);
            
            function eventInfo (){
                return{
                    restrict: 'EA',
                    scope: {
                        event : '=info',
                    },
                    templateUrl: '/common/directives/eventInfo/eventInfo.template.html'
                };
            }
})();