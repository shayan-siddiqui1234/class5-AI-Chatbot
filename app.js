function docheck() {

let num1 =  document.querySelector("#no1").value

num1 = Number(num1)
console.log(num1)

let resu = num1%2;

console.log(resu)

document.querySelector("#result").innerHTML = "This is the Answer ["+resu+"];";

}

function dowork() {

    let num2 =  document.querySelector("#no2").value
    
    num2 = Number(num2)
    console.log(num2)
    
    let resul = num2 >= 0;;
    
    console.log(resul)
    
    document.querySelector("#resul").innerHTML = "This is the Answer ["+resul+"];";
    
    }
    function leapyear() {

        let num3 =  document.querySelector("#no3").value
        
        num3 = Number(num3)
        console.log(num3)
        
        let result1 = num3**4 === 0;;
        
        console.log(result1)
        
        document.querySelector("#result1").innerHTML = "This is the Answer ["+result1+"];";
        
        }
        function sqrt() {

            let num4 =  document.querySelector("#no4").value
            
            num4 = Number(num4)
            console.log(num4)
            
            let result2 = num4 * num4;
            
            console.log(result2)
            
            document.querySelector("#result2").innerHTML = "After Square  ["+result2+"];";
            
            }
            function sqrt1() {

                let num5 =  document.querySelector("#no5").value
                
                num5 = Number(num5)
                console.log(num5)
                
                let result3 = Math.sqrt(num5);
                
                console.log(result3)
                
                document.querySelector("#result3").innerHTML = "After Square Root ["+result3+"];";
                
                }