const INITIAL:any  = {
    djList : {
        name:'李四'
    }
}
export  default function dj(state = INITIAL,action):any {
    switch (action.type){
        case 'GETD':
            const { name } = action.info;
            return {
                ...state,
                djList: name
            }
        default:
            return  state
    }
}
