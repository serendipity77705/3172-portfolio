# Lab 5 Activity

* *Date Created*: 14 NOV 2025
* *Last Modification Date*: 17 NOV 2025
* *Git URL*: <https://git.cs.dal.ca/daboor/csci-3172/-/tree/master/labs/lab5>
* *Netlify URL*: <https://portfolio-3172.netlify.app/>



## Authors

* [Malk Daboor](malk.daboor@dal.ca)


## Sources Used: 

### App.jsx

*Line 24*

```
<Route path="*" element={<PageNotFound />} />

```

The code above was created by adapting the code in [GeeksForGeeks](https://www.geeksforgeeks.org/reactjs/how-to-setup-404-page-in-react-routing/) as shown below: 

```
<Route path="*" element={<PageNotFound />} /> {/* Catch-all route for 404 */}
```

- <!---How---> The code in [GeeksForGeeks](https://www.geeksforgeeks.org/reactjs/how-to-setup-404-page-in-react-routing/) was implemented by taking that line that redrects to a not found page.
- <!---Why---> [GeeksForGeeks](https://www.geeksforgeeks.org/reactjs/how-to-setup-404-page-in-react-routing/)'s Code was used because I needed a 404 error page and wasn't sure what the path should be.
- <!---How---> [GeeksForGeeks](https://www.geeksforgeeks.org/reactjs/how-to-setup-404-page-in-react-routing/)'s Code was modified by replacing their file names with mine

### ~.test.jsx

*All the files in the tests directory*

```
All code in tests directory files

```

The code above was created by adapting the code in [Daily.Dev](https://daily.dev/blog/test-cases-for-react-js-a-starter-guide) as shown below: 

```
test('Profile shows user name from context', () => {

  render(
    <UserContext.Provider value={mockUser}>
      <Profile />
    </UserContext.Provider>
  );
  
  expect(screen.getByText(mockUser.name)).toBeInTheDocument();

});
```

- <!---How---> The code in [Daily.Dev](https://daily.dev/blog/test-cases-for-react-js-a-starter-guide) was implemented by taking using those few lines of code as inspiraiton and as a template for what my test cases should look like.
- <!---Why---> [Daily.Dev](https://daily.dev/blog/test-cases-for-react-js-a-starter-guide)'s Code was used because I wasn't sure what the different tests I could do were, so this was a good visual breakdown of them and helped me figure out what I needed.
- <!---How---> [Daily.Dev](https://daily.dev/blog/test-cases-for-react-js-a-starter-guide)'s Code was modified by using their code as a template and then building off of it as needed in the different files. 



To run locally: 
- make sure you are in the correct directory, which is labs/lab5/src
- run the command `npm run dev` and go to the local host link
- to run the tests, run the command `npm test -- --globals`

To run on Netlifty:
- follow the link given at the top of this README file.

Test cases:
there were test cases created for every component and page created. This is what they tested:
- 404NotFound.test.jsx: check if the characters 404 are loaded into the page and if there is a button that has a working link to the home page
- About.test.jsx: tests if the page rendered by looking for 'InterTalk' in the page, since that is something that I wrote about there. 
- App.test.jsx: Similar to About.test.jsx, it checks if the word 'welcome' is on the page.
- Footer.test.jsx: had more parts than the others, so I checked if Github, LinkedIn and Email were all links that were present and working.
- Header.test.jsx: checks if all the links are visible and take you to the correct locaiton on the webpage. 
- Home.test.jsx: Is very simple, so checks if the paragraphs are there by looking for 'Dalhousie' and confirms that there are buttons that take you to their corresponding links. 
- Projects.test.jsx: checks if the page rendered by looking for the word 'years' in the page. 
While these are pretty simple tests, since I do not have too many complex functionalities right now, such as functions, for the most part all that I need to check is if the pages are visible and the links go to their correct places. 

The CSS and HTML in the React is complaint with W3C, and is compatible with different browsers. 

My Header is the NavBar, but I decided to incorporate them into one file as the header only had the NavBar, so everything is now in the Header.jsx file. 

