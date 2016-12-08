$(document).ready(function () {

    //Class toggling functions for active elements
    function toggleClassesOnActive($active) {
        $active.toggleClass('grey');
        $active.toggleClass('blue');
    }

    function toggleClassesOnPandR($activeP, $activeR) {
        $activeP.toggleClass('activeP');
        $activeP.toggleClass('blue');
        $activeR.toggleClass('black');
        $activeR.toggleClass('selection');
    }

    //Functions for showing and hiding functions
    function showContents($content, $contentR, $contentP) {
        $content.show();
        $contentR.show();
        $contentP.show();
    }

    function hideContents($content, $contentR, $contentP) {
        $content.hide();
        $contentR.hide();
        $contentP.hide();
    }

    //Iterating over main menu
    $('ul.mainSlider').each(function () {
        //Setting main menu variables
        var $active, $content, $links = $(this).find('a');

        //Setting first menu item as active
        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.parent().addClass('active');
        $content = $($active[0].hash);

        toggleClassesOnActive($active);

        //Setting variables for the rest of the content
        var $dataNameR = '#' + $active.data('namer');
        var $contentR = $($dataNameR);
        var $psR = $contentR.find('p');
        var $activeR = $psR.first();
        var $divsR = $('.col-right-side').find('div');

        var $leftDivId = '#' + $active.data('name');
        var $leftDivPs = $($leftDivId).find('p');
        var $activeP = $leftDivPs.first();
        var $dataContent = '#' + $activeP.data('content');
        var $contentP = $($dataContent);
        var $infoContent = $('.content').find('div');

        toggleClassesOnPandR($activeP, $activeR);

        //Hiding unnecessary content
        $divsR.not($dataNameR).each(function () {
            $(this).hide();
        });

        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        $infoContent.not($dataContent).each(function () {
            $(this).hide();
        });

        //On click functionality on the first site
        $leftDivPs.each(function () {
            $(this).on('click', function () {
                toggleClassesOnPandR($activeP, $activeR);
                $contentP.hide();

                $activeP = $(this);
                $activeR = $psR.eq($activeP.index());
                $dataContent = '#' + $activeP.data('content');
                $contentP = $($dataContent);

                toggleClassesOnPandR($activeP, $activeR);
                $contentP.show();
            });
        });

        // Bind the click event handler
        $(this).on('click', 'a', function (e) {
            // Make the old tab inactive.
            $active.parent().removeClass('active');
            toggleClassesOnActive($active);
            toggleClassesOnPandR($activeP, $activeR);
            hideContents($content, $contentR, $contentP);

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
            toggleClassesOnActive($active);
            toggleClassesOnPandR($activeP, $activeR);
            showContents($content, $contentR, $contentP);

            //Bind click functionality on the new chosen site
            $leftDivPs.each(function () {
                $(this).on('click', function () {
                    toggleClassesOnPandR($activeP, $activeR);
                    $contentP.hide();

                    $activeP = $(this);
                    $activeR = $psR.eq($activeP.index());
                    $dataContent = '#' + $activeP.data('content');
                    $contentP = $($dataContent);

                    toggleClassesOnPandR($activeP, $activeR);
                    $contentP.show();
                });
            });

            // Prevent the anchor's default click action
            e.preventDefault();
        });

        //Bind enter, down and up, keys functionality
        $(window).unbind().on("keydown", function (e) {

            if ($activeR.children().is('a, a *')) {
                if (e.keyCode == 13) {
                    if ($activeR.index() == 1) {
                        window.open("https://linkedin.com/in/dawid-sawczuk");
                    } else {
                        window.open("https://github.com/dawidsawczuk");
                    }
                }
            }

            if ($activeP.index() !== ($leftDivPs.length - 1)) {
                if (e.keyCode == 40) { //down
                    toggleClassesOnPandR($activeP, $activeR);
                    $contentP.hide();

                    $activeP = $activeP.next();
                    $activeR = $psR.eq($activeP.index());
                    $dataContent = '#' + $activeP.data('content');
                    $contentP = $($dataContent);

                    toggleClassesOnPandR($activeP, $activeR);
                    $contentP.show();
                }
            }

            if ($activeP.index() !== 0) {
                if (e.keyCode == 38) { //up
                    toggleClassesOnPandR($activeP, $activeR);
                    $contentP.hide();

                    $activeP = $activeP.prev();
                    $activeR = $psR.eq($activeP.index());
                    $dataContent = '#' + $activeP.data('content');
                    $contentP = $($dataContent);

                    toggleClassesOnPandR($activeP, $activeR);
                    $contentP.show();
                }
            }
        });

        //Binding left and right keys functionality
        $(window).keydown(function (e) {
            if ($active.data('id') !== 4) {
                if (e.keyCode == 39) {
                    var $next = $active.parent().next().find('a');
                    var $nextDataName = '#' + $next.data('name');

                    $active.parent().removeClass('active');
                    toggleClassesOnActive($active);
                    toggleClassesOnPandR($activeP, $activeR);
                    hideContents($content, $contentR, $contentP);

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
                    toggleClassesOnActive($active);
                    toggleClassesOnPandR($activeP, $activeR);
                    showContents($content, $contentR, $contentP);

                    //Binding on click on the new chosen site
                    $leftDivPs.each(function () {
                        $(this).on('click', function () {
                            toggleClassesOnPandR($activeP, $activeR);
                            $contentP.hide();

                            $activeP = $(this);
                            $activeR = $psR.eq($activeP.index());
                            $dataContent = '#' + $activeP.data('content');
                            $contentP = $($dataContent);

                            toggleClassesOnPandR($activeP, $activeR);
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
                    toggleClassesOnActive($active);
                    toggleClassesOnPandR($activeP, $activeR);
                    hideContents($content, $contentR, $contentP);

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
                    toggleClassesOnActive($active);
                    toggleClassesOnPandR($activeP, $activeR);
                    showContents($content, $contentR, $contentP);

                    $leftDivPs.each(function () {
                        $(this).on('click', function () {
                            toggleClassesOnPandR($activeP, $activeR);
                            $contentP.hide();

                            $activeP = $(this);
                            $activeR = $psR.eq($activeP.index());
                            $dataContent = '#' + $activeP.data('content');
                            $contentP = $($dataContent);

                            toggleClassesOnPandR($activeP, $activeR);
                            $contentP.show();
                        });
                    });
                }
            }

            //Binding GitHub on Esc
            if (e.keyCode == 27) {
                window.location.replace("https://github.com/dawidsawczuk");
            }

            //Binding alert on F2
            if (e.keyCode == 113) {
                    alert('Enter is usable only with [Link].\n' +
                    'On the desktop you can use both arrows and mouse.\n' +
                    'Looks created by Alicja Cmiel.\n' +
                    'Functionality by Dawid Sawczuk.\n' +
                    'Enjoy!');
            }
        });
    });
});