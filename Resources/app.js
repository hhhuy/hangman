var alphabet = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,Y,Z';

var letter1 = 'D';
var letter2 = 'O';
var letter3 = 'G';

var press = true;

var gameImage = [
//'step1.png',
'step2.png',
'step3.png',
'step4.png',
'step5.png',
'step6.png',
'step7.png',
'step8.png',
'step9.png',
'step10.png',
'step11.png',
];

Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});


var view1 = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'red',
   width:'100%' ,
   height:'30%',
	top: '1%'
});

win1.add(view1);

var view1a = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'blue',
   width:'100%' ,
   height:'33.3%',
   top:0
});
view1.add(view1a);

var btnA = Titanium.UI.createButton({
	borderRadius: 10,
	title:'A',
	backgroundColor:'black',
	color:'white',
	left:0,
	width:'10%',
	height:'100%',
	font:{fontSize : '28dp'}
	
});

view1a.add(btnA);


var btnB = Titanium.UI.createButton({
	borderRadius: 10,
	title:'B',
	backgroundColor:'black',
	color:'white',
	left:'11%',
	width:'10%',
	height:'100%',
	font:{fontSize : '28dp'}
	
});

view1a.add(btnB);

var btnC = Titanium.UI.createButton({
	borderRadius: 10,
	title:'C',
	backgroundColor:'black',
	color:'white',
	left:'22%',
	width:'10%',
	height:'100%',
	font:{fontSize : '28dp'}
	
});
view1a.add(btnC);


var btnD = Titanium.UI.createButton({
	borderRadius: 10,
	title:'D',
	backgroundColor:'black',
	color:'white',
	left:'33%',
	width:'10%',
	height:'100%',
	font:{fontSize : '28dp'}
	
});
view1a.add(btnD);



var btnE = Titanium.UI.createButton({
	borderRadius: 10,
	title:'E',
	backgroundColor:'black',
	color:'white',
	left:'44%',
	width:'10%',
	height:'100%',
	font:{fontSize : '28dp'}
	
});
view1a.add(btnE);


var btnF= Titanium.UI.createButton({
	borderRadius: 10,
	title:'F',
	backgroundColor:'black',
	color:'white',
	left:'55%',
	width:'10%',
	height:'100%',
	font:{fontSize : '28dp'}
	
});
view1a.add(btnF);

var btnG = Titanium.UI.createButton({
	borderRadius: 10,
	title:'G',
	backgroundColor:'black',
	color:'white',
	left:'66%',
	width:'10%',
	height:'100%',
	font:{fontSize : '28dp'}
	
});
view1a.add(btnG);


var btnH = Titanium.UI.createButton({
	borderRadius: 10,
	title:'H',
	backgroundColor:'black',
	color:'white',
	left:'77%',
	width:'10%',
	height:'100%',
	font:{fontSize : '28dp'}
	
});
view1a.add(btnH);


var btnI = Titanium.UI.createButton({
	borderRadius: 10,
	title:'I',
	backgroundColor:'black',
	color:'white',
	left:'88%',
	width:'10%',
	height:'100%',
	font:{fontSize : '28dp'}
	
});
view1a.add(btnI);





var view1b = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'yellow',
   width:'100%' ,
   height:'33.3%',
   top:'33.3%'
});
view1.add(view1b);


var btnJ = Titanium.UI.createButton({
	borderRadius: 10,
	title:'J',
	backgroundColor:'black',
	color:'white',
	left:0,
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1b.add(btnJ);


var btnK = Titanium.UI.createButton({
	borderRadius: 10,
	title:'K',
	backgroundColor:'black',
	color:'white',
	left:'11%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1b.add(btnK);

var btnL = Titanium.UI.createButton({
	borderRadius: 10,
	title:'L',
	backgroundColor:'black',
	color:'white',
	left:'22%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1b.add(btnL);



var btnM = Titanium.UI.createButton({
	borderRadius: 10,
	title:'M',
	backgroundColor:'black',
	color:'white',
	left:'33%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1b.add(btnM);


var btnN = Titanium.UI.createButton({
	borderRadius: 10,
	title:'N',
	backgroundColor:'black',
	color:'white',
	left:'44%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1b.add(btnN);


var btnO = Titanium.UI.createButton({
	borderRadius: 10,
	title:'O',
	backgroundColor:'black',
	color:'white',
	left:'55%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1b.add(btnO);


var btnP = Titanium.UI.createButton({
	borderRadius: 10,
	title:'P',
	backgroundColor:'black',
	color:'white',
	left:'66%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1b.add(btnP);


var btnQ = Titanium.UI.createButton({
	borderRadius: 10,
	title:'Q',
	backgroundColor:'black',
	color:'white',
	left:'77%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1b.add(btnQ);

var btnR = Titanium.UI.createButton({
	borderRadius: 10,
	title:'R',
	backgroundColor:'black',
	color:'white',
	left:'88%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1b.add(btnR);



var view1c = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'grey',
   width:'100%' ,
   height:'33.3%',
   top:'66.6%'
});
view1.add(view1c);

var btnS = Titanium.UI.createButton({
	borderRadius: 10,
	title:'S',
	backgroundColor:'black',
	color:'white',
	left:'11%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1c.add(btnS);


var btnT = Titanium.UI.createButton({
	borderRadius: 10,
	title:'T',
	backgroundColor:'black',
	color:'white',
	left:'22%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1c.add(btnT);



var btnU = Titanium.UI.createButton({
	borderRadius: 10,
	title:'U',
	backgroundColor:'black',
	color:'white',
	left:'33%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1c.add(btnU);

var btnV = Titanium.UI.createButton({
	borderRadius: 10,
	title:'V',
	backgroundColor:'black',
	color:'white',
	left:'44%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1c.add(btnV);


var btnW = Titanium.UI.createButton({
	borderRadius: 10,
	title:'W',
	backgroundColor:'black',
	color:'white',
	left:'55%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1c.add(btnW);


var btnY = Titanium.UI.createButton({
	borderRadius: 10,
	title:'Y',
	backgroundColor:'black',
	color:'white',
	left:'66%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1c.add(btnY);


var btnZ = Titanium.UI.createButton({
	borderRadius: 10,
	title:'Z',
	backgroundColor:'black',
	color:'white',
	left:'77%',
	width:'10%',
	height:'100%',
	top:'1%',
	font:{fontSize : '28dp'}
	
});
view1c.add(btnZ);

var view2 = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'white',
   width:'100%' ,
   height:'50%',
   top:'31%'
});

win1.add(view2);
 
var imageview = Titanium.UI.createImageView({
	image:'step1.png',
	height: '80%',
	width: '50%'
});
view2.add(imageview);

var view3 = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'orange',
   width:'100%' ,
   height:'19%',
   top:'81%'
});

win1.add(view3);


var btnbox1 = Titanium.UI.createButton({
	borderRadius: 10,
	title:'',
	backgroundColor:'black',
	color:'white',
	left:'15%',
	width:'20%',
	height:'60%',
	font:{fontSize : '28dp'}
});

view3.add(btnbox1);


var btnbox2 = Titanium.UI.createButton({
	borderRadius: 10,
	title:'',
	backgroundColor:'black',
	color:'white',
	left:'40%',
	width:'20%',
	height:'60%',
	font:{fontSize : '28dp'}
});

view3.add(btnbox2);


var btnbox3 = Titanium.UI.createButton({
	borderRadius: 10,
	title:'',
	backgroundColor:'black',
	color:'white',
	left:'65%',
	width:'20%',
	height:'60%',
	font:{fontSize : '28dp'}
});

view3.add(btnbox3);


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

Ti.include('events.js' , 'function.js');

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
