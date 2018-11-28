# REMARK Cheat Sheet

# Centered vertically and horizontally
The classes available for vertically aligning text are:

top (default)
middle
bottom

The classes available for horizontally aligning text are:

left (default)
center
right

# Text alignment

.left[Left-aligned text]

.center[Centered text]

.right[Right-aligned text]

# Images
.right[![Right-aligned image](https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg)]
background-image: url(image.jpg)

embeds
<iframe width="560" height="315" src="https://www.youtube.com/embed/5eLcHJLDlI8" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

<video width="560" height="420" controls>
    <source src="{{ site.baseurl }}/assets/video_example.mp4" type="video/mp4">
</video>

# Slide increments

- bullet 1
--

- bullet 2

???
Some note.
# slide data
name: agenda
Link  [the agenda](#agenda)

Navigate to a slide using the API, i.e. slideshow.gotoSlide('agenda')

Identify slide DOM element, 'slide-name'

background-position: center;
background-repeat: no-repeat;
background-size: contain;

# Metadata
count: false

Template slides may also contain a special {{content}} expression to explicitly position the content of derived slides

The layout property either makes the current slide a layout slide, which is omitted from the slideshow and serves as the default template used for all subsequent slides:
layout: true

With the highlightLines configuration option enabled, lines prefixed with * will get highlighted with a yellow background, which can be handy for bringing attention to specific parts of code snippets, i.e.:

#Keys 
h or ?: Toggle the help window
j: Jump to next slide
k: Jump to previous slide
b: Toggle blackout mode
m: Toggle mirrored mode.
c: Create a clone presentation on a new window
p: Toggle PresenterMode
f: Toggle Fullscreen
t: Reset presentation timer
<number> + <Return>: Jump to slide <number>





Required steps:

Check out the latest release of Mermaid at https://github.com/knsv/mermaid/releases

Put mermaid.css and mermaid.min.js from the latest release (or master version, if you are feeling brave) into the presentation's directory.

In the presentation's html file after a link to remark's own JavaScript (something like <script src="./remark-latest.min.js"></script>) add:

 <script src="./mermaid.min.js"></script>
 <link rel="stylesheet" href="./mermaid.css">
 <script>mermaid.initialize({startOnLoad:true});</script>
In any slide, add the flowchart by putting graph description (on a separate line) like this:

<div class="mermaid">
graph LR
        A-->B
        F-->C
        C-->A
        D-->C
</div>

#ANSI coloring 
http://joshbode.github.io/remark/ansi.html#3






npx live-server

classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label


gitGraph:
options
{
    "nodeSpacing": 150,
    "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch




    --port=NUMBER - select port to use, default: PORT env var or 8080
    --host=ADDRESS - select host address to bind to, default: IP env var or 0.0.0.0 ("any address")
    --no-browser - suppress automatic web browser launching
    --browser=BROWSER - specify browser to use instead of system default
    --quiet | -q - suppress logging
    --verbose | -V - more logging (logs all requests, shows all listening IPv4 interfaces, etc.)
    --open=PATH - launch browser to PATH instead of server root
    --watch=PATH - comma-separated string of paths to exclusively watch for changes (default: watch everything)
    --ignore=PATH - comma-separated string of paths to ignore (anymatch-compatible definition)
    --ignorePattern=RGXP - Regular expression of files to ignore (ie .*\.jade) (DEPRECATED in favor of --ignore)
    --no-css-inject - reload page on CSS change, rather than injecting changed CSS
    --middleware=PATH - path to .js file exporting a middleware function to add; can be a name without path nor extension to reference bundled middlewares in middleware folder
    --entry-file=PATH - serve this file (server root relative) in place of missing files (useful for single page apps)
    --mount=ROUTE:PATH - serve the paths contents under the defined route (multiple definitions possible)
    --spa - translate requests from /abc to /#/abc (handy for Single Page Apps)
    --wait=MILLISECONDS - (default 100ms) wait for all changes, before reloading
    --htpasswd=PATH - Enables http-auth expecting htpasswd file located at PATH
    --cors - Enables CORS for any origin (reflects request origin, requests with credentials are supported)
    --https=PATH - PATH to a HTTPS configuration module
    --https-module=MODULE_NAME - Custom HTTPS module (e.g. spdy)
    --proxy=ROUTE:URL - proxy all requests for ROUTE to URL
    --help | -h - display terse usage hint and exit
    --version | -v - display version and exit

Default options:

If a file ~/.live-server.json exists it will be loaded and used as default options for live-server on the command line. See "Usage from node" for option names.

npx decktape remark http://localhost:8080/angular-professional-workshop.html angular-professional-workshop.pdf
npx decktape http://localhost:8080/angular-professional-workshop.html
npx decktape
