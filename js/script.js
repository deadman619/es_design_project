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
