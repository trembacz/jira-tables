import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Sections from 'components/Sections';
import Preview from 'components/Preview';

import { translations } from 'constants/index.js';

const Main = (props) => {
	const { sections } = props.settings;
	return (
		<div className="main-container">
			{sections ? [
				<Sections key="section" sections={sections} />,
				<Preview key="preview" data={sections} translations={translations} />
			] : (
				<h1>{translations.missingConfig}</h1>
			)}
		</div>
	);
};

Main.propTypes = {
	dispatch: PropTypes.func,
	settings: PropTypes.object
};

const mapStateToProps = (state) => { return { ...state }; };
export default connect(mapStateToProps)(Main);
