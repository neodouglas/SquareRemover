// ==UserScript==
// @name         Remover Alerta
// @namespace    http://tampermonkey.net/
// @version      2024-02-17
// @description  try to take over the world!
// @author       You
// @license      MIT
// @match        https://squarecloud.app/*/dashboard
// @match        https://squarecloud.app/dashboard
// @match        https://squarecloud.app/*/dashboard/app/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=squarecloud.app
// @grant        NeoDouglas
// @run-at       document-start
// @downloadURL = https://raw.githubusercontent.com/neodouglas/SquareRemover/main/remover.js
// ==/UserScript==

(function() {
    'use strict';

    function removeSvgElements() {
        var svgElements = document.querySelectorAll('svg');
        var warningElement = document.querySelector('p.text-xs.text-red-400.w-fit');

        svgElements.forEach(function(svgElement) {
            if (svgElement.outerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" class="text-yellow-500"><path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path></svg>') {
                svgElement.parentNode.removeChild(svgElement);
            }
        });
            if (warningElement) {
            warningElement.parentNode.removeChild(warningElement);
        }
    }

    setInterval(removeSvgElements, 550); 
    removeSvgElements();
})();
