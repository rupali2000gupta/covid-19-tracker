const APIURL = "https://corona.lmao.ninja/v2/countries/india";
async function getRecords(url){
  const  response = await fetch(url);
  const resdata = await response.json();
  console.log(resdata);
  showRecords(resdata);
}
getRecords(APIURL);

function showRecords(record){
   // console.log(record);
   document.getElementById("main").innerHTML=
   `
   <h2>cases</h2>
   <div>
   <h3>Total cases</h3>
   <div>${record.cases}</div>
   </div>
   <h3>Today death cases</h3>
   <div>
   <h3> total recover</h3>
   <div>${record.recovered}</div>
   </div>
   <div>
   <h3> total deaths</h3>
   <div>${record.deaths}</div>
   </div>

   `
}