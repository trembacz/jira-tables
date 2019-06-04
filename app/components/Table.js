
import PropTypes from 'prop-types';
import React from 'react';

import TableItem from 'components/TableItem';

const Table = (props) => {
	const { config, sectionIndex } = props;
	return (
		config.tableItems && (
			config.tableItems.map((singleItem, index) => {
				return <TableItem key={index} sectionIndex={sectionIndex} itemIndex={index} data={singleItem} />;
			})
		)
	);
};

Table.propTypes = {
	dispatch: PropTypes.func,
	sectionIndex: PropTypes.any,
	config: PropTypes.object
};

export default Table;
