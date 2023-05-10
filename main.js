var readlineSync = require('readline-sync');
console.log("Welcome to address Book management program");
let people = [];
class AddressBook{
    constructor(){}
    addContact = function() {
        
         person.firstName = readlineSync.question("Enter first Name ?")
         person.lastName = readlineSync.question("Enter last Name ?")
         person.address = readlineSync.question("Enter address ?"),
         person.city= readlineSync.question("Enter City ?"),
         person.state = readlineSync.question("Enter State ?"),
         person.zip = readlineSync.question("Enter Zip ?"),
         person.phoneNumber = readlineSync.question("Enter Phone number ?"),
         person.email =  readlineSync.question("Enter e-mail address ?")
         people.push(person)
          }
}

person = new AddressBook()
person2 = new AddressBook()
person.addContact()
//person2.addContact()
console.log(person)
console.log(person.firstName);
 deleteContact = function() {
		 
    let fName;
    let lName;
    console.log("enter name of person whose contact has to be deleted");
 
    fName = readlineSync.question("Enter first Name to be deleted ?")
    lName = readlineSync.question("Enter last Name  to be deleted?")
    for(let i=0; i<people.length;i++){
        let person = people[i]
        if(person.firstName===fName && person.lastName===lName){
            people.splice(i,1)
            console.log("Contact removed successfully")
        }
        else {
            console.log("contact not matched")
        }
    }
    }
     editContact = function() { 
         let fName;
         let lName;
         fName = readlineSync.question("Enter first Name to be edited ?") 
         lName = readlineSync.question("Enter last Name to be edited ?") 
          let flag =0;
           for(let i = 0; i<people.length;i++) 
           { let person = people[i]
            
        if(person.firstName === fName && person.lastName===lName){ 
            flag =1; 
            
        let choose = readlineSync.questionInt("Enter the number which you want to edit\n1.First Name\n2.Last Name\n3.Address\n4.C\n5.State\n6.Zip\n7.Phone Number\n8.Email"); 
        switch(choose) {
   
        case 1:  firstName= readlineSync.question("Enter first Name ?");
                 console.log("edited successfully"); 
                 break; 
        case 2:
                lastName= readlineSync.question("Enter last Name ?")
                console.log("edited successfully");
                 break;
        case 3:
                 address = readlineSync.question("Enter address ?");
                 console.log("edited successfully");
                 break;
        case 4:
                 city = readlineSync.question("Enter city ?")
                 console.log("edited successfully");
                 break;
        case 5:
                 state = readlineSync.question("Enter State ?")
                 console.log("edited successfully")
                 break;
        case 6:
                 zip = readlineSync.question("Enter Zip ?")
                 console.log("edited successfully");
                 break; 
        case 7:
                 phoneNumber = readlineSync.question("Enter phone Number ?");
                 console.log("edited successfully"); 
                 break;
        case 8:
                 state = readlineSync.question("Enter state ?")
                 console.log("edited successfully"); 
                 break; 
        case 9:
                 email = readlineSync.question("Enter e-mail?");
                 console.log("edited successfully");
                 break;
        default:
                 console.log("entered number is wrong ");
                 }
        }
   
        } if (flag ===0) {
             console.log("address not found")
            }
   
        }
   
        editContact();
        deleteContact();
        
