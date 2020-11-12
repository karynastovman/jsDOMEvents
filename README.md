css task3
* {
    box-sizing: border-box;
}



.container {
    width: 75%;
    height: 65vh;
    margin: 0 auto;
}

.boxes {
    background-color: rgb(236, 232, 235);
    height: 300px;
    width: 300px;
    margin: 0 auto;
    font-size: 0;
}

.boxes > div {
    width: 100px;
    height:100px;
    padding: 0;
    margin: 0 auto;
    border-radius: 50%;
  
    color: white;
}


.First{
    height: 200px;
    width: 200px;
    background-color: red;
    border-radius: 50%;
}

.First {
    font-size: 3.5rem;
    line-height: 1.3;
    position: relative;
    
}



.Second {    
    color: black;
    text-decoration: none;
    padding: 0rem;
    background-color: yellow; 
}

.Three {
    color: black;
    text-decoration: none;
    padding: 0rem;
    background-color: rgb(81, 255, 0);
}

.boxes > div {
    margin: auto;
    color: white;
}


html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/task3.css">
    <title>Task 3</title>
</head>
<body>


        

        <div class="container">
            <div class="boxes">
            <div class="First"></div>
            <div class="Second"></div>
            <div class="Three"></div>
        </div>
        </div>
        
    
    <script src="js/task3.js"></script>
</body>
</html>
