import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../store/Store';
import { ICharacter } from '../reducers/characterReducer';

// create the containers interface
interface IProps {
	characters: ICharacter[];
}

const CharacterList: React.FC<IProps> = (props) => {
	const { characters } = props;
	return (
		<div className="name-container">
			{characters &&
				characters.map((character) => (
					<span key={character.name} className="name">
						{character.name}
					</span>
				))}
		</div>
	);
};

// grab characters from the store and make them available on props
const mapStateToProps = (store: IAppState) => ({
	characters: store.characterState.characters,
});

export default connect(mapStateToProps)(CharacterList);
