import app from './app'
import router from './router'
import store from './store'
import './plugins'

app.use(store).use(router).mount('#app')
