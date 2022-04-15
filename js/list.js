const changeBtn = document.querySelector(".change-btn"),
      cancelBtn = document.querySelector(".cancel-btn"),
      list = document.querySelector(".list-wrapper");
import dataArr from '../js/order'; 
function renderList() {
    dataArr.forEach(arrItem, ()=> {
        list.innerHTML += `
        <div class="list-item">
            <div class="text-content">
              <p>Acceptance record for: <span class="enroll">${arrItem.time}</span></p>
              <p>Information: <span class="information">${arrItem.comment}</span></p>
            </div>
            <div class="buttons">
              <button class="change-btn">change</button>
              <button class="cancel-btn">cancel</button>
            </div>
          </div>
        `;
    })
}
function deleteItem(){
    cancelBtn.addEventListener("click", ()=>{
        dataArr.map((arrItem, index), ()=> {
            dataArr.splice(index, 1);
        })
    })
}
renderList();
deleteItem();