function testGS(){

    const url = "https://script.google.com/macros/s/AKfycbzBWRjEl0P8StZzXAmgZZ_vh_yWOiFyMygo7EnEpNgXtryObh4/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {

                document.getElementById("app").textContent = d[0].status;

        });

}

document.getElementById("btn").addEventListener("click",testGS);
