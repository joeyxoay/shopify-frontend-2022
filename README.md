# Joey Koay

Link to hosted code [https://nasa-api-app-joey.nn.r.appspot.com/](https://nasa-api-app-joey.nn.r.appspot.com/).

Features implemented:
<li> Searchbar for users to view any related pictures 
<li> Clickable cards to rotate between photos and texts
<li> Error handeling when NASA's API fails
<li> Save likes if the user leaves or reloads the page
<li> Animate the "like" action
<li> Added a loading state while waiting for NASA's API to return data
<li> Shareable links for each image
<li> Added a date-picker to browse photos from desired start date and/or end date

If I had more time, I would:
<li> Add a translation library such as react-i18n to allow the users to toggle between languages instead of hard coding strings
<li> Add automated tests (both end-to-end and unit tests)
<li> Use a database and API to save which pictures the users liked instead of using the browser storage
<li> Use typescript to catch bugs earlier and improve intellisense experience (developer quality of life)
<li> Further improve the semantics and accessibility of the website (i.e. text to speech)
<li> Ensure that the website works on different browsers (currently tested and developed on google chrome)
