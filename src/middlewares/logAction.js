export const logAction = (getState, dispatch)=>next=>action=>{
    console.log('ACTION:' + action.type);
    return next(action);
}