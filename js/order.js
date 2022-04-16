const timeArr = ["12 a.m.", "01 a.m.", "02 a.m.", "03 a.m.", "04 a.m.", "05 a.m.", "06 a.m.", "07 a.m.", "08 a.m.", "09 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "01 p.m.", "02 p.m.", "03 p.m.", "04 p.m.", "05 p.m.", "06 p.m.", "07 p.m.", "08 p.m.", "09 p.m.", "10 p.m.", "11 p.m."];
const timePicker = document.querySelector("#timepicker"),
      dateInput = document.querySelector("#date-input"),
      comment = document.querySelector("#comment"),
      enrollBtn = document.querySelector(".enroll-btn");
let dataArr = [];
timeArr.forEach(time => {
    timePicker.innerHTML += `<option value="${time}">${time}</option>`;
})
const sendData = () => {
    const form = document.querySelector("form");
    const data = {
        time: timePicker.value,
        date: dateInput.value,
        comment: comment.value
    };
    form.addEventListener("submit", (e)=> {
        e.preventDefault();
        const formData = JSON.stringify(data);
        console.log(formData);
    })
}
sendData();
// enrollBtn.addEventListener("click", ()=>{
//     let dataItem = {
//         time: timePicker.value,
//         date: dateInput.value,
//         comment: comment.value
//     };
//     dataArr.push(dataItem);
//     console.log(dataArr);
//     return dataArr;
// })
