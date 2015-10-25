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
		
		var alertdialog1 = Titanium.UI.createAlertDialog({
			title:'You Lose!',
			message:'Do you want to play again?',
			buttonNames:['Yes','No']
		});
		alertdialog1.show();
	}
}


function showme(){
	if (btnbox1.getTitle() != ''){
		if (btnbox2.getTitle() != ''){
			if(btnbox3.getTitle() != '')
		{
			var alertdialog2 = Titanium.UI.createAlertDialog({
			title:'You Win!',
			message:'Do you want to play again?',
			buttonNames:['Yes','No']
		});
		alertdialog2.show();
		}
	}
}
}
