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

        var $dataNameR = '#' + $active.data('namer');
        var $contentR = $($dataNameR);
        var $divsR = $('.col-right-side').find('div');
        var $psR = $contentR.find('p');

        $divsR.not($dataNameR).each(function () {
            $(this).hide();
        });

        // Hide the remaining content
        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        var $leftDivId = '#' + $active.data('name');
        var $leftDivPs = $($leftDivId).find('p');
        var $infoContent = $('.content').find('div');
        var $activeP = $leftDivPs.first();
        var $dataContent = '#' + $activeP.data('content');
        var $contentP = $($dataContent);
        var $activeR = $psR.first();
        console.log($activeR);

        $activeP.toggleClass('blue');
        $activeP.toggleClass('activeP');

        $activeR.toggleClass('black');
        $activeR.toggleClass('selection');

        $infoContent.not($dataContent).each(function () {
            $(this).hide();
        });

        $leftDivPs.each(function () {
            $(this).on('click', function () {
                $activeP.toggleClass('activeP');
                $activeP.toggleClass('blue');
                $activeR.toggleClass('black');
                $activeR.toggleClass('selection');
                $contentP.hide();

                $activeP = $(this);
                $activeR = $psR.eq($activeP.index());
                $dataContent = '#' + $activeP.data('content');
                $contentP = $($dataContent);

                $activeP.toggleClass('activeP');
                $activeP.toggleClass('blue');
                $activeR.toggleClass('black');
                $activeR.toggleClass('selection');
                $contentP.show();
            });
        });

        $(window).unbind().on("keydown", function (e) {

            if ($activeP.index() !== ($leftDivPs.length - 1)) {
                if (e.keyCode == 40) { //down
                    $activeP.toggleClass('activeP');
                    $activeP.toggleClass('blue');
                    $activeR.toggleClass('black');
                    $activeR.toggleClass('selection');
                    $contentP.hide();

                    $activeP = $activeP.next();
                    $activeR = $psR.eq($activeP.index());
                    $dataContent = '#' + $activeP.data('content');
                    $contentP = $($dataContent);

                    $activeP.toggleClass('activeP');
                    $activeP.toggleClass('blue');
                    $activeR.toggleClass('black');
                    $activeR.toggleClass('selection');
                    $contentP.show();
                }
            }

            if ($activeP.index() !== 0) {
                if (e.keyCode == 38) { //up
                    $activeP.toggleClass('activeP');
                    $activeP.toggleClass('blue');
                    $activeR.toggleClass('black');
                    $activeR.toggleClass('selection');
                    $contentP.hide();

                    $activeP = $activeP.prev();
                    $activeR = $psR.eq($activeP.index());
                    $dataContent = '#' + $activeP.data('content');
                    $contentP = $($dataContent);

                    $activeP.toggleClass('activeP');
                    $activeP.toggleClass('blue');
                    $activeR.toggleClass('black');
                    $activeR.toggleClass('selection');
                    $contentP.show();
                }
            }
        });

        // Bind the click event handler
        $(this).on('click', 'a', function (e) {
            // Make the old tab inactive.
            $active.parent().removeClass('active');
            $active.toggleClass('grey');
            $active.toggleClass('blue');
            $activeP.toggleClass('blue');
            $activeP.toggleClass('activeP');
            $activeR.toggleClass('black');
            $activeR.toggleClass('selection');
            $content.hide();
            $contentR.hide();
            $contentP.hide();

            // Update the variables with the new link and content
            $active = $(this);
            $dataNameR = '#' + $active.data('namer');
            $leftDivId = '#' + $active.data('name');
            $leftDivPs = $($leftDivId).find('p');
            $content = $(this.hash);
            $contentR = $($dataNameR);
            $activeP = $leftDivPs.first();
            $dataContent = '#' + $activeP.data('content');
            $contentP = $($dataContent);
            $psR = $contentR.find('p');
            $activeR = $psR.first();

            // Make the tab active.
            $active.parent().addClass('active');
            $active.toggleClass('grey');
            $active.toggleClass('blue');
            $activeP.toggleClass('blue');
            $activeP.toggleClass('activeP');
            $activeR.toggleClass('black');
            $activeR.toggleClass('selection');
            $content.show();
            $contentR.show();
            $contentP.show();

            $leftDivPs.each(function () {
                $(this).on('click', function () {
                    $activeP.toggleClass('activeP');
                    $activeP.toggleClass('blue');
                    $activeR.toggleClass('black');
                    $activeR.toggleClass('selection');
                    $contentP.hide();

                    $activeP = $(this);
                    $activeR = $psR.eq($activeP.index());
                    $dataContent = '#' + $activeP.data('content');
                    $contentP = $($dataContent);

                    $activeP.toggleClass('activeP');
                    $activeP.toggleClass('blue');
                    $activeR.toggleClass('black');
                    $activeR.toggleClass('selection');
                    $contentP.show();
                });
            });

            // Prevent the anchor's default click action
            e.preventDefault();
        });

        $(window).keydown(function (e) {
            if ($active.data('id') !== 4) {
                if (e.keyCode == 39) {
                    var $next = $active.parent().next().find('a');
                    var $nextDataName = '#' + $next.data('name');

                    $active.parent().removeClass('active');
                    $active.toggleClass('grey');
                    $active.toggleClass('blue');
                    $activeP.toggleClass('blue');
                    $activeP.toggleClass('activeP');
                    $activeR.toggleClass('black');
                    $activeR.toggleClass('selection');
                    $content.hide();
                    $contentR.hide();
                    $contentP.hide();

                    $active = $active.parent().next().find('a');
                    $leftDivPs = $($leftDivId).next().find('p');
                    $activeP = $leftDivPs.first();
                    $dataNameR = '#' + $active.data('namer');
                    $dataContent = '#' + $activeP.data('content');
                    $leftDivId = '#' + $active.data('name');
                    $content = $($nextDataName);
                    $contentR = $($dataNameR);
                    $contentP = $($dataContent);
                    $psR = $contentR.find('p');
                    $activeR = $psR.first();

                    $active.parent().addClass('active');
                    $active.toggleClass('grey');
                    $active.toggleClass('blue');
                    $activeP.toggleClass('blue');
                    $activeP.toggleClass('activeP');
                    $activeR.toggleClass('black');
                    $activeR.toggleClass('selection');
                    $content.show();
                    $contentR.show();
                    $contentP.show();

                    $leftDivPs.each(function () {
                        $(this).on('click', function () {
                            $activeP.toggleClass('activeP');
                            $activeP.toggleClass('blue');
                            $activeR.toggleClass('black');
                            $activeR.toggleClass('selection');
                            $contentP.hide();

                            $activeP = $(this);
                            $activeR = $psR.eq($activeP.index());
                            $dataContent = '#' + $activeP.data('content');
                            $contentP = $($dataContent);

                            $activeP.toggleClass('activeP');
                            $activeP.toggleClass('blue');
                            $activeR.toggleClass('black');
                            $activeR.toggleClass('selection');
                            $contentP.show();
                        });
                    });

                }
            }

            if ($active.data('id') !== 0) {
                if (e.keyCode == 37) {
                    var $prev = $active.parent().prev().find('a');
                    var $prevDataName = '#' + $prev.data('name');

                    $active.parent().removeClass('active');
                    $active.toggleClass('grey');
                    $active.toggleClass('blue');
                    $activeP.toggleClass('blue');
                    $activeP.toggleClass('activeP');
                    $activeR.toggleClass('black');
                    $activeR.toggleClass('selection');
                    $content.hide();
                    $contentR.hide();
                    $contentP.hide();

                    $active = $active.parent().prev().find('a');
                    $leftDivPs = $($leftDivId).prev().find('p');
                    $activeP = $leftDivPs.first();
                    $dataNameR = '#' + $active.data('namer');
                    $dataContent = '#' + $activeP.data('content');
                    $leftDivId = '#' + $active.data('name');
                    $content = $($prevDataName);
                    $contentR = $($dataNameR);
                    $contentP = $($dataContent);
                    $psR = $contentR.find('p');
                    $activeR = $psR.first();

                    $active.parent().addClass('active');
                    $active.toggleClass('grey');
                    $active.toggleClass('blue');
                    $activeP.toggleClass('blue');
                    $activeP.toggleClass('activeP');
                    $activeR.toggleClass('black');
                    $activeR.toggleClass('selection');
                    $content.show();
                    $contentR.show();
                    $contentP.show();

                    $leftDivPs.each(function () {
                        $(this).on('click', function () {
                            $activeP.toggleClass('activeP');
                            $activeP.toggleClass('blue');
                            $activeR.toggleClass('black');
                            $activeR.toggleClass('selection');
                            $contentP.hide();

                            $activeP = $(this);
                            $activeR = $psR.eq($activeP.index());
                            $dataContent = '#' + $activeP.data('content');
                            $contentP = $($dataContent);

                            $activeP.toggleClass('activeP');
                            $activeP.toggleClass('blue');
                            $activeR.toggleClass('black');
                            $activeR.toggleClass('selection');
                            $contentP.show();
                        });
                    });
                }
            }

            if (e.keyCode == 27) {
                window.location.replace("https://github.com/dawidsawczuk");
            }

            if (e.keyCode == 113) {
                alert('Test');
            }
        });
    });
});