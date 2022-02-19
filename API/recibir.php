<?php 
	if( rand(0,10) < 7 ){
		$bool = true;
	}else{
		$bool = false;
	}

	$rta = [
		"ok" => $bool,
		"received" => $_POST
	];

	echo json_encode($rta);
?>