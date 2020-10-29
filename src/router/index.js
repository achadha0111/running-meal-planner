import Vue from 'vue';
import Router from 'vue-router';

import AddRecipes from 'components/AddRecipes'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/add',
            name: 'Add Recipes',
            component: AddRecipes
        }
    ]
})