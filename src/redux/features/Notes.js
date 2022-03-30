

export function notes(state={noters:[],favorites:[]},action){
    if(action.type === 'loader'){
        if(action.noters.favorites.notes){
            return {
                noters:action.noters.notes,
                favorties:action.noters.favorites.notes
            }
        }
        return {
            noters:action.noters.notes,
            favorties:[]
        }
    }
    return state
}

export function getNotes(state){
    return state.notes
}