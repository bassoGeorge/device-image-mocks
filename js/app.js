///////////////////////////////////////////////////////////////////////////////
//                              App js for mocks                             //
///////////////////////////////////////////////////////////////////////////////

$(function(){
    var cPHeight = 600;
    var rowCount = 0;
    function makeNewRow(){
        var row = $("<div>", { class: "row" });
        $("#devices").append(row);
        rowCount++;
    };

    // makeNewRow();
    (window.devices || []).forEach(function(device, index){
        var section = $("<section>", { class: "device four columns" });
        section.append("<h5>"+device.name+"</h5>");

        var deviceRow = $("<div>");

        var portrait = $("<div>", { class: "mock mock-image-portrait" });
        // var landscape = $("<div>", { class: "mock mock-image-landscape" });

        var proportion = cPHeight / device.h;
        var newH = cPHeight,
            newW = device.w * proportion;

        portrait.css({
            width: newW,
            height: newH
        });

        portrait.data({
            oh: device.h,
            ow: device.w,
            nh: newH,
            nw: newW
        });

        // landscape.css({
        //     width: newH,
        //     height: newW
        // });
        deviceRow.append(portrait);
        // deviceRow.append(landscape);

        section.append(deviceRow);
        section.append($("<hr/>"));
        if (index % 3 == 0) makeNewRow();
        $("#devices > .row:nth-child("+rowCount+")").append(section);
    });

    $("#portrait-toggle").click(function(){
        $(".mock-image-portrait").toggle();
    });

    $("#landscape-toggle").click(function(){
        $(".mock-image-landscape").toggle();
    });

    $(".device").click(function(){
        if ($(this).hasClass("focus")) {
            $(".device").removeClass("focus-mode");
            $(this).removeClass('focus');
            var p = $(this).find(".mock");
            p.css({
                height: p.data("nh"),
                width: p.data("nw")
            });
        } else {
            $(".device").addClass("focus-mode");
            $(this).addClass('focus');
            var p = $(this).find(".mock");
            p.css({
                height: p.data("oh"),
                width: p.data("ow")
            });
        }
    });

    $(".mock-image-landscape").hide();

});
