let number = [
    1,2,3,4,5,6,7,8,9,10
]

for(let i = 2; i < number.length; i++) {
    if(number%i==0){
        console.log('prime number is ',i)
    }
}