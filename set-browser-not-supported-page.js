document.head.innerHTML = `<meta charset="utf-8">
        <meta name="generator" content="${window.appConfig.appName}">
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">
        <title>Текущий браузер не поддерживается</title>
        <meta name="description" content="Текущий браузер не поддерживается приложением ${window.appConfig.appName}.">
        <link rel="icon" href="${window.appConfig.logo.ico64}">
        <link rel="shortcut icon" sizes="32x32" href="${window.appConfig.logo.ico32}">`;
document.body.innerHTML = `<style>
            body {
                font-family: Roboto, sans-serif;
                color: #424242;
                font-size: 1rem;
                line-height: 1.5;
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
                min-height: 100vh;
                display:flex;
                flex-direction: column;
                text-align: center;
                justify-content: center;
                align-items: center;
                margin: 0;
            }

            a {
                color: #4285f4;
                text-decoration: none;
                outline: 0;
                margin-bottom: 8px;
            }

            a:hover {
                text-decoration: underline;
            }

            h1 {
                font-size: 22px;
                font-weight: 500;
                margin: 16px 0 0 0;
            }

            #logo {
                width: 100px;
                height: 100px;
            }

            #container {
                padding: 32px 8px 32px 8px;
                box-sizing: border-box;
            }

            .block {
                margin-top: 16px;
            }

            #supported, #spec {
                display: flex;
                flex-direction: column;
                margin-top: 16px;
            }

            .browser {
                display: flex;
                align-items: center;
                width: 150px;
                margin: 0 auto 8px;
            }

            .browser img {
                width: 32px;
                height: 32px;
            }

            .name {
                margin-left: 8px;
            }

            .version {
                margin-left: 8px;
                color: #737373;
            }
        </style>
        <div id="container">
            <img id="logo" src="${window.appConfig.logo.svg}" alt="${window.appConfig.appName} logo">
    <h1>Текущий браузер не поддерживается</h1>
    <div class="block">Поддерживаемые браузеры</div>
    <div id="supported">
        <div class="browser">
            <img src="${window.appConfig.cloudinary.url}/image/upload/logos/chrome/logo.png" alt="Chrome browser">
            <div class="name">Chrome</div>
            <div class="version">> 61</div>
        </div>
        <div class="browser">
            <img src="${window.appConfig.cloudinary.url}/image/upload/logos/firefox/logo.png" alt="Firefox browser">
            <div class="name">Firefox</div>
            <div class="version">> 63</div>
        </div>
        <div class="browser">
            <img src="${window.appConfig.cloudinary.url}/image/upload/logos/safari/logo.png" alt="Safari browser">
            <div class="name">Safari</div>
            <div class="version">> 11</div>
        </div>
        <div class="browser">
            <img src="${window.appConfig.cloudinary.url}/image/upload/logos/opera/logo.png" alt="Opera browser">
            <div class="name">Opera</div>
            <div class="version">> 48</div>
        </div>
    </div>
    <div class="block">И другие браузеры, которые поддерживают спецификации:</div>
    <div id="spec">
        <a href="https://caniuse.com/#search=html%20templates" target="_blank" rel="noopener noreferrer">HTML templates</a>
        <a href="https://caniuse.com/#feat=custom-elementsv1" target="_blank" rel="noopener noreferrer">Custom Elements v1</a>
        <a href="https://caniuse.com/#feat=shadowdomv1" target="_blank" rel="noopener noreferrer">Shadow DOM v1</a>
        <a href="https://caniuse.com/#search=modules" target="_blank" rel="noopener noreferrer">ES Modules</a>
    </div>
</div>`;
