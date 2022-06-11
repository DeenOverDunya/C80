studentarray=[];
function submit()
{
var display_student_array=[]
for (var j=1; j<=4; j++)
{
var nameofstudent=document.getElementById("name_of_the_student_"+j).value;
console.log(nameofstudent);
studentarray.push(nameofstudent);
}
console.log(studentarray);
var lengthofstudentarray=studentarray.length;
console.log(lengthofstudentarray);

for (var k=0; k<lengthofstudentarray;k++)
{
display_student_array.push("<h4> name- "+studentarray[k]+"</h4>")
console.log(display_student_array)
}
console.log(display_student_array)
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var removecommas=display_student_array.join(" ");
console.log(removecommas);
document.getElementById("display_name_without_commas").innerHTML=removecommas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";


}
function sorting()
{
studentarray.sort();
console.log(studentarray);
var studentarraysorting=[];
var lengthofstudentarray=studentarray.length;
console.log(lengthofstudentarray);
for (var k=0; k<lengthofstudentarray;k++)
{
studentarraysorting.push("<h4> name- "+studentarray[k]+"</h4>")
console.log(studentarraysorting)
}
var removecommas=studentarraysorting.join("")
console.log(removecommas);
document.getElementById("display_name_without_commas").innerHTML=removecommas;

}
