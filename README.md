# virta-exercise

Exercise made for a job interview. Created with CodeSandbox

Accessible at: https://codesandbox.io/s/github/Daxtek/virta-exercise

## Process

This was one of my first app created with React, this was good for me to put in practice my recently learn React bases. I also used it to learn and implement new React concept as I was builing the app as example hooks.

I organized myself in the following way:

I first draw the UI on a piece of paper and identified the different composant I would need to create. I separated them into two pages as there is two pages in the UI, one page with the stations list, one page with the station details

In the station list page I identified 3 components :

- _AvailabilityState_: that is showing the state of availablity of a station made of an image and a text
- _StationRow_: that is a line of the list one for each station that will contain a title and the AvailabilityState
- _StationList_: that is list of all the station, made of a title and the list of StationRow

In the station details page I identified 4 components :

- _Data_: that is showing one data element, made of a label and a value
- _DataTable_: that is showing all of the data component linked to the station
- _ActionBar_: that is bar on top of the station with a back button and a title
- _StationData_: The representation of the page gathering the ActionBar and the DataTable

Once the components identified I created them in the code with a quick design in order to have a static view of the elements and have the structure in place

I then added the JSON data in order to have the data displayed

I then wanted to add the interactivity and the state in order to use the page but that's when I realized that I hadn't taken into account the fact of switching between the two page that would require an extra component to englobe them.

Once that fixed and the interactivity added, I fixed up the design to have it corresponding to the mock and responsive.

## Thoughts

I can see that I'm not yet fully familliar with the React way of thinking the code, I can split the design into components but I'm not able to fully see the interactivity from the ground up. But I like a lot the way of thinking in reusable components and structure of the entire page.

I would maybe also create a button component with the back button as if other pages get added it can be reused.

After learning about React hooks I implemented a simple function using the fecth API to retrive the json file that could later on fetch the data from an API
