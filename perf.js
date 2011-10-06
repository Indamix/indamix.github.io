/**

	Function profiler
	
	Author: Indamix

	Empty function run
		perf(function(){}, [], 1e6);
	returns 
		~ 0.000837 ms in FF 3.6    @ MBA 1.1 Core2Duo 1.86 GHz
		~ 0.000055 ms in FF 6.0.2  @ iMac i5 2.8 GHz
		~ 0.000024 ms in Chrome 14 @ iMac i5 2.8 GHz
*/

function perf(fn, params, times){
	times = times || 1e4;
	params = params || [];
	for (var _this = this,
			 _params = params,
			 i = times,
			 f = fn,
			 time = (new Date).getTime();
			 i--;)
		f.apply(_this, _params);

	time = ((new Date).getTime() - time) / times
	window.console && console.log(fn.name + ':', time, 'ms');
	return time;
}
/*

Example:

function eq2(){
	return 1 == '1';
}

function eq3(){
	return 1 === '1';
}

console.log(
	'"===" is', 
	perf(eq2, [], 1e7) / perf(eq3, [], 1e7)
	,' times faster, than "=="'
);

//*/