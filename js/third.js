console.log("CV screener");

// Data is an array of objects which contains information about the candidates

const data = [
        {
            name: 'Rahul',
            age: 18,
            city: 'Delhi',
            language: 'JavaScript',
            framework: 'React',
            image: 'https://randomuser.me/api/portraits/men/9.jpg',
        },
        {
            name: 'Chandan',
            age: 24,
            city: 'Mumbai',
            language: 'BlockChain',
            framework: 'MongoDB',
            image: 'https://randomuser.me/api/portraits/men/22.jpg',
        },
        {
            name: 'Rohan',
            age: 22,
            city: 'Banglore',
            language: 'Python',
            framework: 'flask',
            image: 'https://randomuser.me/api/portraits/men/48.jpg',
        },
        {
            name: 'Khilesh',
            age: 28,
            city: 'Pune',
            language: 'NodeJS',
            framework: 'Angular',
            image: 'https://randomuser.me/api/portraits/men/45.jpg',
        },
        {
            name: 'Preeti',
            age: 20,
            city: 'Chenai',
            language: 'Java',
            framework: 'React',
            image: 'https://randomuser.me/api/portraits/women/10.jpg',
        },

]

// CV Iterator
function cvIterator(profiles)
{
    let nextIndex = 0;
    return {
        next: function()
        {
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}

const candidates = cvIterator(data);

nextCV();
//Button listerner for next button

const next= document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV()
{
    const currentCandidate= candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate!= undefined){
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML= `<ul>
        <li>Name: ${currentCandidate.name}</li>
        <li>${currentCandidate.age} years old</li>
        <li>Lives in ${currentCandidate.city}</li>
        <li>Works on ${currentCandidate.language}</li>
        <li>Uses ${currentCandidate.framework} framework</li>
      </ul>`;
    }
    else{
        alert('End of candidate application');
        window.location.reload();
    }

}

// Form Section-------->

function validate(){
    let id;
    let uname= document.getElementById("uname");
    let pass= document.getElementById("pass");
    function hide(){
        pass.style.border.visibility="hidden";
        uname.style.border.visibility="hidden";
        document.getElementById("invalidPassword").style.visibility="hidden";
        document.getElementById("invalidUsername").style.visibility="hidden";
        console.log("working");
    }
    
        if(uname.value=="Rahul123" && pass.value=="263652"){
            return true;
        }
        else if(uname.value=="Rahul123" && pass.value.trim()==""){
            pass.style.border= "2px solid red";
            document.getElementById("invalidPassword").style.visibility="visible";
            document.getElementById("invalidPassword").style.fontSize= "25px";
            id = setInterval(hide, 4000);
            clearInterval(id);
            return false;
        }
        else if(uname.value.trim()=="" && pass.value=="263652"){
            uname.style.border= "2px solid red";
            document.getElementById("invalidUsername").style.visibility="visible";
            document.getElementById("invalidUsername").style.fontSize= "25px";
            setInterval(hide, 4000);
            clearInterval(id);
            return false;
        }
        else if(uname.value=="Rahul123" && pass.value!="263652"){
            pass.style.border= "2px solid red";
            document.getElementById("invalidPassword").style.visibility="visible";
            document.getElementById("invalidPassword").style.fontSize= "25px";
            setInterval(hide, 4000);
            clearInterval(id);
            return false;
        }
        else if(uname.value!="Rahul123" && pass.value=="263652"){
            uname.style.border= "2px solid red";
            document.getElementById("invalidUsername").style.visibility="visible";
            document.getElementById("invalidUsername").style.fontSize= "25px";
            setInterval(hide, 4000);
            clearInterval(id);
            return false;
        }
        else{
            uname.style.border= "2px solid red";
            document.getElementById("invalidUsername").style.visibility="visible";
            document.getElementById("invalidUsername").style.fontSize= "25px";
            pass.style.border= "2px solid red";
            document.getElementById("invalidPassword").style.visibility="visible";
            document.getElementById("invalidPassword").style.fontSize= "25px";
            setInterval(hide, 4000);
            clearInterval(id);
            return false;
        }
}




