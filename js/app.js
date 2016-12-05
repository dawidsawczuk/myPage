$(document).ready(function () {

    $('ul.mainSlider').each(function () {
        // For each set of tabs, we want to keep track of
        // which tab is active and its associated content
        var $active, $content, $links = $(this).find('a');

        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.parent().addClass('active');
        $active.toggleClass('grey');
        $active.toggleClass('blue');

        $content = $($active[0].hash);

        // Hide the remaining content
        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        // Bind the click event handler
        $(this).on('click', 'a', function (e) {
            // Make the old tab inactive.
            $active.parent().removeClass('active');
            $active.toggleClass('grey');
            $active.toggleClass('blue');
            $content.hide();
            console.log($(this));

            // Update the variables with the new link and content
            $active = $(this);
            $content = $(this.hash);

            // Make the tab active.
            $active.parent().addClass('active');
            $active.toggleClass('grey');
            $active.toggleClass('blue');
            $content.show();

            // Prevent the anchor's default click action
            e.preventDefault();
        });

        $(window).keydown(function (e) {
            if ($active.data('id') !== 4) {
                if (e.keyCode == 39) {
                    var $next = $active.parent().next().find('a');
                    var $dataName = '#' + $next.data('name');

                    $active.parent().removeClass('active');
                    $active.toggleClass('grey');
                    $active.toggleClass('blue');
                    $content.hide();

                    $active = $active.parent().next().find('a');
                    $content = $($dataName);

                    $active.parent().addClass('active');
                    $active.toggleClass('grey');
                    $active.toggleClass('blue');
                    $content.show();
                }
            }

            if ($active.data('id') !== 0) {
                if (e.keyCode == 37) {
                    var $prev = $active.parent().prev().find('a');
                    var $dataName = '#' + $prev.data('name');

                    $active.parent().removeClass('active');
                    $active.toggleClass('grey');
                    $active.toggleClass('blue');
                    $content.hide();

                    $active = $active.parent().prev().find('a');
                    $content = $($dataName);

                    $active.parent().addClass('active');
                    $active.toggleClass('grey');
                    $active.toggleClass('blue');
                    $content.show();
                }
            }

            if (e.keyCode == 27) {
                window.location.replace("https://github.com/dawidsawczuk");
            }
        });
    });
});