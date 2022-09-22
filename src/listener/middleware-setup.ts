import { createListenerMiddleware } from '@reduxjs/toolkit'
import setupCartListener from './cart-listener';
// Create the middleware instance and methods
const listenerMiddleware = createListenerMiddleware();

export const setupMiddleware = () => {
    setupCartListener();
}

export default listenerMiddleware;