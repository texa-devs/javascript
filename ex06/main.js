//Converting to JSON files

/* JSON is a format used to get you code ready to send data to the server. To get your code in JSON (which is really simillar to js) 
try this: https://www.freeformatter.com/json-formatter.html, copy and paste the ARRAY from the previous exercise and you will get the bellow.
Note: copy only from the brackets ignoring the attribution and the simicolon or you will get an error message  */

/*[
   {
      "id": 1,
      "text": "take out trash",
      "isCompleted": true
   },
   {
      "id": 2,
      "text": "Meeting with boss",
      "isCompleted": true
   },
   {
      "id": 3,
      "text": "Dentist appt",
      "isCompleted": true
   }
]*/

//You can too send it throught your script, like this:

const todos = [
    {
        id:1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: true
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)


