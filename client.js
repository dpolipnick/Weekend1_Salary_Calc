console.log('JS is working.');
$(document).ready(readyNow);

class Employee{
    constructor(fName, lName, idNumber, jobTitle, annualSalary){
    this.fName=fName;
    this.lName=lName;
    this.idNumber=idNumber;
    this.jobTitle=jobTitle;
    this.annualSalary=annualSalary;
    }//contructor
}//end Employee class

let employeesArray= [];

function readyNow() {
    console.log('jQuery is working.');
    $('#addButton').on('click', getInfo);
}//end readyNow fuction

function getInfo() {
    event.preventDefault();
    console.log('Button Clicked!');
    let fNameIn=$('#fName').val();
    let lNameIn=$('#lName').val();
    let idNumberIn=$('#idNumber').val();
    let jobTitleIn=$('#jobTitleIn').val();
    let annualSalaryIn=$('#annualSalary').val();
}//end getInfo function
