import PropTypes from 'prop-types';
import React from 'react';

import Table from 'components/Table';
import Tag from 'components/Tag';

const Sections = (props) => {
	const { sections } = props;
	return (
		<div className="section-container">
			{sections.map((section, index) => {
				const sectionTemplate = section.type === 'table'
					? <Table key={index} sectionIndex={index} config={section} />
					: <Tag key={index} sectionIndex={index} config={section} />;
				return sectionTemplate;
			})}
		</div>
	);
};

Sections.propTypes = {
	sections: PropTypes.array,
};

export default Sections;
