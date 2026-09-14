// Az értesítés-panelben megjelenő posztok tartalma. Ide kell csak nyúlni,
// ha új posztot teszünk közzé vagy módosítunk egy meglévőt — a navbar.js
// ebből építi fel a panelt, ezért máshol nem kell semmit szerkeszteni.
window.FUZFO_POSTS = [
    {
        label: 'Fontos információk a fesztiválról',
        html: `
            <p>Sziasztok! Tavaly nagyon jól betartottuk a legfontosabb szabályokat, emiatt tudunk idén is
                egybegyűlni. Folytassuk ezt, hogy jövőre is találkozhassunk!!</p>
            <p class="notif-warn">MINDENKI OLVASSA EL!</p>
            <p>Ez egy fesztivál, szóval ilyen mentalitással kell az egészet elképzelni:</p>
            <ul>
                <li>Felfogni úgy, mintha <b>NEM LENNE HÁZ </b>, csak a kert létezik!!</li>
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
    }
    
];
