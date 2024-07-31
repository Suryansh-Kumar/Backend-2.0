// ? forEach, map, filter, find, indexof
let arr = [1, 2, 3, 4];
arr.forEach(function (val) {
	console.log(val + " hello");
});

let new_arr_1 = arr.map(function (val) {
	return val * 3;
});

console.log(new_arr_1);

let new_arr_2 = arr.filter(function (val) {
	if (val >= 3) {
		return true;
	} else {
		return false;
	}
});
console.log(new_arr_2);

let new_arr_3 = arr.find(function (val) {
	if (val == 2) {
		return val;
	}
});

console.log(new_arr_3);

// ? Objects
let obj = {
	name: "John",
	age: 30,
	isMarried: false,
};
Object.freeze(obj);
console.log(obj["name"]);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj.age);

obj.age = 25; // ? Won't work because we freezed the object in line 36

console.log(obj["age"]);
console.log(obj.age);

// ? Functions

function abcd() {
	return "hello world";
}

let result = abcd();
console.log(result);
console.log(abcd.length); // ? It gives the number of parameters of the function

// ? async js coding
async function fetchApi() {
	let blob = await fetch(`https://randomuser.me/api/`);
	let res = await blob.json();

	console.log(res.results[0].gender);
}

fetchApi();
