import React, { useState } from 'react';

const PostContext = React.createContext();
const PostContextProvider = (props) => {
	const [postId, setPostId] = useState(null);
	const [category, setCategory] = useState(null);
	return (
		<PostContext.Provider value={{ postId, setPostId, category, setCategory }}>
			{props.children}
		</PostContext.Provider>
	);
};

export { PostContext, PostContextProvider };
