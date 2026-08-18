const GALLERY_DATA = {
            /* "2026": [
                { name: "Feltöltés alatt", date: "N/A", path: "2026/01_osszegzo.jpg" }
                
            ], */
            "2025": [
                { name: "Nyitó buli pillanatok", date: "2025.09.27.", path: "2025/IMG_4341.JPG" },
                { name: "Fő színpad - Koncert", date: "2025.09.27.", path: "2025/IMG_6374.jpeg" },
                { name: "Tábortűz és hangulat", date: "2025.09.27.", path: "2025/IMG_6152.jpeg" }
            ]
        };

        const SELECT_ELEMENT = document.getElementById('year-select');
        const GALLERY_CONTAINER = document.getElementById('gallery-container');
        
        // Modal elemek
        const MODAL_ELEMENT = document.getElementById('imageModal');
        const MODAL_TITLE = document.getElementById('imageModalLabel');
        const MODAL_IMAGE = document.getElementById('modalImage');

        // 1. Legördülő menü feltöltése
        function populateYearSelect() {
            const years = Object.keys(GALLERY_DATA).sort().reverse();

            years.forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = `FűzfőFeszt ${year}`;
                SELECT_ELEMENT.appendChild(option);
            });
            
            if (years.length > 0) {
                displayGallery(years[0]);
            }
        }

        // 2. Galéria megjelenítése (kattintható képekkel)
        function displayGallery(year) {
            GALLERY_CONTAINER.innerHTML = '';
            const images = GALLERY_DATA[year];

            if (!images) return;

            images.forEach(image => {
                const colDiv = document.createElement('div');
                colDiv.className = 'col-md-4 col-sm-6 mb-4'; 

                colDiv.innerHTML = `
                    <div class="card h-100">
                        <img 
                            src="${image.path}" 
                            class="card-img-top" 
                            alt="${image.name}"
                            data-bs-toggle="modal" 
                            data-bs-target="#imageModal"
                            data-image-path="${image.path}"
                            data-image-name="${image.name}"
                            data-image-date="${image.date}"
                            onclick="openImageModal(this)"
                        >
                        <div class="card-body">
                            <h5 class="card-title">${image.name}</h5>
                            <p class="card-text"><i class="bi bi-calendar-check-fill me-2"></i>${image.date}</p>
                        </div>
                    </div>
                `;
                GALLERY_CONTAINER.appendChild(colDiv);
            });
        }
        
        // Új funkció: Modal tartalmának beállítása és megjelenítése
        window.openImageModal = function(imageElement) {
            const path = imageElement.getAttribute('data-image-path');
            const name = imageElement.getAttribute('data-image-name');
            const date = imageElement.getAttribute('data-image-date');

            // Modal elemek kitöltése
            MODAL_TITLE.textContent = `${name} (${date})`;
            MODAL_IMAGE.src = path;
        };

        // 3. Eseménykezelő a legördülő menühöz
        SELECT_ELEMENT.addEventListener('change', (event) => {
            const selectedYear = event.target.value;
            displayGallery(selectedYear);
        });

        // Kód indítása az oldal betöltése után
        document.addEventListener('DOMContentLoaded', populateYearSelect);
    