# vue-todo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

Manual
 1. Install node modules -> npm install
 2. Run the game  -> npm run serve

```
 ChangeLog:
   v 1.1.0 - Total name change, changed todo name to task which more semantically correct
   v 1.0.1 - Improved logic: transferred app logic now to todos component
             Removed unnecessary logic
   v 1.0.0 - Base version
```

```
 Plot
  Classic vuejs javascript Tasks application that allows to create,
  edit tasks and add comments to them using. Vuex is used for states.

  Info:  To view task item with all information double-click on Task item.

  External libraries: Vuejs, Vuex, Masked-Input (for date picker), Sass-loader,
  https://niksmr.github.io/vue-masked-input/

  Application structure:
      components /  - app components
          app / main component
          comments / - comments component,
            features: shows comments, add comment
          tasks / - tasks component, that contains showing all task items logic
          task / - task item component
            features: show exact task item (title) with control buttons: Edit, Remove, Commments
            shows / hides Edit form, toggles Comments section
          task-form / - Task Item form
             features: validates, add, edit (sends to vuex actions)
          all components are divided:
           file.vue (template and includes), file.ts - script, file.scss - style
       store / - vuex store system
         actions.js - actions
         mutations.js - vuex mutations
         plugins - additional vuex store helpers
         index.js - main store point

       utils / - utility helpers
       themes / - themes folder
         theme-main.scss - main styling of (mostly) background, common sections
                  to create ability to switch diffrent color schemes
         theme-main-colors.scss - main theme global colors

       main.ts - start point of application
       .eslintrc - main overrides of recommended lint package


    Features
     You can add, edit tasks, add comments

    Best viewed in latest Chrome, Firefox.

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Thank you and enjoy the app.
