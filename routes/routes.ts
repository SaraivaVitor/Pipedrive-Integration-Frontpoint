import { Request, Response, Router } from 'express';
import FormsController from '../controller/FormsController';
import FormsFrontPoint from '../controller/frontpoint/FormsFrontPoint';
import FPConectaController from '../controller/frontpoint/FPConectaController';

const routes = Router()

routes.post('/formdatas', FormsController.getDataForm) // <- linkedin form


routes.post('/fpcarreira', FormsFrontPoint.Carreira)
routes.post('/fpnegocio', FormsFrontPoint.Negocio)
routes.post('/fpcontato', FormsFrontPoint.Contato)
routes.post('/fplinkedin', FormsFrontPoint.Linkedin)

routes.post('/fpconecta', FPConectaController.Cadastrar)// <- Evento conecta+

//Rota de teste

routes.post('/testrequest' , ( req:Request, res: Response )=> {
  const data = req.body;

  return res.json(data)
})


export default routes;