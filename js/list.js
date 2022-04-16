const changeBtn = document.querySelector(".change-btn"),
      cancelBtn = document.querySelector(".cancel-btn"),
      list = document.querySelector(".list-wrapper"),
      modalPage = document.querySelector(".change-modal"),
      closeModalBtn = document.querySelector(".cancel-modal");

async function renderList(){
  let response = await fetch("url");
  let data = await response.json();
  for(let key in data){
    list.innerHTML += `
        <div class="list-item">
            <div class="text-content">
              <p>Acceptance record for: <span class="enroll">${data[key].time}</span></p>
              <p>Information: <span class="information">${data[key].comment}</span></p>
            </div>
            <div class="buttons">
              <button class="change-btn">change</button>
              <button class="cancel-btn">cancel</button>
            </div>
          </div>
        `;
  }
}
function deleteItem(){
    cancelBtn.addEventListener("click", ()=>{
        dataArr.map((arrItem, index), ()=> {
            dataArr.splice(index, 1);
        })
    })
}
function openModal(){
  changeBtn.addEventListener("click", ()=>{
    if(modalPage.style.display != "block"){
      modalPage.style.display = "block";
      
        // document.querySelector(".container").style.background = "rgba(0, 0, 0, 0.8)"
      
    }
  })
}
function closeModal(){
  closeModalBtn.addEventListener("click", ()=>{
    modalPage.style.display = "none";
})
}
renderList();
deleteItem();
openModal();
closeModal();