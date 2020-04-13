import * as React from 'react';
import '../App.css';

import CharacterList from '../containers/CharacterList';

const Profile: React.FC<{}> = () => {
	return (
		<div>
			<h1>Profile</h1>
			<CharacterList />
		</div>
	);
};

export default Profile;
