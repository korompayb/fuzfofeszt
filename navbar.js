// Egyetlen közös navbar minden oldalnak. Nincs szükség szerverre/fetch-re:
// a markup egy JS sablon, ami betöltéskor a #site-navbar helyőrzőbe kerül,
// így file://-ból megnyitva is működik, nem csak élő szerveren.
(function () {
    var NAVBAR_HTML = `
        <nav class="navbar navbar-expand-lg mb-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">FűzfőFeszt 26'</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
                    aria-controls="mainNav" aria-expanded="false" aria-label="Menü megnyitása">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mainNav">
                    <ul class="navbar-nav ms-auto align-items-lg-center">
                        <li class="nav-item"><a class="nav-link" href="/">Kezdőlap</a></li>
                        <li class="nav-item"><a class="nav-link" href="/index.html#programok">Programok</a></li>
                        <li class="nav-item"><a class="nav-link" href="/jegyek">Jegyek</a></li>
                        <li class="nav-item"><a class="nav-link" href="/index.html#helyszin">Helyszín</a></li>
                        <li class="nav-item"><a class="nav-link" href="/gallery/">Galéria</a></li>
                        <li class="nav-item"><a class="nav-link" href="/index.html#kapcsolat">Kapcsolat</a></li>
                        <!-- ÉRTESÍTÉSEK -->
                        <li class="nav-item notif-wrap">
                            <button class="notif-btn" type="button" aria-label="Értesítések" aria-haspopup="true">
                                <svg viewBox="0 0 448 512" aria-hidden="true">
                                    <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                                </svg>
                                <span class="notif-badge"></span>
                            </button>
                            <div class="notif-panel" role="dialog" aria-label="Fesztivál értesítések">
                                <h4>Friss infók</h4>
                                <div class="notif-posts"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    function renderPosts(panel) {
        var container = panel.querySelector('.notif-posts');
        var posts = window.FUZFO_POSTS || [];
        container.innerHTML = posts.map(function (post) {
            return '<div class="notif-post"><h5>' + post.label + '</h5>' + post.html + '</div>';
        }).join('');
    }

    function initNotif(wrap) {
        var btn = wrap.querySelector('.notif-btn');
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            wrap.classList.toggle('open');
        });
        document.addEventListener('click', function (e) {
            if (!wrap.contains(e.target)) wrap.classList.remove('open');
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') wrap.classList.remove('open');
        });
    }

    function initMobileCollapse(collapseEl) {
        collapseEl.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                if (!collapseEl.classList.contains('show')) return;
                if (window.bootstrap && window.bootstrap.Collapse) {
                    window.bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var mount = document.getElementById('site-navbar');
        if (!mount) return;
        mount.outerHTML = NAVBAR_HTML;
        var wrap = document.querySelector('.notif-wrap');
        if (wrap) {
            renderPosts(wrap.querySelector('.notif-panel'));
            initNotif(wrap);
        }
        var collapseEl = document.getElementById('mainNav');
        if (collapseEl) initMobileCollapse(collapseEl);
    });
})();
