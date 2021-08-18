const currencyoneel = document.getElementById('currency-one'),
    amountoneel = document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two'),
    amounttwoel = document.getElementById('amount-two');

const swapel = document.getElementById('swap'),
    rateel = document.getElementById('rate');


function calculate(){
    // console.log('hay');

    const cryone = currencyoneel.value;
    const crytwo = currencytwoel.value;

    // const amtone = amountoneel.value;
    // const amttwo = amounttwoel.value;

    // console.log(crytwo);
    // console.log(amtone,amttwo);

    const apikey =  '46f18d3649844b2503942586';
    const uri = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${cryone}`;
    

    //AJAX Request

    fetch(uri)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data));

        // console.log(data.conversion_rates);
        // console.log(typeof data.conversion_rates);
        // console.log(data.conversion_rates[crytwo]);

        const rate = data.conversion_rates[crytwo];
        // console.log(rate);
        rateel.innerHTML  = `1 ${cryone} = ${rate} ${crytwo}`;

        amounttwoel.value = (amountoneel.value * rate).toFixed(2);
    });


}

//Event Listener
currencyoneel.addEventListener('change',calculate);
amountoneel.addEventListener('input',calculate);

currencytwoel.addEventListener('change',calculate);
amounttwoel.addEventListener('input',calculate);

swapel.addEventListener('click',()=>{
    // console.log('already swap');

    const temp = currencyoneel.value;

    currencyoneel.value = currencytwoel.value;
    currencytwoel.value = temp;

    calculate();

})

