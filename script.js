$(document).ready(function(){
    $("#add_specializaion").click(function(){
        var row = `<div class="temp">

        <input type="text" class="form-control" name="subject_name" id="subject_name" placeholder="Subject Name">

        <div class="row topic  ">
            <div class="col-2">
                <input type="text" class="form-control" name="topic-name" placeholder="Topic Name" >
            </div>
            <div class="col-2">
                <input type="text" class="form-control" name="grades" placeholder="Grades">
            </div>
            <div class="col-2">
                <button type="button" id="delete_topic" onclick="remove_topic(this)" class="btn btn-info">Delete topic</button>
            </div>
        </div>
        <button type="button" id="add_topic" class="btn btn-info">add topic</button>


        <button type="button" id="delete_specializaion" onclick="removeRow(this)" class="btn btn-info">Delete specialization</button>

    </div>`;
            $("#specialization").append(row);
    });
});
$(document).on("click","#add_topic", function(){
    var topic = `
    <div class="row topic1 mt-2">
    <div class="col-2">
        <input type="text" class="form-control" name="topic_name" >
    </div>
    <div class="col-2">
        <input type="text" class="form-control" name="grades" >
    </div>
    <div class="col-2">
        <button type="button" id="delete_topic" onclick="remove_topic(this)" class="btn btn-info">Delete topic</button>
    </div>
</div>
`;
    $(this).parent().find(".topic").append(topic);
});
function remove_topic(elmt)
{
    elmt.closest('.topic').remove();
}
function removeRow(elmt)
{
        elmt.closest('.temp').remove();
}

var fulljson =[];
function save_student(){
    var fname = $("#fname").val();
    var lanme = $("#lname").val();
    var email = $("#email").val();
    var contact = $("#contact").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var country = $("#country").val();
    var bdate = $("#bdate").val();
    var gender = $("input[name=gender]:checked").val();
    var hobbies = [];
        $.each($("input[name='hobbies']:checked"), function(){
        hobbies.push($(this).val());
        });
    
    var subject_name = [];
        $("input[name='subject_name']").each(function() {
            subject_name.push($(this).val());
        });

    var topic_name=[];
        $("input[name='topic_name']").each(function() {
            topic_name.push($(this).val());
        });

    var grades=[];
        $("input[name='grades']").each(function() {
            grades.push($(this).val());
        });


    jsonObject = {
        "Fname":"",
        "Lname":"",
        "Email":"",
        "Contact":"",
        "Address":"",
        "City":"",
        "State":"",
        "Country":"",
        "Bdate":"",
        "Gender":"",
        "Hobbies":"",
        "Subject_name":"",
        "Topic_name":"",
        "Grades":"",
    }
    jsonObject.Fname = fname;
    jsonObject.Lname = lanme;
    jsonObject.Email = email;
    jsonObject.Contact = contact;
    jsonObject.Address = address;
    jsonObject.City = city;
    jsonObject.State = state;
    jsonObject.Country = country;
    jsonObject.Bdate = bdate;
    jsonObject.Gender = gender;
    jsonObject.Hobbies = hobbies;
    jsonObject.Subject_name = subject_name;
    jsonObject.Topic_name = topic_name;
    jsonObject.Grades = grades;

    fulljson.push(jsonObject);
    var obj = JSON.stringify(fulljson);
    console.log(obj);
    localStorage.setItem('data', obj);
    
   

    if (window.confirm('Successfully registered ')) 
    {
            window.location.href='student.html';
    };

    
    
    

    

    
    

    // let container = document.getElementById("container1");
    // let table = document.createElement("table");
    // let cols = Object.keys(obj[0]);
    
    // let thead = document.createElement("thead");
    // let tr = document.createElement("tr");
    // cols.forEach((item) => {
    //     let th = document.createElement("th");
    //     th.innerText = item; 
    //     tr.appendChild(th); 

    //     thead.appendChild(tr); 
    //     table.append(tr)

    //     obj.forEach((item) => {
    //         let tr = document.createElement("tr");
    //         let vals = Object.values(item);

    //         vals.forEach((elem) => {
    //             let td = document.createElement("td");
    //             td.innerText = elem; 
    //             tr.appendChild(td); 
    //         });
    //         table.appendChild(tr); 
    //      });
    //      container.appendChild(table)
            
    //  });
    
    
    
    

//     let container = $("#container");
//     let table = $("<table>");
//     let cols = Object.keys(obj[0]);
//     let thead = $("<thead>");
//     let tr = $("<tr>");

//     $.each(cols, function(i, item){
//         let th = $("<th>");
//         th.text(item); 
//         tr.append(th); 
//      });
//      thead.append(tr); 
//      table.append(tr)

//      $.each(obj, function(i, item){
//         let tr = $("<tr>");
    
//     let vals = Object.values(item);

//     $.each(vals, (i, elem) => {
//         let td = $("<td>");
//         td.text(elem); 
//         tr.append(td); 
//      });
//      table.append(tr); 
//   });
//   container.append(table)


    

}