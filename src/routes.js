import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductListManageContainer from './containers/ProductListManageContainer'
import ProductActionContainer from './containers/ProductActionContainer'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import CartPage from './pages/CartPage/CartPage'
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListManageContainer />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProductActionContainer history={history} />
    },
    {
        path: '/product/edit/:id',
        exact: false,
        main: ({ match, history }) => <ProductActionContainer match={match} history={history} />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartPage />
    },
    {
        path: '/detail/:id',
        exact: false,
        main: ({ match }) => <ProductDetailPage match={match} />
    },
    {
        path: null,
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes