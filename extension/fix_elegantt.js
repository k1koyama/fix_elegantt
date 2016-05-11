/*
 * Fix Elegantt
 * 
 * Copyright (c) 2016 Keiichi Koyama, all rights reserved.
 */

(function () {
    setTimeout(main, 1000);
})();

function main() {
    if (!document.getElementById('fix-elegantt')) {
        var board_header = document.getElementsByClassName('board-header')[0];
        var btn_fix_gantt = document.createElement('a');
        btn_fix_gantt.classList.add('board-header-btn', 'board-header-btn-without-icon');
        btn_fix_gantt.id = 'fix-elegantt';
        btn_fix_gantt.innerHTML = '<span class="board-header-btn-text">Fix Gantt</span>';
        btn_fix_gantt.addEventListener('click', fix_gantt_chart);

        board_header.appendChild(btn_fix_gantt);
    }
    
    setTimeout(main, 1000);
}

function fix_gantt_chart() {
    [].forEach.call(document.getElementsByClassName('gantt-task-content'), function (elem) {
        elem.style.color = 'darkblue';
        elem.style.overflow = 'visible';
    });
}
