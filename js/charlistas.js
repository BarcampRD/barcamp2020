function charlistas() {

    fetch("json/charlistas.json")
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        })
        .then(function (speakersJson) {
            var speakers = document.getElementById('informacionCharlistas');
            // traitement de l'objet

            var json = speakersJson.charlistas;
            for (i in json) {
                speakers.innerHTML += createCharlistaCard(json[i], i);
            }

    

            $(".more").click(function () {

                var element = $(this);

                mostrarModal(element.attr('id'));

            //     // $(".modal-biography").addClass("open");
                $(".hide-modal").click(function () {
                    $(".modal-biography").removeClass("open");
                    return false;
                });
            });
        
        });

}

function createCharlistaCard(charlistaJson, index) {


    var speakerHtml = "<div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-8\">" +
        "<div class=\"charlista\" style='background-image:url(" +  charlistaJson.imagen + ");'>" +
        "<div class='info'>" +
        "<h5>" + charlistaJson.nombre + "</h5>" +
        "<div class='social'>";

    for (i in charlistaJson.socials) {
        speakerHtml += '<a href="' + charlistaJson.socials[i].link + '" target="_blank"> <span><i class="' + charlistaJson.socials[i].icon + '"></i></span></a> ';
    }


    speakerHtml += "</div>" ;

    speakerHtml += '<a class="more" id="biography_'+index+'">Ver Biografia<span class="icon-arrow-right"></span></a>';

    speakerHtml +="</div>" +
        "</div>" +
        "</div>";

        speakerHtml +=  '<div class="modal-biography"  id="modal_biography_'+index+'">     <div class="modal-content">         <div class="modal-header"><div class="row">                 <div class="col-lg-5 col-md-6 col-sm-6">  <img src="'+charlistaJson.imagen+'" class="img-fluid"></div><div class="col-lg-6 col-md-6 col-sm-6 pt-4"><h5>'+ charlistaJson.nombre +'</h5><div class="social">';
  
        for (i in charlistaJson.socials) {
            speakerHtml += '<a href="' + charlistaJson.socials[i].link + '" target="_blank"> <span><i class="' + charlistaJson.socials[i].icon + '"></i></span></a> ';
        }
    
        speakerHtml += '</div></div></div></div><div class="modal-body"><p>'+charlistaJson.bio+'</p><a href="#" class="hide-modal"><span class="icon-arrow-left"></span>Ocultar Biografia</a></div></div></div>';
      

    return speakerHtml;
}

function mostrarModal(id) {
    

    
    $("#modal_"+id).addClass("open");

    return false;
}
