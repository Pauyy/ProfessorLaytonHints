# Professor Layton Hints
ProfessorLaytonHints is a website that rebuilds the hint pages in the Professor Layton games.  
Though, this website doesn't contain official hints for existing puzzles.  
The site can be used to write hints and let them be displayed in a Professor Layton style

# How to add hints
Hints are easily addable through hint.js  
All that has to be done is to add a new case, with the code, and fill "hintText" with your hints
```javascript
case "YourCode":
        hintText = ["First Hint",
                    "Second Hint",
                    "Third Hint"];
        break;
```
