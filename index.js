const endDate = 'January 01 2024 00:00:00'
const input = document.querySelectorAll('input')
document.getElementById('endDate').innerHTML = endDate

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000
    // console.log(diff)
    if(diff < 0) return;
    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor(diff / 3600) % 24;
    input[2].value = Math.floor(diff / 60) % 60;
    input[3].value = Math.floor(diff % 60);
}
clock()


setInterval(
    (()=>{
        clock()
    }),1000
)

//data difference for example
// 1 day = 24 hr
// 1 hour = 60 mints
// 60 mints = 3600 sec