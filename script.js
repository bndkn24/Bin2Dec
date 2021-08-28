const inVal = document.querySelector(".inVal");
const outVal = document.querySelector(".outVal");
const issue = document.querySelector(".issue");


document.querySelector(".convert").addEventListener("click", (event) => {
	let ans = Bin2Dec(inVal.value);
	outVal.value = ans;
});

function Bin2Dec(num){
	if(num === "")
		return 0;
	if (num.match("^[01]+$")) {
		return num[0] * Math.pow(2,num.length - 1) + Bin2Dec(num.substring(1));
	}
	else{
		issue.innerHTML = "Enter only 0's and 1's";
		inVal.value = "";
		return "";
	}
	
}
