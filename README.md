HerBitcoin Jekyll Template
====================

## Table of Contents

* [Add Content](#-content)
* [Documentation](#-docs)

### Content on HerBitcoin
Feel free to make any request for an update and add data.

#### Meetups
Please refer to the already existing entries at _data/meetups.yml
Add any new blog article to that file in exactly the same styling!

#### Blog Article
Please refer to the already existing entries at _data/articles.yml
Add any new blog article to that file in exactly the same styling!

#### Podcast
Please refer to the already existing entries at _data/podcasts.yml
Add any new podcast to that file in exactly the same styling!

#### Videos
Please refer to the already existing entries at _data/videos.yml
Add any new video to that file in exactly the same styling!

When adding a video from youtube - the embeded link is required. 
You can get the link out of the embeded code on youtube.

Example: 
```
https://www.youtube.com/embed/UG7zLhEWanc"
```

### Docs

### Template
- This template uses Jekyll, Bootstrap 5.3.1, Font Awesome 6.4.2

### LocalDev
```
bundle exec jekyll serve
```
### Further reading
For more details, visit the jekyll [documentation](http://jekyllrb.com/) website.

## Troubleshooting
#### Setup Ruby MAC
```
ruby -v | check if version is correct = 3.1.3
brew install rbenv | install rbenv if not already installed - check with rbenv -v
rbenv init
rbenv install 3.1.3 | if not available
rbenv global 3.1.3 | set new version
copy paste output into terminal e.g. eval "$(rbenv init - bash)"
ruby -v | check if version is correct = 3.1.3
```
#### Short Re-Setup way
```
bundle exec jekyll serve
copy paste output into terminal e.g. eval "$(rbenv init - bash)"
rbenv global 3.1.3
ruby -v | check if version is correct = 3.1.3

then start again with: bundle exec jekyll serve
```

## Git 
#### Push changes
```
git status | check changed files
git add . | add all changes
git commit -m "my commit message" | set a commit message
git push origin main | push changes to main repo
```
#### Pull changes
```
git pull origin main
```