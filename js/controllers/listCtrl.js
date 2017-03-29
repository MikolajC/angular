(function(){

	angular
		.module("pandaQuiz")
		.controller("listCtrl", ListController);
		
		ListController.$inject = ['quizMetrics', 'DataService'];
		
		function ListController(quizMetrics, DataService){
			var vm = this;   /* view model */
			
			vm.quizMetrics = quizMetrics;
			vm.data= DataService.pandasData;
			vm.activePanda = {};
			vm.changeActivePanda = changeActivePanda;
			vm.search = "";
			vm.activateQuiz = activateQuiz;
			
			
			
			function activateQuiz(){
				quizMetrics.changeState("quiz", true);
			}
			
			function changeActivePanda(index){
				vm.activePanda = index;
			}
		}
		
		
		
		
		
		
		
		
		
		

		
		
		
		
})();