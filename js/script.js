// const myVar = setInterval(changer, 500);

// function changer() {
// 	const randColor = [(255, 255, 255), (82, 149, 95), 'red', 'orange', '#EBDDF6', '#FFFF66'];
// 	const color = randColor[Math.floor(Math.random()*randColor.length)];
// 	document.querySelector('.firstBlock').style.backgroundColor=color;
// 	document.querySelector('.firstBlock').style.width=Math.random(500) * 300 + 300;
// }

// function keiskTeksta() {
// 	const test = document.getElementById('input').value;
// 	document.querySelector('.firstBlock').innerHTML=test;
// 	console.log(test);
// }


// function addTask() {
// 	var taskInput = document.querySelector('.input2');
// 	var taskButton = document.querySelector('.button2');
// 	var ul = document.querySelector('ul');
// 	let li = document.createElement('li');
// 	li.textContent = taskInput.value;
// 	ul.appendChild(li);
// }

// function makeTable() {
// 	var row = document.getElementById('cols');
// 	var col = document.getElementById('rows');
// 	var table = document.querySelector('table');
// 	var tr=document.createElement('tr');
// 	var td=document.createElement('td');
// 	for (let i = 0; i<row.value; i++) {
// 		table.appendChild(tr);
// 		let tableRow = document.querySelector('tr')
// 		tableRow.textContent('...');
// 		for (let j = 0; j<col.value; j++) {
// 			tableRow.appendChild(td);
// 			tableRow.textContent('...');
// 		}

// 	}
// 	console.log(row.value);
// 	console.log(col.value);
// }

// const showButton = document.getElementById('show');
// const mixButton = document.getElementById('mix');
// const picArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];
// var counter=0;

// showButton.addEventListener("click", generateImageBlock);
// mixButton.addEventListener("click", mixImageBlock);

// function generateImageBlock() {
// 	const ul = document.querySelector('ul');
// 	for (let i = 0; i<picArray.length; i++) {
// 		const listItem = document.createElement('li');
// 		const imageItem = document.createElement('img');
// 		listItem.setAttribute("class", 'col-xs-4');
// 		imageItem.setAttribute('ondblclick', 'setImage('+i+')');
// 		imageItem.setAttribute("src", 'img/' + picArray[i]);
// 		ul.appendChild(listItem).appendChild(imageItem);
// 	}
// 	showButton.style.opacity='0';
// 	counter=1;
// }

// function mixImageBlock() {
// 	if (counter > 0) {
// 		picArray.sort(function() {
// 	  		return .5 - Math.random();
// 		});
// 		document.querySelector('ul').innerHTML='';
// 		generateImageBlock();
// 	}

// }

// function setImage(value) {
// 	const fullList = document.querySelectorAll('img');
// 	fullList[value].setAttribute('src', 'img/1.jpg');
// }



// var addTaskButton = document.querySelector('.btn-primary');
// addTaskButton.addEventListener("click", addInputs);

// function addInputs() {
// 	var form = document.querySelector('form');
// 	form.style['display'] = 'block';
// }

// var addButton = document.querySelector('.btn-danger');
// addButton.addEventListener("click", doStuff);

// function doStuff() {
// 	var name = document.getElementsByName('subject')[0].value;
// 	var priority = document.getElementsByName('priority')[0].value;
// 	var completion = parseInt(document.getElementsByName('completion')[0].value);
// 	if (name && completion<=100 && completion>=0) {
// 		var tr=document.createElement('tr');
// 		var td=document.createElement('td');
// 		document.querySelector('tbody').appendChild(tr);
// 		var td=document.createElement('td');
// 		document.querySelector('tr:last-child').appendChild(td).textContent='';
// 		var td=document.createElement('td');
// 		if (completion == 100) {
// 			td.setAttribute('class', 'special');
// 		}
// 		document.querySelector('tr:last-child').appendChild(td).textContent=name;
// 		var td=document.createElement('td');
// 		var div=document.createElement('div');
// 		div.setAttribute("class", 'priority' + priority);
// 		document.querySelector('tr:last-child').appendChild(td).appendChild(div).textContent=priority;
// 		var td=document.createElement('td');
// 		document.querySelector('tr:last-child').appendChild(td).textContent='Test';
// 		var td=document.createElement('td');
// 		if (completion == 100) {
// 			document.querySelector('tr:last-child').appendChild(td).textContent='Complete';

// 		}
// 		else {
// 			document.querySelector('tr:last-child').appendChild(td).textContent='In Progress';
// 		}
// 		var td=document.createElement('td');
// 		var div=document.createElement('div');
// 		div.setAttribute('class', 'progress');
// 		var div2=document.createElement('div');
// 		div2.setAttribute('class', 'progress-bar progress-bar-success');
// 		div2.setAttribute('style', 'width:'+completion+'%');
// 		document.querySelector('tr:last-child').appendChild(td).appendChild(div).appendChild(div2).textContent=completion+'%';
// 		var td=document.createElement('td');
// 		document.querySelector('tr:last-child').appendChild(td).textContent='Modified on ' + new Date().toJSON().slice(0,10).replace(/-/g,'/');
// 		var td=document.createElement('td');
// 		document.querySelector('tr:last-child').appendChild(td).textContent='';
// 	}
// 	striker();
// 	deleteRow();
// 	var form = document.querySelector('form');
// 	form.style['display'] = 'none';
// }


// function striker() {
// 	var completeTask = document.querySelectorAll('tr td:nth-child(2)');
// 	for(let i=0; i<completeTask.length; i++) {
// 		completeTask[i].onclick=function(event){
// 			event.target.setAttribute('class', 'special');
// 			event.target.nextSibling.nextSibling.nextSibling.textContent='Complete';
// 			event.target.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.firstChild.style['width']='100%';
// 			event.target.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.firstChild.textContent='100%';
// 		}
// 	}
// }

// function deleteRow() {
// 	var deleteButton = document.querySelectorAll('tr td:nth-child(8)');
// 	console.log(deleteButton[0]);
// 	for(let i=0; i<deleteButton.length; i++) {
// 		deleteButton[i].onclick=function(event){
// 			console.log("Veikia");
// 			var rowToDelete = event.target.parentElement;
// 			event.target.parentElement.parentElement.removeChild(rowToDelete);
// 		}
// 	}
// }

// innerHTML='<button class=dwdawdwa id=dwadwad>Delete</button>'

// const picArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'];

// const greets = ['Šiemet dovanų nebus, nes Kalėdų seneliui depresija! Snieguolė jį paliko ant ledo dėl besmegenio! O nykštukai tebešvenčia Jonines! Bet vis tiek – linksmų šv. Kalėdų!',
// 'Krinta baltos snaigės, sukasi ratu, Aš ir besmegeniu siurbiame kartu. Griuvo besmegenis, o ir aš sykiu, Tau linksmų Kalėdų, linkime abu!',
// 'Linkiu, kad Kalėdų Senelis šiemet tau itin taikliai parinktų dovanas, o pilvas paskaustų ne nuo šventinio maisto, bet nuo linksmybių ir gero juoko dozės!',
// 'Sveikinu! Aš perdaviau Kalėdų Seniui tavo norų sąrašą. Deja, jis nieko nesugebėjo perskaityti tavo rašysenos, todėl dovanų atneš gramatikos vadovėlį...',
// 'Tegul Senelis nepaklysta, O jo briedžiai neįklimpsta, Pas tave pirma atklystų, Dovanėlių daug išvystum!',
// 'Ką beždžionės dainuoja per Kalėdas? ”Jungle Bells, Jungle Bells!”',
// 'Kalėdų šiemet nebus… Aš pasakiau Kalėdų seneliui, kad gražei elgeisi ir jis nusprogo iš juoko!',
// 'Šiandien žiurkės rengia puotą, Girtas triušis graužia šluota, Kiaulė tvarte mėšlą ėda, Linksma jiems visiems - Kalėdos!!!',
// 'Eglė, sniegas ir lemputės, Kalakutas ir šakutės, Tortas, žvakės, skrandžio bėdos, Visa tai yra Kalėdos!'];

// function generateImageBlock() {
// 	const picDiv = document.querySelector('.pics');
// 	const divItem = document.createElement('div');
// 	for (let i = 0; i<picArray.length; i++) {
// 		const imageItem = document.createElement('img');
// 		//imageItem.setAttribute("class", 'col-4');
// 		imageItem.setAttribute('ondblclick', 'setImage('+i+')');
// 		imageItem.setAttribute('id', i);
// 		imageItem.setAttribute("src", 'img/' + picArray[i]);
// 		imageItem.setAttribute('class', 'col-4 img-fluid rounded')
// 		picDiv.appendChild(divItem).appendChild(imageItem);
// 	}
// }

// generateImageBlock();
// var nextButton = document.getElementById('kitas');
// nextButton.addEventListener("click", generateQuotes);

// function generateQuotes() {
// 	var pics = document.getElementsByClassName('pics')[0];
// 	pics.style['display']='none';
// 	var quote = 0;
// 	greets.forEach(function(greet) {
// 		var home = document.getElementById('quoteDiv');
// 		var textBox = document.createElement('div');
// 		textBox.setAttribute('class', 'col-4 quoteDivSpacing');
// 		var text = document.createElement('h4');
// 		home.appendChild(textBox).appendChild(text).textContent=greets[quote];
// 		quote++;
// 	})
// 	//nextButton.setAttribute(class')
// }
// //generateQuotes();

// // SNIEGAS

// function startSnow() {
// var snowStorm=function(g,f){function k(a,d){isNaN(d)&&(d=0);return Math.random()*a+d}function x(){g.setTimeout(function(){a.start(!0)},20);a.events.remove(m?f:g,"mousemove",x)}function y(){(!a.excludeMobile||!D)&&x();a.events.remove(g,"load",y)}this.excludeMobile=this.autoStart=!0;this.flakesMax=128;this.flakesMaxActive=64;this.animationInterval=33;this.useGPU=!0;this.className=null;this.excludeMobile=!0;this.flakeBottom=null;this.followMouse=!0;this.snowColor="#fff";this.snowCharacter="&bull;";this.snowStick=
// !0;this.targetElement=null;this.useMeltEffect=!0;this.usePixelPosition=this.usePositionFixed=this.useTwinkleEffect=!1;this.freezeOnBlur=!0;this.flakeRightOffset=this.flakeLeftOffset=0;this.flakeHeight=this.flakeWidth=8;this.vMaxX=5;this.vMaxY=4;this.zIndex=0;var a=this,q,m=navigator.userAgent.match(/msie/i),E=navigator.userAgent.match(/msie 6/i),D=navigator.userAgent.match(/mobile|opera m(ob|in)/i),r=m&&"BackCompat"===f.compatMode||E,h=null,n=null,l=null,p=null,s=null,z=null,A=null,v=1,t=!1,w=!1,
// u;a:{try{f.createElement("div").style.opacity="0.5"}catch(F){u=!1;break a}u=!0}var B=!1,C=f.createDocumentFragment();q=function(){function c(b){g.setTimeout(b,1E3/(a.animationInterval||20))}function d(a){return void 0!==h.style[a]?a:null}var e,b=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.oRequestAnimationFrame||g.msRequestAnimationFrame||c;e=b?function(){return b.apply(g,arguments)}:null;var h;h=f.createElement("div");e={transform:{ie:d("-ms-transform"),
// moz:d("MozTransform"),opera:d("OTransform"),webkit:d("webkitTransform"),w3:d("transform"),prop:null},getAnimationFrame:e};e.transform.prop=e.transform.w3||e.transform.moz||e.transform.webkit||e.transform.ie||e.transform.opera;h=null;return e}();this.timer=null;this.flakes=[];this.active=this.disabled=!1;this.meltFrameCount=20;this.meltFrames=[];this.setXY=function(c,d,e){if(!c)return!1;a.usePixelPosition||w?(c.style.left=d-a.flakeWidth+"px",c.style.top=e-a.flakeHeight+"px"):r?(c.style.right=100-100*
// (d/h)+"%",c.style.top=Math.min(e,s-a.flakeHeight)+"px"):a.flakeBottom?(c.style.right=100-100*(d/h)+"%",c.style.top=Math.min(e,s-a.flakeHeight)+"px"):(c.style.right=100-100*(d/h)+"%",c.style.bottom=100-100*(e/l)+"%")};this.events=function(){function a(c){c=b.call(c);var d=c.length;e?(c[1]="on"+c[1],3<d&&c.pop()):3===d&&c.push(!1);return c}function d(a,b){var c=a.shift(),d=[f[b]];if(e)c[d](a[0],a[1]);else c[d].apply(c,a)}var e=!g.addEventListener&&g.attachEvent,b=Array.prototype.slice,f={add:e?"attachEvent":
// "addEventListener",remove:e?"detachEvent":"removeEventListener"};return{add:function(){d(a(arguments),"add")},remove:function(){d(a(arguments),"remove")}}}();this.randomizeWind=function(){var c;c=k(a.vMaxX,0.2);z=1===parseInt(k(2),10)?-1*c:c;A=k(a.vMaxY,0.2);if(this.flakes)for(c=0;c<this.flakes.length;c++)this.flakes[c].active&&this.flakes[c].setVelocities()};this.scrollHandler=function(){var c;p=a.flakeBottom?0:parseInt(g.scrollY||f.documentElement.scrollTop||(r?f.body.scrollTop:0),10);isNaN(p)&&
// (p=0);if(!t&&!a.flakeBottom&&a.flakes)for(c=0;c<a.flakes.length;c++)0===a.flakes[c].active&&a.flakes[c].stick()};this.resizeHandler=function(){g.innerWidth||g.innerHeight?(h=g.innerWidth-16-a.flakeRightOffset,l=a.flakeBottom||g.innerHeight):(h=(f.documentElement.clientWidth||f.body.clientWidth||f.body.scrollWidth)-(!m?8:0)-a.flakeRightOffset,l=a.flakeBottom||f.documentElement.clientHeight||f.body.clientHeight||f.body.scrollHeight);s=f.body.offsetHeight;n=parseInt(h/2,10)};this.resizeHandlerAlt=function(){h=
// a.targetElement.offsetWidth-a.flakeRightOffset;l=a.flakeBottom||a.targetElement.offsetHeight;n=parseInt(h/2,10);s=f.body.offsetHeight};this.freeze=function(){if(a.disabled)return!1;a.disabled=1;a.timer=null};this.resume=function(){if(a.disabled)a.disabled=0;else return!1;a.timerInit()};this.toggleSnow=function(){a.flakes.length?(a.active=!a.active,a.active?(a.show(),a.resume()):(a.stop(),a.freeze())):a.start()};this.stop=function(){var c;this.freeze();for(c=0;c<this.flakes.length;c++)this.flakes[c].o.style.display=
// "none";a.events.remove(g,"scroll",a.scrollHandler);a.events.remove(g,"resize",a.resizeHandler);a.freezeOnBlur&&(m?(a.events.remove(f,"focusout",a.freeze),a.events.remove(f,"focusin",a.resume)):(a.events.remove(g,"blur",a.freeze),a.events.remove(g,"focus",a.resume)))};this.show=function(){var a;for(a=0;a<this.flakes.length;a++)this.flakes[a].o.style.display="block"};this.SnowFlake=function(c,d,e){var b=this;this.type=c;this.x=d||parseInt(k(h-20),10);this.y=!isNaN(e)?e:-k(l)-12;this.vY=this.vX=null;
// this.vAmpTypes=[1,1.2,1.4,1.6,1.8];this.vAmp=this.vAmpTypes[this.type]||1;this.melting=!1;this.meltFrameCount=a.meltFrameCount;this.meltFrames=a.meltFrames;this.twinkleFrame=this.meltFrame=0;this.active=1;this.fontSize=10+10*(this.type/5);this.o=f.createElement("div");this.o.innerHTML=a.snowCharacter;a.className&&this.o.setAttribute("class",a.className);this.o.style.color=a.snowColor;this.o.style.position=t?"fixed":"absolute";a.useGPU&&q.transform.prop&&(this.o.style[q.transform.prop]="translate3d(0px, 0px, 0px)");
// this.o.style.width=a.flakeWidth+"px";this.o.style.height=a.flakeHeight+"px";this.o.style.fontFamily="arial,verdana";this.o.style.cursor="default";this.o.style.overflow="hidden";this.o.style.fontWeight="normal";this.o.style.zIndex=a.zIndex;C.appendChild(this.o);this.refresh=function(){if(isNaN(b.x)||isNaN(b.y))return!1;a.setXY(b.o,b.x,b.y)};this.stick=function(){r||a.targetElement!==f.documentElement&&a.targetElement!==f.body?b.o.style.top=l+p-a.flakeHeight+"px":a.flakeBottom?b.o.style.top=a.flakeBottom+
// "px":(b.o.style.display="none",b.o.style.top="auto",b.o.style.bottom="0%",b.o.style.position="fixed",b.o.style.display="block")};this.vCheck=function(){0<=b.vX&&0.2>b.vX?b.vX=0.2:0>b.vX&&-0.2<b.vX&&(b.vX=-0.2);0<=b.vY&&0.2>b.vY&&(b.vY=0.2)};this.move=function(){var c=b.vX*v;b.x+=c;b.y+=b.vY*b.vAmp;b.x>=h||h-b.x<a.flakeWidth?b.x=0:0>c&&b.x-a.flakeLeftOffset<-a.flakeWidth&&(b.x=h-a.flakeWidth-1);b.refresh();l+p-b.y+a.flakeHeight<a.flakeHeight?(b.active=0,a.snowStick?b.stick():b.recycle()):(a.useMeltEffect&&
// (b.active&&3>b.type&&!b.melting&&0.998<Math.random())&&(b.melting=!0,b.melt()),a.useTwinkleEffect&&(0>b.twinkleFrame?0.97<Math.random()&&(b.twinkleFrame=parseInt(8*Math.random(),10)):(b.twinkleFrame--,u?b.o.style.opacity=b.twinkleFrame&&0===b.twinkleFrame%2?0:1:b.o.style.visibility=b.twinkleFrame&&0===b.twinkleFrame%2?"hidden":"visible")))};this.animate=function(){b.move()};this.setVelocities=function(){b.vX=z+k(0.12*a.vMaxX,0.1);b.vY=A+k(0.12*a.vMaxY,0.1)};this.setOpacity=function(a,b){if(!u)return!1;
// a.style.opacity=b};this.melt=function(){!a.useMeltEffect||!b.melting?b.recycle():b.meltFrame<b.meltFrameCount?(b.setOpacity(b.o,b.meltFrames[b.meltFrame]),b.o.style.fontSize=b.fontSize-b.fontSize*(b.meltFrame/b.meltFrameCount)+"px",b.o.style.lineHeight=a.flakeHeight+2+0.75*a.flakeHeight*(b.meltFrame/b.meltFrameCount)+"px",b.meltFrame++):b.recycle()};this.recycle=function(){b.o.style.display="none";b.o.style.position=t?"fixed":"absolute";b.o.style.bottom="auto";b.setVelocities();b.vCheck();b.meltFrame=
// 0;b.melting=!1;b.setOpacity(b.o,1);b.o.style.padding="0px";b.o.style.margin="0px";b.o.style.fontSize=b.fontSize+"px";b.o.style.lineHeight=a.flakeHeight+2+"px";b.o.style.textAlign="center";b.o.style.verticalAlign="baseline";b.x=parseInt(k(h-a.flakeWidth-20),10);b.y=parseInt(-1*k(l),10)-a.flakeHeight;b.refresh();b.o.style.display="block";b.active=1};this.recycle();this.refresh()};this.snow=function(){var c=0,d=null,e,d=0;for(e=a.flakes.length;d<e;d++)1===a.flakes[d].active&&(a.flakes[d].move(),c++),
// a.flakes[d].melting&&a.flakes[d].melt();c<a.flakesMaxActive&&(d=a.flakes[parseInt(k(a.flakes.length),10)],0===d.active&&(d.melting=!0));a.timer&&q.getAnimationFrame(a.snow)};this.mouseMove=function(c){if(!a.followMouse)return!0;c=parseInt(c.clientX,10);c<n?v=-2+2*(c/n):(c-=n,v=2*(c/n))};this.createSnow=function(c,d){var e;for(e=0;e<c;e++)if(a.flakes[a.flakes.length]=new a.SnowFlake(parseInt(k(6),10)),d||e>a.flakesMaxActive)a.flakes[a.flakes.length-1].active=-1;a.targetElement.appendChild(C)};this.timerInit=
// function(){a.timer=!0;a.snow()};this.init=function(){var c;for(c=0;c<a.meltFrameCount;c++)a.meltFrames.push(1-c/a.meltFrameCount);a.randomizeWind();a.createSnow(a.flakesMax);a.events.add(g,"resize",a.resizeHandler);a.events.add(g,"scroll",a.scrollHandler);a.freezeOnBlur&&(m?(a.events.add(f,"focusout",a.freeze),a.events.add(f,"focusin",a.resume)):(a.events.add(g,"blur",a.freeze),a.events.add(g,"focus",a.resume)));a.resizeHandler();a.scrollHandler();a.followMouse&&a.events.add(m?f:g,"mousemove",a.mouseMove);
// a.animationInterval=Math.max(20,a.animationInterval);a.timerInit()};this.start=function(c){if(B){if(c)return!0}else B=!0;if("string"===typeof a.targetElement&&(c=a.targetElement,a.targetElement=f.getElementById(c),!a.targetElement))throw Error('Snowstorm: Unable to get targetElement "'+c+'"');a.targetElement||(a.targetElement=f.body||f.documentElement);a.targetElement!==f.documentElement&&a.targetElement!==f.body&&(a.resizeHandler=a.resizeHandlerAlt,a.usePixelPosition=!0);a.resizeHandler();a.usePositionFixed=
// a.usePositionFixed&&!r&&!a.flakeBottom;if(g.getComputedStyle)try{w="relative"===g.getComputedStyle(a.targetElement,null).getPropertyValue("position")}catch(d){w=!1}t=a.usePositionFixed;h&&(l&&!a.disabled)&&(a.init(),a.active=!0)};a.autoStart&&a.events.add(g,"load",y,!1);return this}(window,document);
// };

// // LEMPUTES

// function startLights() {
// 	var home = document.getElementsByTagName('body')[0];
// 	var lightList = document.createElement('ul');
// 	lightList.setAttribute('class', 'lightrope');
// 	for (let i = 0; i<10; i++) {
// 		lights = document.createElement('li');
// 		home.appendChild(lightList).appendChild(lights);
// 	}
// }
// //startLights();

// function startSparks() {
// 	var home = document.getElementsByTagName('body')[0];
// 	var canvas = document.createElement('canvas');
// 	canvas.setAttribute('id', 'display');
// 	home.appendChild(canvas);
// 	var DAMPING = 0.999;
	 
// 	      function Particle(x, y) {
// 	        this.x = this.oldX = x;
// 	        this.y = this.oldY = y;
// 	      }
	 
// 	      Particle.prototype.integrate = function() {
// 	        var velocityX = (this.x - this.oldX) * DAMPING;
// 	        var velocityY = (this.y - this.oldY) * DAMPING;
// 	        this.oldX = this.x;
// 	        this.oldY = this.y;
// 	        this.x += velocityX;
// 	        this.y += velocityY;
// 	      };
	 
// 	      Particle.prototype.attract = function(x, y) {
// 	        var dx = x - this.x;
// 	        var dy = y - this.y;
// 	        var distance = Math.sqrt(dx * dx + dy * dy);
// 	        this.x += dx / distance;
// 	        this.y += dy / distance;
// 	      };
	 
// 	      Particle.prototype.draw = function() {
// 	        ctx.strokeStyle = '#ffffff';
// 	        ctx.lineWidth = 2;
// 	        ctx.beginPath();
// 	        ctx.moveTo(this.oldX, this.oldY);
// 	        ctx.lineTo(this.x, this.y);
// 	        ctx.stroke();
// 	      };
	 
// 	      var display = document.getElementById('display');
// 	      var ctx = display.getContext('2d');
// 	      var particles = [];
// 	      var width = display.width = window.innerWidth;
// 	      var height = display.height = window.innerHeight;
// 	      var mouse = { x: width * 0.5, y: height * 0.5 };
	 
// 	      for (var i = 0; i < 200; i++) {
// 	        particles[i] = new Particle(Math.random() * width, Math.random() * height);
// 	      }
	 
// 	      display.addEventListener('mousemove', onMousemove);
	 
// 	      function onMousemove(e) {
// 	        mouse.x = e.clientX;
// 	        mouse.y = e.clientY;
// 	      }
	 
// 	      requestAnimationFrame(frame);
	 
// 	      function frame() {
// 	        requestAnimationFrame(frame);
// 	        ctx.clearRect(0, 0, width, height);
// 	        for (var i = 0; i < particles.length; i++) {
// 	          particles[i].attract(mouse.x, mouse.y);
// 	          particles[i].integrate();
// 	          particles[i].draw();
// 	        }
// 	      }
// }

// startSparks();

// P R O G R E S S C I R C L E ------------------------------------------------------------

var progressBars = document.getElementsByClassName('progressCircle');
for (let i = 0; i<progressBars.length; i++) {
	var bar = new ProgressBar.Circle(progressBars[i], {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#00a99d', width: 4 },
	  to: { color: '#00a99d', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value + "%");
	    }

	  }
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2rem';
	bar.text.style.fontWeight = '600';

	var value = document.getElementsByClassName('progressCircle')[i].textContent;
	//console.log(value.parentNode);
	bar.animate(value/100);  // Number from 0.0 to 1.0
}
