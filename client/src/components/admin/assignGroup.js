export const assignGroup = (id, state, setState) => {
  const idx = state.findIndex(itemId => itemId === id)
  if (idx === -1){
    add(id, state, setState)
  } else {
    remove(id, state, setState)
  } 
}

const add = (id, state, setState) => setState([...state, id])
const remove = (id, state, setState) => setState(state.filter(itemId => itemId !== id))
