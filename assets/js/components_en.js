/* menu inner button */
class MenuInnerButton extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute("label") || "";
        const href = this.getAttribute("href") || "#";

        this.innerHTML = `
            <a href="${href}" class="menu-inner-button">
                ${label ? `<p class="p-bigger">${label}</p>` : ""}
                
                <svg xmlns="http://www.w3.org/2000/svg" width="56.437" height="56.437" viewBox="0 0 56.437 56.437">
                    <g transform="translate(0 0.354)" style="isolation: isolate">
                        <path d="M7.5,18H63.23" transform="translate(-7.5 9.865)" fill="none" stroke="#c2ff91" stroke-linejoin="round" stroke-width="1.5"/>
                        <path d="M7.5,63.23,35.365,35.365,7.5,7.5" transform="translate(20.365 -7.5)" fill="none" stroke="#c2ff91" stroke-width="1.5"/>
                    </g>
                </svg>
            </a>
        `;
    }
}

customElements.define("menu-inner-button", MenuInnerButton);





/*footer buttons*/
class FooterArrow extends HTMLElement {
    connectedCallback() {
        const direction = this.getAttribute("direction");
        const href = this.getAttribute("href") || "#";

        const leftSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
          <g transform="translate(1893 1054) rotate(180)">
            <g class="ellipse-button-footer" transform="translate(1839 1000)" fill="none"  stroke-width="1.5">
              <circle cx="27" cy="27" r="27" stroke="none"/>
              <circle cx="27" cy="27" r="26.5" fill="none"/>
            </g>
            <g class="arrow-button-footer" transform="translate(1853.76 1014.76)" style="isolation: isolate">
              <path d="M7.5,18H31.98" transform="translate(-7.5 -5.76)" fill="none"  stroke-linejoin="round" stroke-width="1.5"/>
              <path d="M7.5,31.98,19.74,19.74,7.5,7.5" transform="translate(4.74 -7.5)" fill="none"  stroke-width="1.5"/>
            </g>
          </g>
        </svg>`;

        const rightSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
          <g transform="translate(-1839.492 -1000.493)">
            <g class="ellipse-button-footer" transform="translate(1839.492 1000.493)" fill="none"  stroke-width="2">
              <circle cx="27" cy="27" r="27" stroke="none"/>
              <circle cx="27" cy="27" r="26.5" fill="none"/>
            </g>
            <g class="arrow-button-footer" transform="translate(1853.895 1014.895)" style="isolation: isolate">
              <path d="M7.5,18H32.2" transform="translate(-7.5 -5.648)" fill="none"  stroke-linejoin="round" stroke-width="1.5"/>
              <path d="M7.5,32.2,19.852,19.852,7.5,7.5" transform="translate(4.852 -7.5)" fill="none"  stroke-width="1.5"/>
            </g>
          </g>
        </svg>`;

        const svg = direction === "left" ? leftSVG : rightSVG;

        this.innerHTML = `
            <a href="${href}" class="footer-arrow">
                ${svg}
            </a>
        `;
    }
}

customElements.define("footer-arrow", FooterArrow);





/*menu header*/
class HeaderMenuButton extends HTMLElement {
    connectedCallback() {
        const id = this.getAttribute("id") || "";

        this.innerHTML = `
            <div class="header-menu">
                <svg id="${id}" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
                  <g class="header-menu-ellipse" transform="translate(1893 1054) rotate(180)">
                    <g transform="translate(1839 1000)" fill="none" stroke="#c3ff92" stroke-width="1.5">
                      <circle cx="27" cy="27" r="27" stroke="none"/>
                      <circle cx="27" cy="27" r="26.5" fill="none"/>
                    </g>
                    <g class="header-menu-stroke" transform="translate(1853.76 1014.76)" style="isolation: isolate">
                      <path d="M7.5,18H31.98" transform="translate(-7.5 -5.76)" fill="none" stroke="#c3ff92" stroke-linejoin="round" stroke-width="1.5"/>
                      <path d="M7.5,18H31.98" transform="translate(-7.5 -18)" fill="none" stroke="#c3ff92" stroke-linejoin="round" stroke-width="1.5"/>
                      <path d="M7.5,18H31.98" transform="translate(-7.5 6.48)" fill="none" stroke="#c3ff92" stroke-linejoin="round" stroke-width="1.5"/>
                    </g>
                  </g>
                </svg>
            </div>
        `;
    }
}

customElements.define("header-menu-button", HeaderMenuButton);






class SectionButton extends HTMLElement {
    connectedCallback() {
        const href = this.getAttribute("href") || "#";

        this.innerHTML = `
            <a href="${href}" class="section-button">
                <svg id="section-button" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
                  <g transform="translate(-1839.492 -1000.493)">
                    <g class="section-button-ellipse" transform="translate(1839.492 1000.493)" fill="none" stroke-width="1">
                      <circle cx="27" cy="27" r="27" stroke="none"/>
                      <circle cx="27" cy="27" r="26.5" fill="none"/>
                    </g>
                    <g class="section-button-arrow" transform="translate(1853.895 1014.895)" style="isolation: isolate">
                      <path d="M7.5,18H32.2" transform="translate(-7.5 -5.648)" fill="none" stroke-linejoin="round" stroke-width="1"/>
                      <path d="M7.5,32.2,19.852,19.852,7.5,7.5" transform="translate(4.852 -7.5)" fill="none" stroke-width="1"/>
                    </g>
                  </g>
                </svg>
            </a>
        `;
    }
}

customElements.define("section-button", SectionButton);





class MenuHomepage extends HTMLElement {
    connectedCallback() {

        const ptLink = this.getAttribute("pt-link") || "#";
        const enLink = this.getAttribute("en-link") || "#";

        this.innerHTML = `
        <!--menu homepage-->
        <div id="menu" class="menu-general">
            <div class="menu-header">
                <div class="header-left" onclick="window.location.href='index.html'">
                    <div>
                        <img id="header-logo" src="../assets/data/header/logo.svg">
                    </div>
                    <div>
                        <h2 id="header-title">Serra do Açor</h2>
                    </div>
                </div>

                <div class="header-right">
                    <div class="header-language">
                        <a href="${ptLink}">
                        <p>PT</p>
                        </a>
                        <p>·</p>
                        <a href="${enLink}">
                        <p class="language-selected">EN</p>
                        </a>
                    </div>

                    <div class="header-menu">
                        <svg id="menu-close" data-name="Component 19 – 1" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
                        <g id="Ellipse_2" data-name="Ellipse 2" fill="none" stroke="#c2ff91" stroke-width="1.5">
                            <circle cx="27" cy="27" r="27" stroke="none"/>
                            <circle cx="27" cy="27" r="26.5" fill="none"/>
                        </g>
                        <g id="Icon_feather-arrow-left" data-name="Icon feather-arrow-left" transform="translate(14.402 14.402)" style="isolation: isolate">
                            <path id="Path_30" data-name="Path 30" d="M7.5,32.2,19.852,19.852,7.5,7.5" transform="translate(-7.5 -7.5)" fill="none" stroke="#c2ff91" stroke-width="1.5"/>
                            <path id="Path_48" data-name="Path 48" d="M19.852,32.2,7.5,19.852,19.852,7.5" transform="translate(4.852 -7.5)" fill="none" stroke="#c2ff91" stroke-width="1.5"/>
                        </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="menu-main">

                <div class="menu-container span-3" id="menu-container1"  onclick="window.location.href='flora1.html'">
                    <div class="menu-container-image">
                        <img loading="lazy" class="inverted-radius" src="../assets/data/fotos/flora/carvalhal/carvalhal_1.webp">
                        <div class="menu-title">
                            <h3>Vegetation and Flora</h3>
                        </div>

                        <div class="menu-knowmore-1">
                            <p>Know more</p>
                            <img src="../assets/data/icons/menu-arrow.svg">
                        </div>
                    </div>
                </div>

                <div class="menu-container span-3" id="menu-container2" onclick="window.location.href='fauna1.html'"> 
                    <div class="menu-container-image">
                        <img loading="lazy" class="inverted-radius" src="../assets/data/fotos/fauna/aves/Aguia-de-asa-redonda.webp">
                        <div class="menu-title">
                            <h3>Fauna</h3>
                        </div>
                        <div class="menu-knowmore-1">
                            <p>Know more</p>
                            <img src="../assets/data/icons/menu-arrow.svg">
                        </div>
                    </div>
                </div>

                <div class="span-6" id="menu-column1">
                    <div class="menu-row" id="menu-row1">
                        <div class="menu-container" id="menu-container3" onclick="window.location.href='especiesinvasoras1.html'">
                            <div class="menu-container-image">
                                <img loading="lazy" class="inverted-radius" src="../assets/data/fotos/especies invasoras/acacia_1.webp">
                                <div class="menu-title">
                                    <h3>Invasive Species</h3>
                                </div>
                                <div class="menu-knowmore-1">
                                    <p>Know more</p>
                                    <img src="../assets/data/icons/menu-arrow.svg">
                                </div>
                            </div>
                        </div>

                        <div class="menu-container" id="menu-container4" onclick="window.location.href='geomorfologia1.html'">
                            <div class="menu-container-image">
                                <img loading="lazy" class="inverted-radius" src="../assets/data/fotos/geomorfologia/geomorfologia_4.webp">
                                <div class="menu-title">
                                    <h3>Geomorphology</h3>
                                </div>
                                <div class="menu-knowmore-1">
                                    <p>Know more</p>
                                    <img src="../assets/data/icons/menu-arrow.svg">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="menu-row" id="menu-row2">
                        <div class="menu-container" id="menu-container5" onclick="window.location.href='fragadapena1.html'">
                            <div class="menu-container-image">
                                <img loading="lazy" class="inverted-radius" src="../assets/data/fotos/fraga-da-pena/Fraga-da-Pena.webp">
                                <div class="menu-title">
                                    <h3>A Fraga<br>da Pena</h3>
                                </div>
                                <div class="menu-knowmore-1">
                                    <p>Know more</p>
                                    <img src="../assets/data/icons/menu-arrow.svg">
                                </div>
                            </div>
                        </div>

                        <div id="menu-column2">
                            <div class="menu-container" id="menu-container6" onclick="window.location.href='historia1.html'">
                                <div class="menu-container-image">
                                    <img loading="lazy" class="inverted-radius" src="../assets/data/fotos/historia/socalcos agricolas_4_2.webp">
                                    <div class="menu-title">
                                        <h3>History and Human activities</h3>
                                    </div>
                                    <div class="menu-knowmore-1">
                                        <p>Know more</p>
                                        <img src="../assets/data/icons/menu-arrow.svg">
                                    </div>
                                </div>
                            </div>

                            <div class="menu-container" id="menu-container7"  onclick="window.location.href='incendios1.html'">
                                <div class="menu-container-image">
                                    <img loading="lazy" class="inverted-radius" src="../assets/data/fotos/incendios/incendio_2.webp">
                                    <div class="menu-title">
                                        <h3>Forest fires</h3>
                                    </div>
                                    <div class="menu-knowmore-1">
                                        <p>Know more</p>
                                        <img src="../assets/data/icons/menu-arrow.svg">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div class="menu-footer" id="menu-general-button">
                <footer-arrow direction="left"></footer-arrow>
            </div>
        </div>
        `;
    }
}

customElements.define("menu-homepage", MenuHomepage);

