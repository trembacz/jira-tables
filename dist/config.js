var templateConfig = {
	sections: [
		{
			type: 'tag',
			title: 'h2. Summary'
		},
		{
			type: 'table',
			tableItems: [
				{
					addItems: true,
					blankLine: 'both', // 'after', 'before', 'both'
					headers: [
						{
							title: 'ID',
							wrapper: '|'
						},
						{
							title: 'Title',
							wrapper: '|'
						}
					],
					items: []
				},
				{
					addItems: true,
					blankLine: 'after',
					headers: [
						{
							title: 'Implemented in',
							wrapper: '|'
						},
						{
							title: 'Epic Name',
							wrapper: '|'
						}
					],
					items: []
				},
				{
					addItems: true,
					blankLine: 'after',
					headers: [
						{
							title: 'Description',
							wrapper: '|'
						}
					],
					items: []
				},
				{
					blankLine: 'after',
					headers: [
						{
							title: 'URL',
							wrapper: '|'
						}
					],
					items: []
				}
			]
		},
		{
			type: 'tag',
			title: 'h2. Test Case'
		},
		{
			type: 'table',
			tableItems: [
				{
					headers: [
						{
							title: 'Preconditions',
							wrapper: '|'
						},
						{
							title: '',
							editable: true
						}
					]
				},
				{
					addItems: true,
					indexItems: 0, // set item index from header array where we should have auto incremented numbers
					headers: [
						{
							title: '#',
							wrapper: '|'
						},
						{
							title: 'Step',
							wrapper: '|'
						},
						{
							title: 'Expected Result',
							wrapper: '|'
						}
					],
					items: []
				},
				{
					headers: [
						{
							title: 'Final Conditions',
							wrapper: '|'
						},
						{
							title: '',
							editable: true
						}
					]
				}
			]
		}
	]
};
