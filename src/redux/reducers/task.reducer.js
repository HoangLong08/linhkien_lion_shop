const initialState = {
	toDoList: [],
};

function taskReducer(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN': {
			return {
				...state,
				toDoList: [
					...state.toDoList,
					action.payload,
				],
			};
		}

		default: {
			return state;
		}
	}
}

export default taskReducer;