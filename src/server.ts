import app from './app'
import { ServerBootstrap} from './bootstrap/server.bootstrap';
import { DatabaseBootStrap,IDataBaseBootStrap} from './bootstrap/database.bootstrap'



(async () => {
    const serverBootstrap = new ServerBootstrap(app)
    const databaseBootstrap: IDataBaseBootStrap = new DatabaseBootStrap()

    try {
        await serverBootstrap.initialize();
        await databaseBootstrap.initialize();
    } catch (err) {
        console.log(err)
    }

})()