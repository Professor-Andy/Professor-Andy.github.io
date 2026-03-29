
function Navigation(id, pagePath) {
    const ids = ['contact', 'donate', 'volunteer', 'info'];

    // remove active from all nav items
    ids.forEach(navId => {
        document.getElementById(navId).classList.remove("active");
    });

    // add active to the clicked one
    document.getElementById(id).classList.add("active");

    // load the new page content
    fetch(pagePath)
        .then(res => res.text())
        .then(html => {
            const page = document.getElementById("Page");
            page.innerHTML = html;

            // reinitialize your carousel
            initCarousel();

            // ⭐ ONLY add the YouTube iframe when loading the Info page
            if (id === "info") {
                const iframe = document.createElement("iframe");
                iframe.width = "75%";
                iframe.height = "400";
                iframe.src = "https://youtu.be/Vs1ljw5JPZ8";
                iframe.title = "YouTube video player";
                iframe.frameBorder = "0";
                iframe.allow =
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;

                // append it at the bottom of the Info page
                page.appendChild(iframe);
            }
        });
}