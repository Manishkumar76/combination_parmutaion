let n = document.getElementById("input1").value;

let r = document.getElementById("input2").value;

  function fact(a) {
    let fac = 1;
    for (let i = 1; i <= a; i++) {
      fac *= i;
    }
    console.log(fac);
    return fac;
  }


document.getElementById("com").addEventListener("click", function() {
  let ans = (fact(n) / (fact(n - r) * fact(r)));



  document.getElementById("answer").value = ans;
});

