function Exercise_Function()    {
    var Exercise_Output;
    var Exercises = document.getElementById("Exercise_Input").value;
    var Exercise_String = " is a great!";
    switch(Exercises)  {
        case "Bench Press":
            Exercise_Output = "Bench Press" + Exercise_String;
        break;
        case "Sqauts":
            Exercise_Output = "Sqauts" + Exercise_String;
        break;
        case "Deadlifts":
            Exercise_Output = "Deadlifts" + Exercise_String;
        break;
        case "Dumbbell Curls":
            Exercise_Output = "Dumbbell Curls" + Exercise_String;
        break;
        case "Barbell Curls":
            Exercise_Output = "Barbell Curls" + Exercise_String;
        break;
        case "Barbell Rows":
            Exercise_Output = "Barbell Rows" + Exercise_String;
        break;
        default:
        Exercise_Output = "Please enter a exercise exactly as written on the above list."
    }
    document.getElementById("Output").innerHTML = Exercise_Output;
}