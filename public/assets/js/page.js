$(function() {
    $("a").on("click", $(".devour-button"), function(event) {
        console.log("button clicked");
        event.preventDefault();
        var burgerId = $(this).data("id");
        var newDevour = $(this).data("devour");

        var newDevourState = {
            devoured: newDevour
        };

        //Ajax PUT call to update devoured status
        $.ajax("/api/devour/" + burgerId, {
            type: "PUT",
            data: newDevourState
        }
        ).then(function(data) {
            location.reload();
        });
})
}
);