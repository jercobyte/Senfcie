angular.module('starter.controllers', [])

.controller('appCtrl', function($scope) {
	$scope.writeMode = true;
	$scope.frontMsg="Acerque el teléfono para enviar texto";
	$scope.updateNFCMode = function() {
		if($scope.writeMode){
			$scope.writeMode=false;
			$scope.frontMsg="Acerque el teléfono para recibir texto";
			//Activación de lectura
		}else{
			$scope.writeMode=true;
			$scope.frontMsg="Acerque el teléfono para enviar texto";
			//Cambio del modo del NFC a escritura (share), desacivación de lectura
		}
	};
});