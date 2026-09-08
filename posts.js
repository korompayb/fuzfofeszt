// Az értesítés-panelben megjelenő posztok tartalma. Ide kell csak nyúlni,
// ha új posztot teszünk közzé vagy módosítunk egy meglévőt — a navbar.js
// ebből építi fel a panelt, ezért máshol nem kell semmit szerkeszteni.
window.FUZFO_POSTS = [
    {
        label: '2. poszt — Fontos tudnivalók',
        html: `
            <p>Sziasztok! Tavaly nagyon jól betartottuk a legfontosabb szabályokat, emiatt tudunk idén is
                egybegyűlni. Folytassuk ezt, hogy jövőre is találkozhassunk!!</p>
            <p class="notif-warn">MINDENKI OLVASSA EL!</p>
            <p>Ez egy fesztivál, szóval ilyen mentalitással kell az egészet elképzelni:</p>
            <ul>
                <li>Felfogni úgy, mintha nem lenne ház, csak a kert létezik!!</li>
                <li>A házban csak a WC-re van bejárás.</li>
                <li>A szobákat, konyhát, hűtőt, konnektorokat nem tudjátok használni. Másnap sem!!!</li>
                <li>Tehát ha nem szeretnéd, hogy lemerüljön az iqos, teló, bármi, akkor hozz
                    powerbanket.</li>
                <li>Készüljetek meleg ruhával, hálózsákkal, polifoammal, mert este hidegebb lesz az idő,
                    illetve esőre is fel kell készülni :)</li>
                <li>Kempingszékeket ha tudtok, hozzatok!</li>
                <li>Italt is mindenki magának intéz, ehhez fontos, hogy REPOHARAT hozzatok!</li>
            </ul>

            <h6>Parkolás</h6>
            <p>A 71-es útról lekanyarodva szemben találjátok a házat (Balaton krt. 110.). Miután
                lekanyarodtatok, vesztek egy jobbost, és a kisúton találjátok magatokat — ennek a
                jobb oldalára parkoljatok. Épp elég hosszú ez az út, mindenki el fog itt férni.</p>
            <p>Ha vonattal jöttök, akkor egy nagyjából 20 perces sétával kell számolni.</p>

            <h6>Vasúti sínek</h6>
            <p>A kert közvetlen kapcsolatban áll a vasúti sínekkel, ami egy ekkora létszámú eseménynél
                különös veszélyforrás. Éppen ezért le lesz zárva a kapu, nem tudjátok a sínen keresztül
                megközelíteni a Balatont. A stég is le van szedve, úgyhogy ha szeretnétek gyönyörködni a
                vízben, a strandra tudtok kisétálni, ami nagyjából 6 perces séta.</p>
            <p class="notif-warn">Kerten keresztül, sínen átmenni tilos. TILOOOOS!!!!!</p>

            <p>See you soon!</p>
        `
    }, 
    {
        label: '1. poszt — Programok',
        html: `
            <p>Na helló helló, jövünk is a programokkal:</p>

            <h6>Batikolás</h6>
            <p>Idén is batikolunk ofc, hozzatok fehér bármit, amit menőbbé tennétek!</p>

            <h6>Arcfestés</h6>
            <p>Elengedhetetlen. Csillámok, strasszok, minden ami kell!</p>

            <h6>Papírsárkány készítő workshop</h6>
            <p>Gyártsunk papírsárkányt vagy bármi másnak nevezhető reptethető cuccot, majd a mezőn
                tartsunk egy repítő versenyt!</p>

            <h6>Sport</h6>
            <p>Röpi, foci, sörpong.</p>

            <h6>Parasztolimpia</h6>
            <p>Készítse magát mindenki, nincs kifogás a részvétellel kapcsolatban. Én már előre izgulok,
                hogy ki lesz az idei paraszt!</p>
            <p class="notif-warn">FONTOS: aki szeretne részt venni a parasztolimpián, hozzon magával
                sört! Valamint olyan ruhában gyertek, amit nem sajnáltok, ha koszos lesz — és
                kényelmes :)</p>

            <h6>Zene</h6>
            <p>Nagyon nagyon izgi és menő lett a zenei felhozatal :))</p>
            <ul class="notif-lineup">
                <li><strong>20:00-21:00</strong> Zúzmó</li>
                <li><strong>21:30- 22:30</strong>  BashElán </li>
                <li><strong>22:30-00:00</strong> DJ ANOS</li>
                <li><strong>00:00-01:00</strong> kira-kø</li>
                <li><strong>01:00-02:00</strong> fenyœmez </li>
                <li><strong>02:00-03:00</strong> CTRL-D</li>
            </ul>
        `
    }
    
];
