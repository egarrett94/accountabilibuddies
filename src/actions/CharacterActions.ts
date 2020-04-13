// import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// import character typing
import { ICharacter, ICharacterState } from '../reducers/characterReducer';

// create action constants
export enum CharacterActionTypes {
	GET_ALL = 'GET_ALL',
}

// interface or get all action type
export interface ICharacterGetAllAction {
	type: CharacterActionTypes.GET_ALL;
	characters: ICharacter[];
}

// combine action types with a union
// e.g. export type characteractions = actionone | actiontwo
export type CharacterActions = ICharacterGetAllAction;

// get all action
export const getAllCharacters: ActionCreator<ThunkAction<
	Promise<any>,
	ICharacterState,
	null,
	ICharacterGetAllAction
>> = () => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await axios.get('http://www.omdbapi.com/?apikey=3d99ff8a&s=star+wars');
			console.log(response);
			dispatch({
				characters: response.data.results,
				type: CharacterActionTypes.GET_ALL,
			});
		} catch (err) {
			console.error(err);
		}
	};
};
