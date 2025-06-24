function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/posts/') || path.includes('/saude/') || path.includes('/eventos/') || path.includes('/contato/')) {
        return '../';
    }
    return './';
}

function showLoader() {

    const loaderHTML = `
        <div id="wikipets-loader" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #a62631;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.2s ease;
        ">
            <div style="
                text-align: center;
                color: white;
            ">
                <div style="
                    width: 50px;
                    height: 50px;
                    border: 3px solid #f2c53d;
                    border-top: 3px solid transparent;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 20px;
                "></div>
                <h3 style="margin: 0; color: #f2c53d;">WikiPets</h3>
                <p style="margin: 10px 0 0 0; font-size: 14px;">Carregando...</p>
            </div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);
}

function hideLoader() {
    const loader = document.getElementById('wikipets-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 50);
    }
}

function generateHeader() {
    const basePath = getBasePath();
    return `
        <div class="manual-header">
            <nav class="manual-navbar">
                <div class="manual-logo">
                    <img class="images" src="${basePath}imgs/logo.svg" alt="logo">
                </div>
                <div id="header-line"></div>
                <ul class="manual-nav-links">
                    <li><a href="${basePath}index.html">Home</a></li>
                    <li><a href="${basePath}saude/saude.html">Saúde</a></li>
                    <li><a href="${basePath}eventos/eventos.html">Eventos</a></li>
                    <li><a href="${basePath}contato/contato.html">Contato</a></li>
                </ul>
                <div class="manual-hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            <div class="manual-banner">
                <div class="manual-animais">
                    <img src="${basePath}imgs/cat.svg" alt="gato">
                    <img src="${basePath}imgs/dog.svg" alt="cachorro">
                </div>
                <div class="manual-banner-text">
                    <h1>WikiPets</h1>
                    <p>Ajudamos no cuidado com seu pet</p>
                </div>
            </div>
        </div>
    `;
}

function generateFooter() {
    const basePath = getBasePath();
    return `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-logo">
                    <img src="${basePath}imgs/logo.svg" alt="WikiPets Logo" class="logo-img">
                    <h3>WikiPets</h3>
                </div>
                <div class="footer-contact">
                    <h4>Entre em Contato</h4>
                    <p>Email: projwikipets@gmail.com</p>
                    <ul class="social-links">
                        <li><a href="https://www.instagram.com/wikipets_projeto/" target="_blank"
                                class="social-link instagram-link" aria-label="Siga WikiPets no Instagram">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 WikiPets. Todos os direitos reservados.</p>
            </div>
        </footer>
    `;
}


function insertHeaderFooter() {
    showLoader();
    
    setTimeout(() => {
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = generateHeader();
        }

        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = generateFooter();
        }

        setupMobileMenu();
        
        setTimeout(() => {
            hideLoader();
        }, 10);
    }, 10);
}


function setupMobileMenu() {
    const hamburger = document.querySelector('.manual-hamburger');
    const navLinks = document.querySelector('.manual-nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('manual-active');
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    insertHeaderFooter();
}); 