function btnpress(){
	if (imageview.getImage() == 'step1.png'){
		imageview.setImage('step2.png');
	}
	
	else if (imageview.getImage() == 'step2.png'){
		imageview.setImage('step3.png');
	}
	
	else if (imageview.getImage() == 'step3.png'){
		imageview.setImage('step4.png');
	}
	
	else if (imageview.getImage() == 'step4.png'){
		imageview.setImage('step5.png');
	}
	
	else if (imageview.getImage() == 'step5.png'){
		imageview.setImage('step6.png');
	}
	
	else if (imageview.getImage() == 'step6.png'){
		imageview.setImage('step7.png');
	}
	
	else if (imageview.getImage() == 'step7.png'){
		imageview.setImage('step8.png');
	}
	
	else if (imageview.getImage() == 'step8.png'){
		imageview.setImage('step9.png');
	}
	
	else if (imageview.getImage() == 'step9.png'){
		imageview.setImage('step10.png');
	}
	
	else if (imageview.getImage() == 'step10.png'){
		imageview.setImage('step11.png');
	}
	
}


function shownpics(){
	if (press == true){
		btnpress();
		press = false;
	}
	else {
	press = true;
	}
}
