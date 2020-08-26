---
title: 'Thoughts on the Human Aspect of Overfitting'
excerpt: 'While overfitting is classically seen in data science as a technical phenomanon, that can be solved through proper technique, i.e. split testing/training data, k-fold cross validation, etc... A recent twitter exchange has me thinking about it differently'
coverImage: '/assets/blog/overfitting/cover.jpg'
date: '2020-08-26T12:30:00.322Z'
author:
  name: Galen Caldwell
  picture: '/assets/blog/authors/galen.jpg'
ogImage:
  url: '/assets/blog/overfitting/cover.jpg'
---

While overfitting is classically seen in data science as a technical phenomenon that can be solved through proper technique, i.e. split testing/training data, k-fold cross validation, etc… A recent Twitter exchange between Nate Silver and G. Elliot Morris has me thinking about it differently. Silver is quibbling over people claiming back-testing as a historical record for accuracy, saying: “A model should receive zero credit/blame for predictive accuracy until it makes actual out-of-sample predictions that are disclosed ahead of time.” I didn’t actually find the Twitter thread particularly useful, but it did get me thinking about the human aspect of overfitting. 

The tweet the started it all:
<blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">It is generally better to think more carefully about how to pragmatically account for real-world uncertainty in a forecast than to not think carefully about it but then engage in a whole lot of existential conversation about it.</p>&mdash; Nate Silver (@NateSilver538) <a href="https://twitter.com/NateSilver538/status/1292254053867622401?ref_src=twsrc%5Etfw">August 9, 2020</a></blockquote> 
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

In school, I learned about overfitting as something computers do when training models. You see, computers are dumb, they do exactly what you tell them to do. So, if you tell them to find a model that exactly fits the data, they may arrive at ridiculous conclusions. Say you try to model the roll of a six-sided die, and you include data about the day of the week the die was rolled. Odds are your data set won’t perfectly match the distribution for a six-sided die. In this hypothetical example, let’s say there were a few more 4’s than expected. Luckily the computer has an explanation at hand! If you take the days we rolled extra fours, and say that fours are slightly more likely to be rolled on this day, you can have a perfect distribution! A person would never do this, so the discussion of overfitting in class was about making the computer “smarter” to prevent it from making such a silly mistake.

The discussion of overfitting gets narrowed in the classroom because the focus of the class is on techniques to make machine learning algorithms more effective. If you take the textbook definition, it is much broader: To quote *Artificial Intelligence, A Modern Approach:* “Whenever there is a large set of possible hypotheses, one has to be careful not to use the resulting freedom to find meaningless "regularity" in the data.“ There is no mention of a computer here. In the context of the Twitter thread, where they are discussing modeling the presidential election, there is quite a bit of freedom afforded to the people making the model. In complex models, people must make decisions about input to the model, which has drastic effect. Taking efforts to minimize the human assumptions can result in phenomenal models, see the GPT-2 language model for instance, which solves a wide set of natural language problems effectively because it assumes so little about the input. However, these approaches require lots of data, which is not available for a presidential election. We only have good data on the last dozen or so elections.

What does this mean practically? How might you avoid “human overfitting”? In Nate’s case, he says he avoids checking the result until the final debugging stage. He doesn’t want his perception of events to influence the decisions when making a model, and influencing the output based on his priors. This still doesn’t address the issue of overfitting to past events with an existing model. Unfortunately, for a situation like a presidential election, with so little data, this is not a “solved” problem. As far as I can tell, the state of the art is still based on gut feeling and best effort.

Citations:  
1. You find Nate Silver, Editor-in-Chief of FiveThirtyEight.com on Twitter <a class="citation-link" href="https://twitter.com/NateSilver538">here</a>   
2. You find G. Elliot Morris, Data Journalist at The Economist on Twitter <a class="citation-link" href="https://twitter.com/gelliottmorris">here</a>  
3. Peter Norvig and Stuart J. Russell. *Artificial Intelligence, A Modern Approach*. Prentice-Hall, 1995.  
