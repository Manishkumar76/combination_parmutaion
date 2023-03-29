let nRef = document.getElementById("input1");
//refernce to both input's 
//if you take the direct value here, it could be possible that we are fetching it before getting it loaded


let rRef = document.getElementById("input2");


function fact(a) {
  let fac = 1;
  for (let i = 1; i <= a; i++) {
    fac *= i;
  }
  console.log(fac);
  return fac;
}


document.getElementById("com").addEventListener("click", function() {
  let n = nRef.value;
  let r = rRef.value;
  //here we are taking value from refernces as the page is loaded completely
  let ans = (fact(n));
  ans = ans / (fact(n - r));
  ans = ans / (fact(r));
  // i have breaked calculation into parts to increase modularity  and reduce error


  // console.log(ans)
  ans = parseInt(ans);
  document.getElementById("answer").value = ans;
});

document.getElementById('par').addEventListener("click", function (){
  let n1= nRef.value;
  let r1= rRef.value;

  let ans1= (fact(n1));
  ans1=ans1/(fact(n1-r1));

  ans1 = parseInt(ans1);
  document.getElementById('answer').value = ans1;
});