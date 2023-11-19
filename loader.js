window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () => {
        document.body.removeChild("loader");
    })
})


//cursor animado 1
document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    const cursor = document.querySelector(".cursor");
    var timeout;

    document.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;

        cursor.style.top = y + "px";
        cursor.style.left = x + "px";
        cursor.style.display = "block";

        function mouseStopped() {
            cursor.style.display = "none";
        }

        clearTimeout(timeout);
        timeout = setTimeout(mouseStopped, 1000);
    });

    document.addEventListener("click", () => {
        cursor.style.display = "none";
    });

    document.addEventListener("mouseout", () => {
        cursor.style.display = "none";
    });
});


