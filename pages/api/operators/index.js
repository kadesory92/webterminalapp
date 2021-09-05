import { operatorsRepo } from "../../../helpers";

export default handler;

function handler(req, res){
    switch(req.method){
        case 'GET':
            return getOperators();
        case 'POST':
            return createOperator();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getOperators(){
        const operators=operatorsRepo.getAll();
        return res.status(200).json(operators);
    }

    function createOperator(){
        try {
            operatorsRepo.create(req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }


}