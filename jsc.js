window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        document.body.classList.add("scroll-down");
        document.body.classList.remove("scroll-up");
    } else {
        document.body.classList.remove("scroll-down");
        document.body.classList.add("scroll-up");
    }
});

window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});
// สร้าง function เพื่อทำให้องค์ประกอบขยับอนิเมชันตลอดเวลา
function animateNumber() {
var numberElement = document.querySelector('.news-number');
var position = 0;

setInterval(function() {
    position += 10; // แก้ไขค่าตามที่ต้องการ
    numberElement.style.transform = 'translateX(' + position + 'px)';
}, 1000); // ระยะเวลาในการเรียกใช้ function ทุกๆ 1 วินาที
}

// เรียกใช้ function เมื่อหน้าเว็บโหลดเสร็จ
window.addEventListener('load', function() {
animateNumber();
});