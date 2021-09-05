import operators from '../data/operators.json'

export const operatorsRepo={
    getAll,
    getById,
    create,
    update,
    delete:_delete
};

function getAll(){
    return operators;
}

function getById(id){
    return operators.find(x=>x.id.toString()===id.toString());
}

function create({name}){
    const operator={name};

    operator.id = operators.length ? Math.max(...operators.map(x => x.id)) + 1 : 1;

    operators.push(operator);
    saveData();
}

function update({name}){
    const params = {name};
    const operator = operators.find(x=>x.id.toString()===id.toString());

    Object.assign(operator, params);
    saveData();
}

function _delete(id){
    // filter out deleted user and save
    operators = operators.filter(x => x.id.toString() !== id.toString());
    saveData()
}