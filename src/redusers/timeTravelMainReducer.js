export function timeTravel(reducer) {
    const initialState = {
      past: [],
      present: reducer(undefined, {}),
      future: [],
      timeTravel:{canUndo: false, canRedo: false}
    }

    return function (state = initialState, action) {
      const { past, present, future } = state;
      let newState = {};
      const historyDeep = 20;//how much state snapshots to remember

      switch (action.type) {
            case 'UNDO':
                const previous = past[past.length - 1];
                const newPast = past.slice(0, past.length - 1);
                newState = {
                    past: newPast,
                    present: previous,
                    future: [present, ...future],
                    timeTravel:{}
                };
                    newState.timeTravel.canUndo = newState.past.length>0;
                    newState.timeTravel.canRedo = newState.future.length>0;
                    return newState;

            case 'REDO':
                const next = future[0];
                const newFuture = future.slice(1);
                newState = {
                    past: [...past, present],
                    present: next,
                    future: newFuture,
                    timeTravel:{}
                };
                newState.timeTravel.canUndo = newState.past.length>0;
                newState.timeTravel.canRedo = newState.future.length>0;
                return newState;

            case 'MULTIPLE_ACTIONS':
                //reduse multiple actions as one state change
                const actions = action.payload.listActions
                console.log(actions)
                let newnewPresent={...state.present};
                actions.forEach((action)=>{
                    newnewPresent = {...newnewPresent,...reducer(newnewPresent, action)}
                console.log("from reduser",reducer(newnewPresent, action))
                })
                if (present === newnewPresent) {
                    return state
                }
                console.log("newPresent: ",newnewPresent,present === newnewPresent)
                

                newState = {
                    past: [...past, present].slice(-historyDeep),
                    present: newnewPresent,
                    future: [],
                    timeTravel:{}
                }
                newState.timeTravel.canUndo = newState.past.length>0;
                newState.timeTravel.canRedo = newState.future.length>0;
                return newState;

            case 'LOAD_STATE_FROM_LOCALSTORAGE':
                if(localStorage.todoState.length){
                    newState = JSON.parse(localStorage.todoState);
                    action.payload.cb();
                    return newState;
                }
                return state;
            

            default:
                    // return state
                const newPresent = reducer(present, action);
                if (present === newPresent) {
                    console.log("state didnt change")
                    return state
                }

                newState = {
                    past: [...past, present].slice(-historyDeep),
                    present: newPresent,
                    future: [],
                    timeTravel:{}
                }
                newState.timeTravel.canUndo = newState.past.length>0;
                newState.timeTravel.canRedo = newState.future.length>0;
                localStorage.todoState = JSON.stringify(newState);
                return newState;
      }
    }
  }