let loginForm = document.getElementById('myForm');
loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let contact = document.getElementById('contact').value;
  let address = document.getElementById('address').value;
  let job = document.getElementById('job').value;
  let resume = document.getElementById('resume').value;
  if(!name || !email || !contact || !address || !job || !resume )
  {
    let errorMsg = document.querySelector('.errorMsg');
    errorMsg.textContent ='Please add all input value*'
  } else {
    let succssMsg = document.querySelector(".successMsg");
    succssMsg.textContent= "Form submitted successfully";
    loginForm.reset(); // Clear the form fields
    let showsData = document.querySelector(".datas");

    showsData.innerHTML = `
    Name: <strong>
     ${name}</strong> <br>
     Email:
     <strong>${email}</strong> <br> 
     Contact:
     <strong>${contact}</strong><br>
     Address:
     <strong>${address}</strong><br>
     Job:
     <strong>${job}</strong><br>
     Resume:
     <strong>${resume}</strong><br>
    `;
  }
  //console.log(name, email, contact, address, job, resume);
})