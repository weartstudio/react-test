## The solution

1. I created an app with React and Vite.
2. I added sass and started the formatting. I used figma to get colors and sizes and added the attached image to bg of the page for simpler sizing and spacing.
3. I added data to project with json file, and import it.  Wrote a randomgenerator with similar number protection.
4. I added animejs, and react-animejs and set it up.
5. I added ESLint with a lint command to the project.

## The task

### Instructions:
- Create a Javascript application that visualises the attached data.
- Use SCSS for styling.
- The overlay should be hidden by default.
- For the sake of simplicity, put a button to the top right corner that toggles the overlay.
- The coloured parts of the overlay should use the colour from the data.
- Data should not be hardcoded into the HTML, but read from a json file or something you prefer.
- Everytime the overlay is toggled on, a new random event should be displayed.
- Try and make it so the application matches the concept as close as possible (nearly pixel perfect)

### Overlay visuals:
- Use this image as a reference
- The canvas must be 1920px wide and 950px high
- Everything should be centred
- Every box should support multi-line break
- Talent name box layout is based on the amount of entries
  - First box has left aligned text on multi-line
  - Last box has right aligned text on multi-line

### Bonus:
- Use Vue.js
- Use a linter
- Create animations with AnimeJS

### Notes:
- Use a Git repository to share your code with us.

### Data:
```json
[
	{
		"name": "FGC",
		"from": "2020-03-10",
		"to": "2020-03-12",
		"color": "#00d487",
		"talent": ["LD"]
	},
	{
		"name": "Rocket League Showdown 2020 Summer Shuffle",
		"from": "2020-06-29",
		"to": "2020-07-12",
		"color": "#e5043b",
		"talent": ["EterNaLeNvy", "DakotaCox", "Sarah Jessica Parker"]
	},
	{
		"name": "Dota Summit",
		"from": "2020-11-02",
		"to": "2020-11-07",
		"color": "#ca6412",
		"talent": ["HMW", "Phil"]
	}
]
```