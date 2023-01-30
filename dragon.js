var myClick = document.getElementById("spHold");

    myClick.addEventListener("click", myFunction);
    let intCounter = 0 ;
    function myFunction() {
        intCounter = intCounter + 1;
        document.getElementById('lblCounter').innerHTML = intCounter;
        if (intCounter == 1){
            document.getElementById('lblTextCounter2').innerHTML = "time.";
        } else  {
                document.getElementById('lblTextCounter2').innerHTML = "times.";
        }
    }