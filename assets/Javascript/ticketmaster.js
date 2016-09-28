console.log("loaded");

function createNewMarker(){

    
// }







var eventLocation;
$('button').on('click', function(){
    $('#eventList').empty();
    eventLocation = $("#search").val();

    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.Json?apikey=cAnARp0Bdf5EhZsX9PCXuiOGzhkmhFM7&keyword=" + eventLocation

    $.ajax({ url: queryURL, method: 'GET' }).done(function(response) {


        console.log(response);
        console.log(response._embedded.events)

        var events = response._embedded.events;
        $.each(events.slice(0, 10), function(index, value) {
            console.log(value.name);
            var eventDiv = $('<div class="item">')
            var eventName = value.name;
            var p = $('<p>').text( "Name of Event: " + eventName);
            var location = value._embedded.venues[0].location;
            var latitude = location.latitude;
            var longitude = location.longitude;
            console.log(latitude +" "+longitude);
            // createNewMarker(latitude, longitude);
            var eventImage = $('<img>');
            $('img').addClass('posterImages');
            var eventPoster = value.images;
            $.each(eventPoster.slice(0, 1), function(index, source) {
                var poster = source.url;
                eventImage.attr('src', poster);
                eventDiv.append(p);
                eventDiv.append(eventImage)



                console.log(value.images)


                $("#eventList").prepend(eventDiv);

            })
        })
    })
})
