
function Check(obj1){
   
    obj1.setter = function(){
      
      console.log(obj1.name);
      
    };
 }

 function Check(obj1) {
    if(obj1["salary"]>=500000)
  return "Dream";
  else
  return "NotDream";
}




function Check(obj1){

    let p = Object.keys(obj1);
         if (p.length === 0){
           
           return "false";
         }
         
         else {
           
           return "true";
         }
 
 }




 function Check(obj1,obj2) {
  
    const obj3 =  Object.assign(obj1,obj2);
    
    return obj3;   
}





function Check(a,obj1) {

    obj1.id = a* (obj1.id)
       obj1.houseno = a* (obj1.houseno)
       return obj1;
   }

   function Check(obj1) {
     
    return(obj1.p1+obj1.p2+obj1.p3);
}




function check(obj1,a,b) {
    if(obj1.name === a && obj1.id === b){
      return true;
    }  
    else{
      return false;
    }
  };

  

  function Check(obj1) {
    delete obj1.rollno; 
    return true;
}
