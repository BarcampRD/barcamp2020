function charlas() {

    fetch("json/charlas.json")
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        })
        .then(function (speakersJson) {

            var sala1 = document.getElementById("tab1");
            var sala2 = document.getElementById("tab2");
            var sala3 = document.getElementById("tab3");
            var sala4 = document.getElementById("tab4");
            var sala5 = document.getElementById("tab5");

            for (i in speakersJson.charlas) {

                if (i < 4) {

                    sala1.innerHTML += createCharlasCard(speakersJson.charlas[i]);

                } else if (i < 10) {
                    sala2.innerHTML += createCharlasCard(speakersJson.charlas[i]);

                } else if (i < 16) {
                    sala3.innerHTML += createCharlasCard(speakersJson.charlas[i]);

                } else  if (i < 22){
                    sala4.innerHTML += createCharlasCard(speakersJson.charlas[i]);

                } else {
                    sala5.innerHTML += createCharlasCard(speakersJson.charlas[i]);
                }

            }

            eventos();
        });

}

function createCharlasCard(charlistaJson) {

    var desc = charlistaJson.description;

    var speakerHtml =
        "<li> " +
        "<div class=\"row justify-content-evenly\">" +
        "<div class=\"col-lg-2\"> <p class='date'></p> " + charlistaJson.hora + " </div>" +
        "<div class='col-lg-9'>" +
        "<h5>" + charlistaJson.charla + "</h5>" +
        "<p><i>Por: " + charlistaJson.nombre + "</i></p>" +
        "<p>" + charlistaJson.abstract + "</p>" +
        "<a class='bg-primary see-more'>Ver más</a>" +
        "<div class='body-description'>" +
        "<p>" + desc + "</p> </div>" +
        "</div>" +
        "</div>" +
        "</li>";

    return speakerHtml;
}


function eventos() {

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }

    });

    $(".tab a").click(function () {
        let button = $(this);
        button.next().slideToggle('slow', function () {
            if ($(this).css("display") === "block") {
                button.html("Ver menos");
            } else {
                button.html("Ver más");
            }
        });
    });
}