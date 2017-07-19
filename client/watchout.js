// // start slingin' some d3 here.

// const gameOptions = {
//   height: 450,
//   width: 700,
//   nEnemies: 30,
//   padding: 20
// };

// let gameStats = {
//   score: 0,
//   bestScore: 0
// };

// var axes = {
//   x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
//   y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
// };

// var gameBoard = d3.select('.container').append('svg:svg')
//                 .attr('width', gameOptions.width)
//                 .attr('height', gameOptions.height);

// var updateScore = function() {
//   d3.select('#current-score')
//       .text(gameStats.score.toString());
// };
      

// var updateBestScore = function() {
//   gameStats.bestScore = _.max [gameStats.bestScore, gameStats.score];
//   d3.select('#best-score').text(gameStats.bestScore.toString());
// };

// // class Player {
// //   constructor() {
// //     path = 'm-7.5,1.62413c0,-5.04095 4.08318,-9.12413 9.12414,-9.12413c5.04096,0 9.70345,5.53145 11.87586,9.12413c-2.02759,2.72372 -6.8349,9.12415 -11.87586,9.12415c-5.04096,0 -9.12414,-4.08318 -9.12414,-9.12415z'
// //     fill = '#ff6600'
// //     x = 0
// //     y = 0
// //     angle = 0
// //     r = 5
// //   }

// //   constructor(gameOptions) =>
// //     @gameOptions = gameOptions
  

// //   render: (to) =>
// //     @el = to.append('svg:path')
// //             .attr('d', @path)
// //             .attr('fill', @fill)
// //     @transform
// //       x: @gameOptions.width * 0.5
// //       y: @gameOptions.height * 0.5

// //     @setupDragging()
// //     this

// //   getX: => @x
// //   setX: (x) =>
// //     minX = @gameOptions.padding
// //     maxX = @gameOptions.width - @gameOptions.padding
// //     x = minX if x <= minX
// //     x = maxX if x >= maxX
// //     @x = x

// //   getY: => @y
// //   setY: (y) =>
// //     minY = @gameOptions.padding
// //     maxY = @gameOptions.height - @gameOptions.padding
// //     y = minY if y <= minY
// //     y = maxY if y >= maxY
// //     @y = y

// //   transform: (opts) =>
// //     @angle = opts.angle || @angle
// //     @setX opts.x || @x
// //     @setY opts.y || @y

// //     @el.attr 'transform',
// //       "rotate(#{@angle},#{@getX()},#{@getY()}) "+
// //       "translate(#{@getX()},#{@getY()})"

// //   moveAbsolute: (x,y) =>
// //     @transform
// //       x:x
// //       y:y

// //   moveRelative: (dx,dy) =>
// //     @transform
// //       x: @getX()+dx
// //       y: @getY()+dy
// //       angle: 360 * (Math.atan2(dy,dx)/(Math.PI*2))


// //   setupDragging: =>
// //     dragMove = =>
// //       @moveRelative(d3.event.dx, d3.event.dy)

// //     drag = d3.behavior.drag()
// //             .on('drag', dragMove)
// //     @el.call(drag)

// // }

// // let players = [];
// // players.push(new Player(gameOptions).render(gameBoard));
// // players.push(new Player(gameOptions).render(gameBoard));


// var enemies = container
//   .selectAll('circle')
//   .data(d3.range(30))
//   .enter()
//   .append('circle')
//   .attr({
//     cx: randomX,
//     cy: randomY,
//     r: enemyRadius
//   });

// var astroids = board.selectAll('.astroid')
//   .data(d3.range(settings.n))
//   .enter().append('div')
//   .attr('class', 'astroid')
//   .style({
//     top: randY,
//     left: randX,
//     width: pixelize( settings.r * 2 ),
//     height: pixelize( settings.r * 2 )
//   });



// // var createEnemies = function() {
// //   _.range(0,gameOptions.nEnemies).map (i) =>
// //     {
// //       id: i
// //       x: Math.random()*100
// //       y: Math.random()*100
// //     }
// // }

// // render = (enemy_data) =>

// //   enemies = gameBoard.selectAll('circle.enemy')
// //             .data(enemy_data, (d) => d.id)

// // enter()

// //   enemies.enter()
// //     .append('svg:circle')
// //       .attr('class', 'enemy')
// //       .attr('cx', (enemy) => axes.x(enemy.x))
// //       .attr('cy', (enemy) => axes.y(enemy.y))
// //       .attr('r', 0)

// // exit()

// //   enemies.exit()
// //     .remove()

// // update()


//   checkCollision = (enemy, collidedCallback) =>
//     _(players).each (player) =>
//       radiusSum =  parseFloat(enemy.attr('r')) + player.r
//       xDiff = parseFloat(enemy.attr('cx')) - player.x
//       yDiff = parseFloat(enemy.attr('cy')) - player.y

//       separation = Math.sqrt( Math.pow(xDiff,2) + Math.pow(yDiff,2) )
//       collidedCallback(player, enemy) if separation < radiusSum

//   onCollision = =>
//     updateBestScore()
//     gameStats.score = 0
//     updateScore()

//   tweenWithCollisionDetection = (endData) =>

//     enemy = d3.select(this)

//     startPos =
//       x: parseFloat enemy.attr('cx')
//       y: parseFloat enemy.attr('cy')

//     endPos =
//       x: axes.x(endData.x)
//       y: axes.y(endData.y)

//     return (t) =>
//       checkCollision(enemy, onCollision)

//       enemyNextPos =
//         x: startPos.x + (endPos.x - startPos.x)*t
//         y: startPos.y + (endPos.y - startPos.y)*t

//       enemy.attr('cx', enemyNextPos.x)
//             .attr('cy', enemyNextPos.y)


//     enemies.transition()
//       .duration(500)
//       .attr('r', 10)
//     .transition()
//       .duration(2000)
//       .tween('custom', tweenWithCollisionDetection)


// var play = function() {
//   var gameTurn = function() {
//     newEnemyPositions = createEnemies();
//     render(newEnemyPositions);
//   };

//   var increaseScore = function() {
//     gameStats.score += 1;
//     updateScore();
//   };

//   gameTurn();
//   setInterval(gameTurn, 2000);

//   setInterval(increaseScore, 50);
// };

// play()



var solutionOne = function() {

  ///////////////////////////////////////////////////////////////////
  // configuration variables

  var settings = {
    w: window.innerWidth,
    h: window.innerHeight,
    r: 15,
    n: 30,
    duration: 1500
  };

  var mouse = { x: settings.w / 2, y: settings.h / 2 };
  var score = 0;
  var highScore = 0;
  var collisionCount = 0;

  ///////////////////////////////////////////////////////////////////
  // helper functions

  var pixelize = function(number) { return number + 'px'; };

  var rand = function(n) { return Math.floor( Math.random() * n ); };
  var randX = function() { return pixelize( rand(settings.w - settings.r * 2) ); };
  var randY = function() { return pixelize( rand(settings.h - settings.r * 2) ); };

  var updateScore = function() {
    d3.select('.scoreboard .current span').text(score);
    d3.select('.scoreboard .highscore span').text(highScore);
    d3.select('.scoreboard .collisions span').text(collisionCount);
  };

  ///////////////////////////////////////////////////////////////////
  // Main game code

  // setup board
  var board = d3.select('.board').style({
    width: pixelize( settings.w ),
    height: pixelize( settings.h )
  });

  // setup astroids
  var astroids = board.selectAll('.astroid')
    .data(d3.range(settings.n))
    .enter().append('div')
    .attr('class', 'astroid')
    .style({
      top: randY,
      left: randX,
      width: pixelize( settings.r * 2 ),
      height: pixelize( settings.r * 2 )
    });

  // setup player
  d3.select('.mouse').style({
    top: pixelize( mouse.y ),
    left: pixelize( mouse.x ),
    width: pixelize( settings.r * 2 ),
    height: pixelize( settings.r * 2 ),
    'border-radius': pixelize( settings.r * 2 )
  });

  // player mouse tracking
  board.on('mousemove', function() {
    var loc = d3.mouse(this);
    mouse = { x: loc[0], y: loc[1] };
    d3.select('.mouse').style({
      top: pixelize( mouse.y - settings.r ),
      left: pixelize( mouse.x - settings.r )
    });
  });

  // animation loop
  var move = function(element) {
    element.transition().duration(settings.duration).ease('cubic-in-out').style({
      top: randY,
      left: randX
    }).each('end', function() {
      move( d3.select(this) );
    });
  };
  move(astroids);

  // score ticker
  var scoreTicker = function() {
    score = score + 1;
    highScore = Math.max(score, highScore);
    updateScore();
  };
  setInterval(scoreTicker, 100);

  // collision detection
  var previousCollisionState = false;
  var detectCollisions = function() {

    var collision = false;

    astroids.each(function() {
      var cx = this.offsetLeft + settings.r;
      var cy = this.offsetTop + settings.r;
      // the magic of collision detection
      var x = cx - mouse.x;
      var y = cy - mouse.y;
      if (Math.sqrt(x * x + y * y) < settings.r * 2) {
        collision = true;
      }
    });

    if (collision) {
      score = 0;
      board.style('background-color', 'red');
      if (previousCollisionState !== collision) {
        collisionCount = collisionCount + 1;
      }
    } else {
      board.style('background-color', 'white');
    }
    previousCollisionState = collision;
  };

  d3.timer(detectCollisions);
};

///////////////////////////////////////////////////////////////////
// Solution 2
///////////////////////////////////////////////////////////////////
var solutionTwo = function() {
  // Bare Minimum Requirements

  // REQ 1: Draw the Enemies in an svg element
  var settings = {
    height: window.innerHeight,
    width: window.innerWidth,
    enemyRadius: 15,
    numEnemies: 30,
    jumpTime: 1000,
    playerRadius: 20
  };

  var randomX = function() { return Math.random () * settings.width; };
  var randomY = function() { return Math.random () * settings.height; };

  // Build svg container
  var container = d3
    .select('body')
    .append('svg')
    .attr({
      width: settings.width,
      height: settings.height
    });

    // Build enemies
  var enemies = container
    .selectAll('circle')
    .data(d3.range(settings.numEnemies))
    .enter()
    .append('circle')
    .attr('class', 'astroid')
    .attr('xlink:href', './asteroid.png')
    .attr({
      cx: randomX,
      cy: randomY,
      r: settings.enemyRadius
    });

  // REQ 2: Make it so that enemies move to a new random location every second

  // with d3.each
  var move = function() {
    enemies
      .transition()
      .ease('linear')
      .duration(settings.jumpTime)
      .attr({
        cx: randomX,
        cy: randomY
      })
      .each('end', move);
  };
  move();

  // REQ 3: Make a differently-color dot to represent the player. Make it draggable.

  var player = container
    .append('circle')
    .attr({
      cx: settings.width / 2,
      cy: settings.height / 2,
      r: settings.playerRadius,
      fill: 'blue'
    })
    // add drag behavior
    .call(d3.behavior
      .drag()
      .on('drag', function(d) {
        d3.select(this)
          .attr({
            cx: d3.event.x,
            cy: d3.event.y
          });
      }));

  // REQ 4: Detect when an enemy touches you.
  var detectCollision = function() {
    var collision = false;
    enemies.each(function() {
      var enemy = d3.select(this);
      var x = Math.abs(enemy.attr('cx') - player.attr('cx'));
      var y = Math.abs(enemy.attr('cy') - player.attr('cy'));
      var distance = Math.sqrt((x * x) + (y * y));
      if (distance <= settings.enemyRadius + settings.playerRadius) {
        collision = true;
      }
    });
    if (collision) {
      currentScore = 0;
      if (previousCollisionState !== collision) {
        collisionCount = collisionCount + 1;
      }
      collide();
    }
    previousCollisionState = collision;
  };

  var collide = function() {
    player.attr('fill', 'red');
    setTimeout(function() {
      player.attr('fill', 'blue');
    }, 0);
  };

  d3.timer(detectCollision);

  // REQ 5: Keep Track of User's score and display it
  var currentScore = 0;
  var hiScore = 0;
  var collisionCount = 0;
  var previousCollisionState = false;
  var updateScore = function() {
    currentScore++;
    hiScore = Math.max(hiScore, currentScore);
    d3.select('.current span').text(currentScore);
    d3.select('.highscore span').text(hiScore);
    d3.select('.collisions span').text(collisionCount);
  };

  setInterval(updateScore, 100);
};

///////////////////////////////////////////////////////////////////
// replace solutionOne with solutionTwo to see svg solution
// solutionOne();
// solutionTwo();


























var score;
  var highScore = 0;
  var enemyCount = 5;
  const width = 900;
  const height = 800;
  const svgContainer =  d3.select(".board")
                          .append("svg")
                          .attr("width", width) 
                          .attr("height", height);
  
  const $high = document.getElementById("high");
  const $curr = document.getElementById("curr");

  var ticker = setInterval( function() {
        // updateScore();
        // updateHighScore();
        moveEnemy();
      }, 1000);

  var init = function() {
    score = 0;
    ticker = setInterval( function() {
        // updateScore();
        // updateHighScore();
        moveEnemy();
      }, 1000);
  };

  // const updateScore = function() {
  //   score++;
  //   $curr.innerHTML = score;
  // };

  // const updateHighScore = function() {
  //   if (score > highScore) {
  //     highScore = score;
  //     $high.innerHTML = highScore;
  //   }
  // };

  const randomLocationGen = function(numOfLocations) {
    let locations = [];
    for (let i = 0; i < numOfLocations; i++) {
      let obj = {};
      obj.x = Math.floor(Math.random() * width);
      obj.y = Math.floor(Math.random() * height);
      locations.push(obj);
    }
    return locations;
  };

  var drag = d3.behavior.drag()
            .on("drag", function() {
              playerDot
              .attr("cx", d3.event.x)
              .attr("cy", d3.event.y); 
            });
  

  var enemyDots = svgContainer.selectAll("circle")
                            .data(randomLocationGen(enemyCount))
                            .enter()
                            .append("circle")
                            .attr("class", "enemy")
                            .attr("cx", function(d) { return d.x; })
                            .attr("cy", function(d) { return d.y; })
                            .attr("r", 30)
                            .style("fill", "blue");

  var playerDot = svgContainer.selectAll("player")
                            .data([ { x: (width / 2), y: (height / 2), r: 30}])
                            .enter()
                            .append("svg:circle")
                            .attr("class", "player")
                            .attr("cx", function(d) { return d.x; })
                            .attr("cy", function(d) { return d.y; })
                            .attr("r", function(d) { return d.r; })
                            .call(drag)
                            .style("fill", "orange");

  var moveEnemy = function() {
      enemyDots
      .transition()
      .duration(1000)
      .tween('checkColFunc', checkCollision)
      .ease("linear")
      .attr("cx", function(d) { return Math.floor(Math.random() * width); })
      .attr("cy", function(d) { return Math.floor(Math.random() * height); });
  };

  var checkCollision = function() {
    return function() {
      let thisCircle = d3.select(this);
      
      let dx = playerDot.attr("cx") - thisCircle.attr("cx");
          dx = Math.abs(dx);
      
      let dy = playerDot.attr("cy") - thisCircle.attr("cy");
          dy = Math.abs(dy);
      
      let combinedRadius = Number(thisCircle.attr('r')) + Number(playerDot.attr('r'));
      
      let distance = Math.sqrt( Math.pow(dx, 2) + Math.pow(dy, 2) );
      if ( distance < combinedRadius ) {
        gameOver();
      }
    };
  };

  


  var gameOver = function() {
    clearInterval(ticker);
    // alert("Game Over!");
    init();
  };



