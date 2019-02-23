function circumference(input1){
    radius=input1;
    let CircumferenceOfCircle;
        if(radius<0){
   CircumferenceOfCircle=0;

    }
        else if(radius>250){
        CircumferenceOfCircle=0;

     }
        else{
        CircumferenceOfCircle=2*(3.14)*(radius)
    }
   return CircumferenceOfCircle;

}
