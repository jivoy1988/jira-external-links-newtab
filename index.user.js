// ==UserScript==
// @name          Jira external Links
// @version       0.1
// @description   Jira external links in a new tab
// @namespace     https://github.com/jivoy1988/
// @match         https://*.atlassian.net/*
// @author        jivoy1988
// @updateURL     https://raw.githubusercontent.com/jivoy1988/jira-external-links-newtab/master/index.user.js
// @downloadURL   https://raw.githubusercontent.com/jivoy1988/jira-external-links-newtab/master/index.user.js
// ==/UserScript==

(function() {
    'use strict';

    jQuery(document).ready(function($) {
        setInterval(function(){
            $('a')
                .filter('[href^="http"], [href^="//"]')
                .not('[href*="' + window.location.host + '"]')
                .attr('rel', 'noopener noreferrer')
                .attr('target', '_blank');
        }, 1000);
    });

})();
