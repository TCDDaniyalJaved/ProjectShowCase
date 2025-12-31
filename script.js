        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            themeToggle.innerHTML = body.classList.contains('dark-theme') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });

        const chips = document.querySelectorAll('.chip');
        const cards = document.querySelectorAll('.project-card');
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const filter = chip.dataset.filter;
                cards.forEach(card => {
                    const cats = card.dataset.category.split(' ');
                    if (filter === 'all' || cats.includes(filter)) {
                        card.style.display = 'block';
                        setTimeout(() => { card.style.opacity = 1; card.style.transform = 'translateY(0)'; }, 10);
                    } else {
                        card.style.opacity = 0;
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });

        const modal = document.getElementById('videoModal');
        const modalVideo = document.getElementById('modalVideo');
        const closeModal = document.getElementById('closeModal');

        document.querySelectorAll('.play-overlay').forEach(overlay => {
            overlay.addEventListener('click', () => {
                let src = overlay.dataset.video;
                if (!src && overlay.previousElementSibling.tagName === 'IFRAME') {
                    src = overlay.previousElementSibling.src;
                }
                if (src) {
                    modalVideo.src = src + '?autoplay=1';
                    modal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                }
            });
        });

          document.getElementById("year").textContent = new Date().getFullYear();
        closeModal.onclick = () => { modal.style.display = 'none'; modalVideo.src = ''; document.body.style.overflow = 'auto'; };
        modal.onclick = (e) => { if (e.target === modal) { modal.style.display = 'none'; modalVideo.src = ''; document.body.style.overflow = 'auto'; } };