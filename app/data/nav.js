const nav = {
    navElement: [{
            name: 'homePage',
            title: 'Home',
            icon: `fas fa-home`,
            cssFile: `home.css`

        },
        {
            name: 'about',
            title: 'About',
            icon: `fas fa-user-alt`,
            cssFile: `page.css`
        },
        {
            name: 'projects',
            title: 'Projects',
            icon: `fas fa-tasks`,
            cssFile: `page.css`
        },
        {
            name: 'gallery',
            title: 'Gallery',
            icon: `fas fa-images`,
            cssFile: `page.css`
        },
        {
            name: 'contact',
            title: 'Contact',
            icon: `fas fa-at`,
            cssFile: `page.css`
        }
    ]
};

module.exports = nav;

//loop for getting all titles and icons