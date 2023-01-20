
# Quick Overview

## Create a Todo List App with Basic CRUD capability.

CRUD stands for Create, Read, Update, and Delete. These are the four basic operations that a database or application can perform on data.

    Create: This operation allows the user to add new data to the database or application.

    Read: This operation allows the user to retrieve data from the database or application. 

    Update: This operation allows the user to modify existing data in the database or application. 

    Delete: This operation allows the user to delete data from the database or application. 

Basic CRUD capability refers to the ability of a system or application to 
perform these four basic operations on data. It is the foundation of many applications and systems and is a critical part of database management.
## Create a new React App, 

Run the following commands

```bash
npx create-react-app nameofyourapp
cd my-app
npm start

```


## Steps for a fully functional React Todo List

1. Set up your project: First, create a new React project using the create-react-app command. Delete src folder, and then re-create it. Add Back in index.js, App.js, styles.css

2. Create a Todo component: Next, create a Todo component that will render a single todo item. This component should accept a todo object as a prop and display the todo’s text and a checkbox to mark it as complete.

3. Create a TodoList component: Then, create a TodoList component that will render a list of todo items. This component should accept an array of todo objects as a prop, and loop through the array to render a Todo component for each item.

4. Use React Hooks: Next, use React Hooks to store and manipulate the data with UseState.

5. Handle user interactions: Then, add event handlers to handle user interactions. For example, you can add an onChange handler to the checkbox to mark a todo as complete.

6. Add new todos: Add an input to the TodoList component so users can add new todos. This input should update the state when the user types enter.

7. Filter todos: Add a filter option to the TodoList component so users can filter todos by completed or incompleted.

8. Add persistence: To persist the data, you can use local storage. Add a function to save and retrieve the todos from local storage.

9. Add Delete Functionality to the Todo List.

10. Add styling: Now, add some basic styling to the components.

11. Test and debug: Finally, test and debug the app to make sure everything is working correctly.





## Acknowledgements

 - https://reactjs.org/docs/create-a-new-react-app.html#create-react-app