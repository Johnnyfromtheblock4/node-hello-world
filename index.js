let param;
if (process.argv[2] != undefined) {
  param = process.argv[2];
} else {
  param = "World";
}
console.log(`Hello ${param}`);

// FORMA CONTRATTA
// let param = porocess.argv[2] != undefined ? process.argv[2] : "World";
// console.log(`Hello ${param}`);