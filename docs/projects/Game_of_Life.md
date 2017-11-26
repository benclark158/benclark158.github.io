<div style="text-align: center">
  <h1>Game of Life</h1>
  <p>Ben Clark | Portfolio</p>
</div>

---

### Conaway's Game of Life

So before I begin to discuss the actual implementation I created, I'm going to briefly explain what Conaway's Game of Life is.

> "The game of Life, also known simply as Life, is a cellular automation..." [Wikipedia, 2017](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

So, the game is a system that automates cells (or pixels) in a grid, based on a set of rules. Game of Life is a zero player game, meaning that its future states, progression and evolution is based off of the initial state the game/system was in.

A user interacts with the game by inputting or creating an initial state, then viewing how it evolves.

<img style="border: 1px solid black; display: block; margin: auto;" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif">

#### The Rules

As in most games, there are rules that must be followed. However, these are not followed by the user, but by the cells. These rules determine whether the cell is dead (white) or alive (black)

1. Any live cell with fewer than two live neighbors dies, as if caused by under population.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by over population.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

That's the basics of Conaway's Game of Life - more information can be found [here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).


### My Implementation

So, onto my implementation of the Game of Life. At a trip home for a family event, I was talking to my cousin's boyfriend (studies Physics at UoN) who told me that he had spent some time developing a script in Python that implemented Conaway's Game of Life. This conversation sparked my interest, so that night, once I got home, I decided to attempt to implement it. Which is exactly what I did.

<img style="border: 1px solid black; display: block; margin: auto;" src="https://benclark158.github.io/docs/projects/imgs/Game_of_Life_1.jpg">

This project is only a small programming task, in respect to other projects I have worked on. However as I still include it, as no matter the size of project, it is important no matter what, and every project teaches you something that you didn't know.

<a style="display: block; margin: auto;" href="https://github.com/benclark158/GameOfLife" class="btn btn-default">View Source Code</a>
