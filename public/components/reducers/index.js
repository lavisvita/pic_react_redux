function issues(state = [], action){
    console.log(action);
    switch(action.type){
        case 'ISSUES_LOADED':
            return action.data;
        default:
            return state;
    }
}

export default {issues};

