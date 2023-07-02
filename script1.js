function Umesh(){
    var x = localStorage.getItem('data');
    var obj = JSON.parse(x);
    var name = $("#search").val();
    
    $(".container1").empty();
    $.each(obj, function( index, value ) {
        if(name == obj[index]['Fname'])
        {
            var fname= value['Fname'];
            $(".start").append(fname[0]);
            $(".start").css(
                
                    {
                      "position": "absolute",
                      "font-size": "50px",
                      "font-weight": "700",
                      "margin-left": "20px"
                    }
            )
            $("#box_div").css(
                
                {
                    "height": "80px",
                    "width": "80px",
                    "background-color": "orange",
                    "float": "center",
                    "border-radius": "50%",
                    "position":"relative"
                    }
            )
            $(".fname").append(value['Fname']);
            $(".lname").append(value['Lname']);
            $(".email").append(value['Email']);
            $(".address").append(value['Address']);
            $(".contact").append(value['Contact']);

            $(".city").append(value['City']+",");
            $(".state").append(value['State']+",");
            $(".country").append(value['Country']+",");
            
            
            var specialization = value['Subject_name'];
            specialization.forEach(element => {
                
                $(".specialization").append(element+"<br>");
  
            });
            
            
            var topic_name = value['Topic_name'];
            topic_name.forEach(element => {
                $(".topic_name").append(element+"<br>");
                
                
            });

   
            
        }
            
    });

    

    $(".export").click(function(){
        const fileBlob = new Blob([x], { type: 'application/json' });

        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(fileBlob);
        downloadLink.download = 'sorted_file.json';
        downloadLink.click();

    });

}


