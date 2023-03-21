import user from '../components/user/network'
import event from '../components/event/network'
import auth from '../components/auth/network'

export const routes = (server:any) => {
    server.use('/users',user);
    server.use('/events',event);
    server.use('/auth',auth);
}