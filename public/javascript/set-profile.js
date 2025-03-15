document.getElementById("profile-form").addEventListener("submit", async(event)=>{
    event.preventDefault();
    const name= document.getElementById("name").value;
    const nationality=document.getElementById("nationality").value;
    const gender=document.querySelector('input[name="gender"]:checked').value;
    try{    
        await axios.post("/profile-setup", {name, nationality, gender});
        window.location.href="/account";
    }catch(e){
        console.log("error while creating profile", e);
    }
})
