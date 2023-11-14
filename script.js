const byteSize = (str) => {
  // write your code her
	let d=new Blob([str],{ type: "text/plain" });
	// console.log(d.size);=
	return d.size;
};

// Do not change the code below/
const str = prompt("Enter some string.");
alert(byteSize(str));
