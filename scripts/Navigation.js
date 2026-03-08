
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
            document.getElementById("Page").innerHTML = html;
	    	initCarousel();
        });
}