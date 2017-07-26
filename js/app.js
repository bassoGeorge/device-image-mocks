///////////////////////////////////////////////////////////////////////////////
//                              App js for mocks                             //
///////////////////////////////////////////////////////////////////////////////

$(function(){
    (window.devices || []).forEach(function(device){
        var section = $("<section>", { class: "device" });
        section.append("<h4>"+device.name+"</h4>");

        var deviceRow = $("<div>");

        var portrait = $("<div>", { class: "mock mock-image" });
        var landscape = portrait.clone();

        portrait.css({
            width: device.w,
            height: device.h
        });

        landscape.css({
            width: device.h,
            height: device.w
        });
        deviceRow.append(portrait);
        deviceRow.append(landscape);

        section.append(deviceRow);
        section.append($("<hr/>"));
        $("#devices").append(section);
    });
});
