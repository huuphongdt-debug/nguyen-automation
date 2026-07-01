    let lastScrollTop = 0;

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    // Chỉ chạy trên điện thoại
    if (window.innerWidth > 768) return;

    let currentScroll = window.pageYOffset;

    // Nếu đang ở đầu trang thì luôn hiện header
    if (currentScroll <= 0) {
        header.classList.remove("hide");
        return;
    }

    if (currentScroll > lastScrollTop) {
        // Cuộn xuống
        header.classList.add("hide");
    } else {
        // Cuộn lên
        header.classList.remove("hide");
    }

    lastScrollTop = currentScroll;

});
function searchProduct(){

    let keyword =
    document.getElementById("searchInput").value;

    alert("Bạn đang tìm: " + keyword);

}
