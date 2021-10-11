# React Part Time Class Final Project: Plant Tracking App 🌱

## Project Links

- [CodeSandbox Link: Plant Tracking App](https://codesandbox.io/s/plant-tracking-app-final-liuig)

## Project Description

In my house, there are many plants. The current count sits at around 40. I'm working to create a lightweight app that helps me keep track of my plants, where they're located, and log their primary requirements. For my strech goals, I'd like to create the ability to add a picture, the capacity to track when they were last watered, and create a field to list their requirements (water, sun, fertilizer, etc.).


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [React Plant Tracker](https://res.cloudinary.com/dwsmrfioc/image/upload/v1631575061/Scratchpad_ulsm6c.jpg)
- [Plant Tracker description - MVP + stretch goals](https://res.cloudinary.com/dwsmrfioc/image/upload/v1631575069/Scratchpad_irvkki.jpg)
- [Plant Tracking App architecture](https://docs.google.com/drawings/d/19mx3zz2GPdZG72H-8I7oiO8FoaygPNBMJL7sBsnZXfU/edit?usp=sharing)

#### MVP 
- Landing page with Plant Tracking app!™️
- Tracking each plant and their location, sun requirements, and date entry field for when they were last watered
- Router components with additional resources as well as information on plant hardiness zones

#### PostMVP/stretch-goals

- Add the option to include a picture of the plant
- Complete state on the drop downs so that selections are retained
- Include ```useLocalStorage``` so that information is retained after a page refresh

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header that is consistent along all views | 
| Tracker | The entree of the app - contains all of the app state. Shiny drag and drop capabilities, too! ✨ |
| Column | Renders a column four times based on the information from ```initial-data.js```|
| Task | Renders the individual 'tasks' or, in this case, plant cards based on the information from ```initial-data.js```|
| RegionalMap | Renders text, a USDA hardiness map, and a form to locate your own region 🗺️|
| MoreResources | Renders external links for more information on taking care of your loved ones 🌱|



## Additional Libraries

I relied heavily on Atlassian's public and private component library as well as react-beautiful-dnd (drag and drop). The drag and drop is the core functionality of the tracker and each card/task/plant renders out components from Atlassian's library. I also used a mix of CSS and Styled Components for a lot of the styling across the pages.

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- [Atlassian Design System: Date Picker](https://atlassian.design/components/datetime-picker/date-picker/examples)
- [Atlassian Design System: Selector](https://atlassian.design/components/select/examples)
- [Styled Components 💅](https://styled-components.com/)


## Code Snippet

I had a lot of small and silly hiccups that I'm happy I was able to push through. I strugled with implementing Styled Components and Router! So I'm happy that both of these pieces are working in full force. 

```
 <Switch>
   <Route path="/tracker" component={Tracker} />
   <Route exact path="/" component={Tracker} />
   <Route path="/moreresources" component={MoreResources} />
   <Route path="/regionalmap" component={RegionalMap} />
 </Switch>
```
