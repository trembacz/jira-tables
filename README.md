# JIRA tables

If you are tired of creating tables in JIRA, this is your saviour!<br>
Based on the config JSON file, generate your dream table where you just need to fill the content and just paste into the JIRA.

## Application
![](https://i.imgur.com/PuIJw3m.png "Filling forms")

## Output in JIRA
![](https://i.imgur.com/Lvr9z4n.png "Jira view")

## Usage
* download files from the ```dist``` folder
* edit ```config.js``` file to suit your needs
* open ```index.html``` file in the browser

## Config file (tag type)

| Option            | Values        | Description                      |
| ----------------- |:-------------:| -------------------------------- |
| ```type```        | ```tag```     |  Type of the field |
| ```title```       | ```string```  | Prefilled text in the input field |

```
{
  type: 'tag',
  title: 'h2. Summary'
}
```

## Config file (table type)

| Option                      | Values                  | Description    |
| --------------------------- |:-----------------------:| -------------- |
| ```type```            | ```table```  |  Type of the field |
| ```tableItems```      | ```array```  | Array with the table fields |
| ```addItems```        | ```true``` / ```false``` | Add more items into the table element |
| ```indexItems```      | ```number``` | Set item index from the header array where we should have auto incremented numbers |
| ```blankLine```       | ```after``` / ```before``` / ```both``` | Use this if you need to add extra blank lines between table elements |
| ```items```           | ```array```  | Array with the items that will be automatically filled in the table element |
| ```headers```         | ```array```  | Array with the table headers |
| ```headers->title```  | ```string```  | Header title |
| ```headers->wrapper```| ```\|```  | Extra wrapper for the title string |
| ```headers->editable```| ```true``` / ```false```  | Should header title be editable |

```
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
      indexItems: 0,
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
      addItems: true,
      blankLine: 'both',
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
          title: 'Description',
          wrapper: '|'
        }
      ],
      items: []
    }
  ]
}
```

## Config JSON (example)

Config *file* needs to have ```config.js``` name and the variable should always be ```templateConfig``` with the ```sections``` array like on example below.

```
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
          blankLine: 'both',
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
          indexItems: 0,
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

```
