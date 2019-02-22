var totalRequests;

var states = [1, 2, 3];
//average reply time 
const avgReplyTime = () => {
    var totalReplyTime;

    var avgReplyTime = totalReplyTime/totalRequests; 

    print(avgReplyTime, states[0]);                                                
}

//average time to resolution
const avgResTime = () => {
	var totalResTime;

	var avgResTime = totalResTime/totalRequests;

  print(avgResTime, states[1]);
}

//resolution rate, how many requests were solved?
const resRate = () => {
	var resolvedRequest;
	var supportRequest;

	var resRate = resolvedRequest/supportRequest;

  print(resRate, states[2]);
}

function print(output, state) {
  switch(state) {
    case 1:

    console.log("The average reply time is ", output);

    break;

    case 2:

    console.log("The average time it takes to resolve an issue is ", output);

    break;

    case 3:

    console.log("There were ", output, " requests solved");
    
    break;
  }
}

function main() {
	avgReplyTime();
	avgResTime();
	resRate();
}

var run = main();
