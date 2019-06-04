import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { changeItemValue } from 'actions/settings';

const Tag = (props) => {
	const { title } = props.config;
	const handleItemChange = (e) => {
		const { sectionIndex } = props;
		const { type } = e.currentTarget.dataset;
		props.dispatch(changeItemValue(sectionIndex, null, null, null, e.currentTarget.value, type));
	};

	return (
		<div className="tag-item">
			<textarea onChange={handleItemChange} value={title} data-type="tag" />
		</div>
	);
};

Tag.propTypes = {
	dispatch: PropTypes.func,
	sectionIndex: PropTypes.any,
	config: PropTypes.object
};

const mapStateToProps = (state) => { return { ...state }; };
export default connect(mapStateToProps)(Tag);
