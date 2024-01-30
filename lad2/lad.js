const stampPrice = 30;
const pillowPrice = 1500;
const emmaStamp = 33;
let emma = 0;

if (emmaStamp >= 50) {
  console.log("You get pillow");
} else if (emmaStamp < 50) {
  emma = (50 - emmaStamp) * 30 + 1;
  console.log("You need " + emmaNeed + " bath");
}