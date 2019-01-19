
function run(data,weight) {
	var c = 0;
	for (i=0;i<weight.length;i++) {
		c = c + (data[i]*weight[i]);
		}
	var max = 0;
	for (i=0;i<weight.length;i++) {
		max = max + weight[i];
		}
		var res = c;
		if (res>(max/2)) {
			//yes
			return true;
			} else {
				//no 
				return false;
				}
}
var x = run([
	/*jacket,willing,weather*/
		1,
		0,
		1,
	],[1,2,2]);
console.log(x)