import { category } from '../../utils';
import ping from './ping';
import server from './server';
import user from './user';

export default category('Debug', [ping, server, user]);
