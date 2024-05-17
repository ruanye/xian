let form =   document.getElementById("myForm")
function formSubmit(){
  let formData = new FormData(myForm);
  console.log(formData.get('height'))
}