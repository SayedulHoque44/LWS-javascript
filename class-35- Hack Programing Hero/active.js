

const milestonesData = JSON.parse(data).data;

// load course milestone data

function loadmilestones(){
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML =`${milestonesData.map(function(milestone){
        return `<div class="milestone border-b" id="${milestone._id}">
                    <div class="flex">
                        <div class="checkbox"><input type="checkbox" onclick="markMilestone(this,${milestone._id})" /></div>
                        <div onclick="openMilestone(this,${milestone._id})" id="test">
                            <p>
                                ${milestone.name}
                                <span><i class="fas fa-chevron-down"></i></span>
                            </p>
                        </div>    
                    </div>
                    <div class="hidden_panel">
                        ${milestone.modules.map(function(module){
                            return `<div class="module border-b">
                                        <p>${module.name}</p>
                                    </div>`
                        }).join(" ")}
                    </div>
                </div>`
    }).join("")}`
   
}

 function openMilestone(milestoneElement,id){
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");
    

    
    if(!currentPanel.classList.contains("show")) {
        currentPanel.classList.add("show");
        currentPanel.classList.add('active')
        if(shownPanel){
            shownPanel.classList.remove("show")
            shownPanel.classList.remove('active')
        }
    }else{
        currentPanel.classList.remove("show")
        shownPanel.classList.remove('active')
    }




    
    showMilestone(id)
    
 }

 const milestoneImage = document.querySelector('.milestoneImage')

 milestoneImage.onload = function(){
    this.style.opacity ="1"
 }

  function showMilestone(id){

    const title = document.querySelector(".title")
    const details = document.querySelector(".details")

    title.innerText =  milestonesData[id].name
    details.innerText =  milestonesData[id].description

    document.getElementsByClassName('milestoneImage')[0].src =  milestonesData[id].image

    milestoneImage.style.opacity ="0";
  }

  function markMilestone (cheakbox,id){
    const donelist = document.querySelector('.doneList')
    const milestoneslist = document.querySelector('.milestones')
    const item = document.getElementById(id);

    if(cheakbox.checked){
        milestoneslist.removeChild(item)
        donelist.appendChild(item)
    }else{
        milestoneslist.appendChild(item)
        donelist.removeChild(item)

        
    }

  }




loadmilestones()