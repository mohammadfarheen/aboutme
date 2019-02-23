function circumference(input1){
    radius=input1;
    let circumferenceOfCircle;
        if(radius<0){
   circumferenceOfCircle=0;

    }
        else if(radius>250){
        circumferenceOfCircle=0;

     }
        else{
        circumferenceOfCircle=2*(3.14)*(radius)
    }
   return circumferenceOfCircle;

}

