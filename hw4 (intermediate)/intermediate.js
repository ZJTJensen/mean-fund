function starString(n){
    for (i = 0; i < n; i ++){
        console.log('*');
    }
}

function drawStars(arr){
    for (i=0; i < arr; i++){
        string= '';
        for (x = 0; x<arr[i]; x++){
            string += '*';
        }
        console.log(string);
    }
}

function drawStars(arr){
    for (i=0; i < arr; i++){
        string = "";
        if(typeof i === "string"){
            letter= arr[i].charAt(0)
            for (let j = 0; j < arr[i].length; j++){
                string += letter;
            }
        }
        else{
            for (x = 0; x<arr[i]; x++){
                string += '*';
            }

        }
}
}