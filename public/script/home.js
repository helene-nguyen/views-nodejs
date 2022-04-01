//EJS project

const navbar = {
    //~variables
    //element
    body: document.querySelector('body'),
    navFullScreen: document.querySelector('.full-screen-nav'),
    backdrop: document.querySelector('.backdrop'),
    //icon
    triggerIcon: `<i class="fas fa-code"></i>`,
    text: ` Click me`,
    //~init
    init: function () {
        navbar.trigger();
    },
    trigger: function () {
        const trigger = document.createElement('button');
        trigger.classList.add('trigger');
        navbar.body.appendChild(trigger);

        trigger.innerHTML = navbar.triggerIcon + this.text;

        trigger.addEventListener('click', () => {
            navbar.navFullScreen.classList.add('open-nav');
        });

        navbar.backdrop.addEventListener('click', () => {
            navbar.navFullScreen.classList.remove('open-nav');
        });

        return trigger;
    }

}

navbar.init();