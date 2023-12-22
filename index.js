console.log("hello world!");



const prices=[250,645,300,900,50];



for(let price of prices){

    // console.log(price);
    let dis=price*(10/100);
    // console.log(dis);

    price-=dis;
    console.log(price);

}

console.log(` After discounted price = ${prices}`);
