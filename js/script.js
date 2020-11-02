function getSinglelanduse(landuseID) {

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'http://nzwetland.herokuapp.com/api/landuse/' + landuseID + '/',
        success: function (data) {
            // location.reload();
            landuse1 = data;

        },
        error: function (err) {
            console.log(err);
        }

    });
    return landuse1;
}
//HABITAT//
function getSinglehabitat(habitatID) {

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'http://nzwetland.herokuapp.com/api/habitat/' + habitatID + '/',
        success: function (data) {
            // location.reload();
            habitat1 = data;

        },
        error: function (err) {
            console.log(err);
        }

    });
    return habitat1;
}
