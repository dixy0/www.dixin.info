---
permalink: /
title: "Welcome to my website!"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

My name is Xin Di (邸新 in Chinese). I am currently a Research Assistant Professor at the Department of Biomedical Engineering, New Jersey Institute of Technology. My research interest is mainly on understanding of brain connectivity and brain network organizations using brain imaging techniques such as functional magnetic resonance imaging (fMRI). I develop computational models to measure brain connectivity in different mental conditions, such as during cognitive tasks and watching movies. I am also interested in applying the methods to understand brain development and aging, as well as mental conditions such as autism spectrum disorder (ASD).

Selected publications
======
### Working papers
Di X, Biswal BB (2020): Dissecting individual differences in responses to naturalistic stimuli in functional MRI: effects of development and gender. bioRxiv; doi: https://doi.org/10.1101/2020.05.01.073163
Di X, Woelfer M, Kuhn SB, Zhang Z, Biswal BB (2019): Estimations of the weather effects on brain functions using functional MRI - a cautionary tale. bioRxiv; doi: https://doi.org/10.1101/646695 
### Recently published papers
Di X, Zhang Z, Biswal BB (2020): Understanding psychophysiological interaction and its relations to beta series correlation. Brain Imaging Behav. doi:10.1007/s11682-020-00304-8 
Di X, Biswal BB (2020): Intersubject consistent dynamic connectivity during natural vision revealed by functional MRI. Neuroimage. doi:10.1016/j.neuroimage.2020.116698
### Most cited papers
Di X, Gohel S, Kim EH and Biswal BB (2013). Task vs. Rest - Different Network Configurations between the Coactivation and the Resting-State Brain Networks. Front Hum Neurosci. 7:493. link 
Di X, Biswal BB, Alzheimer's Disease Neuroimaging Initiative (2012). Metabolic Brain Covariant Networks as Revealed by FDG-PET with reference to resting-state fMRI networks. Brain Connect 2(5):275-83. link

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
