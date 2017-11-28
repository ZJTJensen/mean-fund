function zero_negativity(arr){
    for (i = 0; i < arr.length; i++){
        if(arr[i]<0){
            return false;
        }
    }
    return true;
}

function is_even(num){
    if(num % 2 == 0){
        return true;
    }
    return false;
}

function how_many_even(arr){
    counter = 0; 
    for( i = 0; i< arr.length; i++){
        if(num % 2 == 0){
            counter += 1;
        }
    }
    return counter;
}

function create_dummy_array(n){
    new_arr=[]
    for (i=0; i < n; i++){
        arr.push((Math.random()*10))
    }
    return new_arr;
}

function random_choice(arr){
    arr_random = Math.random()*arr;
    num = Math.ceil(arr_ranod);
    return arr[num];
}