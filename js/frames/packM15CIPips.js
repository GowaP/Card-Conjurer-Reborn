//Create objects for common properties across available frames
var masks = [{src:'/img/frames/m15/ciPips/firstHalf.svg', name:'First Half'}, {src:'/img/frames/m15/ciPips/secondHalf.svg', name:'Second Half'}, {src:'/img/frames/m15/ciPips/firstThird.svg', name:'First Third'}, {src:'/img/frames/m15/ciPips/secondThird.svg', name:'Second Third'}, {src:'/img/frames/m15/ciPips/thirdThird.svg', name:'Third Third'}];
//defines available frames
availableFrames = [
	{name:'White Pip', src:'/img/frames/m15/ciPips/w.svg', masks:masks, complementary:5},
	{name:'Blue Pip', src:'/img/frames/m15/ciPips/u.svg', masks:masks, complementary:5},
	{name:'Black Pip', src:'/img/frames/m15/ciPips/b.svg', masks:masks, complementary:5},
	{name:'Red Pip', src:'/img/frames/m15/ciPips/r.svg', masks:masks, complementary:5},
	{name:'Green Pip', src:'/img/frames/m15/ciPips/g.svg', masks:masks, complementary:5},
	{name:'Color Identity Pip Base', src:'/img/frames/m15/ciPips/base.png', bounds:{x:0.0767, y:0.5748, width:0.0467, height:0.0334}}
];
// notify
//EN:	notify('When using color identity pips, we recommend that you shift your Type text to the right with "{right66}".', 15);
/*FR:*/	notify('Lorsque vous utilisez des points d’identité de couleur, nous vous recommandons de déplacer le texte dans la zone « Type » vers la droite avec « {right66} ».', 15);
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = true;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = null;
//loads available frames
loadFramePack();