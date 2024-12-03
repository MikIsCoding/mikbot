# mikbot
mikbot is a bot for teeworlds with basic commands

# Why create a bot?
for automatisation.


# How do i use it?
Linux
------
frist, in your command line type this:

ubuntu: ``` sudo apt update && sudo apt install git nodejs ```

arch: ``` sudo pacman -Sy git nodejs ```

alpine: ``` apk add nodejs git ```

then type this:
```git
git clone https://github.com/MikIsCoding/mikbot
```

after, u might want to modify one thing in the code,

```javascript
let client = new teeworlds.Client("localhost", 8303, "mikbot");
```

modify the localhost to your servep (ip), port and name of your bot


after all of that you can finally run the code:

``` node main.js ```



dont froget that the version for windows is almost here.



