const countryData : Record<string, string[]> = { 
  Brazil : ["Rio de Janerio", "Salvador", "Sao Paulo"], 
  Germany : ["Berlin", "Frankfurt" , "Munich"],
  India : ["Bengaluru","Chennai","Delhi"],
  USA : ["Denver","New York","San Francisco"],
};

  const countryObjKeys  = Object.keys(countryData)
  const keyCount = countryObjKeys.length;
  console.log(countryObjKeys[1]);

/* const keys = Object.keys(countryData);
for (const key of keys){
    console.log(`key: ${key}`)
    console.log(countryData[key]);
} */

/* const array1 = ["Rio de Janerio", "Salvador", "Sao Paulo"];
const array2 = ["Rio de Janerio", "Salvador", "Sao Paulo"];

const areEqual = array1.length === array2.length && 
                 array1.every((val, index) => val === array2[index]);

console.log(areEqual); */