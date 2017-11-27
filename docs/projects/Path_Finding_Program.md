<div style="text-align: center">
  <h1>Path Finding Program</h1>
  <p>Ben Clark | Portfolio</p>
</div>

---

The path finding program was developed as a method of testing implementations of artificial intelligent techniques and methods, while I was studying my A-Levels.

<img style="border: 1px solid black; display: block; margin: auto; width: 40%" src="https://benclark158.github.io/docs/projects/imgs/Path_Finding_Program_1.jpg">

The program is written in C# and uses coloured picture boxes for the squares of the game. In the game the player has to move their "character" around a map avoiding the other coloured blocks or "ghosts" if a player hits one of these "ghosts" then they die and the game is over. The aim is for the player to collect all of the coins around the map, if the player does this then they win.

As mentioned above this project was first developed as a test-bench for AI methods. The first AI technique that was implemented was the A* (A-Star) search algorithm, which I configured for path finding. Initially, the search was very slow and extremely limited. Hence, I had to optimise the algorithm to make it much more suitable for a game. 

Eventually, it was suggested by my computer science teacher at the time, that I should pre-bake all possible routes using a next-jump approach - similar to that of IP routing. This pre-bake data was then saved to text files when the game runs, with the game checking the existence of all routes before running the game.

```csharp
public Point[,,,] nextPoint;
public bool[,,,] fromFile;
```
These aren't exactly the best data variables to have...

In hindsight I should have implemented defaults and other features of IP routing that would have made the pre-bake data set much faster and easier to search.

Once this was working I attempted to add a machine learning system to the AI "ghosts" however this proved to be a lot more complex than I thought it would be. Especially when attempting to decide when to go straight to the player rather than going from learn statistics. Thanks to this complication, and that my A-Level exams were nearing, the project ground to a halt, however now that I am studying Computer Science with AI, I do plan on doing more work on this project.
