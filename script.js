// DOM Ready Event
document.addEventListener('DOMContentLoaded', function() {
    console.log("ページがロードされました");

    // ナビゲーションリンクのイベントハンドラ
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const sectionId = link.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});