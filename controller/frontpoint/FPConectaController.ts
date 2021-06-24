import { Request, Response } from "express"
import api from "../../services/api"

class FPConectaController {

    async Cadastrar(req: Request, res: Response){

        const { name, email, phone } = req.body

        try {

            const objPerson = {

                name,
                email,
                phone,
                owner_id: "",
                org_id:"",
                visible_to: 3,

            }

            const { data: respostaPerson } = await api.post('/persons?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objPerson)

            if(respostaPerson){

                const objDeal = {
                  title: "FP-Evento conecta",
                  value: 0,
                  currency: 'BRL',
                  user_id: '1063083',
                  person_id: respostaPerson.data.id,
                  org_id: null,
                  stage_id: '570',
                  status: 'open',
                  expected_close_date: null,
                  probability: null,
                  lost_reason: null,
                  visible_to: '3',
                  add_time: new Date().getHours(),
                }
        
                const { data: respostaDeal } = await api.post('/deals?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objDeal)
        
                return res.status(200).json({ Deal:respostaDeal, Person:respostaPerson, message: 'Pessoa encaminhada para o pipedrive!', PERSONID:respostaPerson.data.id })
      
              }

        } catch (error) {
            console.log(error)
            return res.json({ message: error })
        }
    }

}

export default new FPConectaController()