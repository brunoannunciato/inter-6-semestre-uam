<html>
    <head>
        <?php  include('includes.php')?>
    </head>
    <body class="<?php echo(($_SERVER['REQUEST_URI'] == '/panel.php' ? 'panel' : 'home'))?>">
        <header>
            <div class="container">
                <img src="images/arrow-left.png" alt="" class="back-button">

                <figure class="logo">
                    <img src="/images/logo-mono.png" alt="Illumind">
                </figure>

                <a href="/config.php" class="config-btn">
                    <img src="images/icons/i_config.png" alt="" class="config">
                </a>

                <div class="add-profile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                        <defs>
                            <style>
                                .cls-1,.cls-2,.cls-4{fill:none}.cls-1,.cls-2{stroke:#fff !important;stroke-width:2px}.cls-2{stroke-linecap:round}.cls-3{stroke:none}
                            </style>
                        </defs>
                        <g id="Group_6" data-name="Group 6" transform="translate(-333 -7)">
                            <g id="Rectangle_1" class="cls-1" data-name="Rectangle 1" transform="translate(333 7)">
                                <rect width="25" height="25" class="cls-3" rx="5"/>
                                <rect width="23" height="23" x="1" y="1" class="cls-4" rx="4"/>
                            </g>
                            <g id="Group_5" data-name="Group 5" transform="translate(5.783 -53.217)">
                                <path id="Line_1" d="M0 0v14.434" class="cls-2" data-name="Line 1" transform="translate(339.717 65.5)"/>
                                <path id="Line_2" d="M0 0v14.434" class="cls-2" data-name="Line 2" transform="rotate(90 137.109 209.826)"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </header>