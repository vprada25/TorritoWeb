import Auth from '../services/auth.service'

const menu = [];

Auth.getMenu().then(res => {
    res.data.map(route => {
        if (route.FKID_MENU !== null) {
            route.children = res.data.filter(item => item.FKID_MENU === route.FKID_MENU)
            menu.push(route)
        } else {
            menu.push(route);
        }
    })
})
    .catch(err => console.error(err))

export default menu;
