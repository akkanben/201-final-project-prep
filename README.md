# 201 Final Project: Prep Work

## Project: Prep #1 - Team Agreement

- `project-prep-01.md`
  - This contains the team agreement we developed to outline what is expected of our collaboration. We can submit this.

## Project: Prep #2 - Prepare for Projects
 
- `project-prep-02.md`
  - This contains our final 1 or 2 project pitch details. We can submit this.
- `project-idea-brainstorming.md`
  - This could serve a document for the actual brainstorming activity. Not to submit.

## Project: Prep #3 - Repo & Tooling

- `project-prep-03.md`
  - This will serve to keep notes about our repo name and tools to use. We just submit the name of our project and a link to the repo.

## Project: Prep #4 - Wireframes & Software Requirements

- `project-prep-04.md`
  - This could serve for our notes on the wireframing project for Monday. The real submission will live in the project repo after we make it.

## Prep Tests

A few preliminary tests to learn more about HTML5 canvas. Inspiration and some code from this [Spicy Yoghurt](https://spicyyoghurt.com/tutorials/html5-javascript-game-development/develop-a-html5-javascript-game) tutorial.

- `prep-drawing-shapes`
  - Demo to show examples of fill and stroke for rectangles, circles, triangles built from lines, an imported svg shape and images from a sprite sheet.
- `prep-game-loop`
  - Game loop with FPS display. Also demonstrates overlapping canvas
  - The FPS canvas has a transparent background applied in css.
- `prep-moving-squares`
  - An example of movement with velocity in a game loop. 
  - The squares are created with an object constructor that inherits from a more general GameObject.
- `prep-collision-detection`
  - Similar to the previous moving squares but the collision flag is being used. Clever collision check from the above tutorial.
- `prep-key-press`
  - A demo to show WASD movement. Console logs the key code pressed.
  - A drag variable is used to slow the velocity when no key is pressed.
  - A limiter variable is used to fix diagonal movement so it doesn't go too fast.
  - An array is used to determine the current active buttons
    - Button down adds to the array, button up removes from the array.
    - Logic in the prototype.update function controls the changes in velocity depending on the keys in the array.
- Other tests to make:
  - Mass.
  - Collision with a heading.
  - Impulse and momentum.
  - Gravity.
  - Better bounds checking.
