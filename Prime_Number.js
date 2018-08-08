var arr = [1,2,3,6,22,98,45,23,22,12];

for (let i = 2; i < arr; i++) {
    if ((arr[i]%i== 0) ){
        console.log(`${arr[i]} is Prime number`)
    }
    else
    {
        console.log(`${arr[i]} is Not Prime number`)
    }
    
}