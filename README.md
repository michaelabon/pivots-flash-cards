# Generating Flash Cards of Pivots

Learn your fellow Pivots' names with ease
using [Anki][] as your flash card software
and the [Pivots][] site as your source.

# No spammers, please

Please honor the original access controls and not share exported decks with anyone who does not have access themselves (so we're not precompiling a recruiting list for spammers or whatever).

# Why?

When I started at Pivotal Labs, 
my first project was with one other person.
We worked together exclusively for four months.
I had trouble remembering my coworkers' names,
because I so rarely interacted with anyone else.
So now, I'll admit to cheating.
I used flash cards 
and [spaced repetition][]
to help my brain.

Also, I wanted to [step up](https://twitter.com/mike_kenyon/status/539593940299943937) 
my [Guess the Pivot](https://twitter.com/mike_kenyon/status/539594070382092289) game.

# Anki: Your Flash Card Software

In the past, 
learning via [spaced repetition][] has been an effective memorization tool.
**[Anki][]** is my current software of choice. 
It is easy to import new information
and to sync and study on the go.

In a nutshell, Anki will show you a Pivot's face
that it thinks you might struggle with
and you tell it how difficult it was
to remember the Pivot's name.

# Making Your Flash Cards

This isn't pretty, but, whatever. It works for me on Windows.

Right now, the `paste_this.js` script will generate two questions for each Pivot:
What is the Pivot's full name? What is their role?
There is more information available from the data source,
but it's best to start with just those two pieces of information per Pivot.

## Scraping the Pivots Site

1. In `paste_this.js`,
   edit the `your_location` variable if you aren't in New York.
1. Head to the [Pivots][] site.
1. Select your location and then slowly scroll to the bottom of the page
   to AJAX in all the profile photos.
1. Save the page locally. 
   This is an easy way to save all the profile photos.
   Chrome will call the folder `Pivots_files`.
1. Open the local page in your favourite editor.
1. In the opening `<script>` element with the `var users`, 
   add the contents of `paste_this.js`.
1. After saving your editor, open the local page in your browser.
1. Open the JavaScript console and copy the logged output into a text file like `Pivots-yyyy-mm-dd.txt`.

## Importing into Anki

The [Studying section of the manual][studying] goes into much more detail.

1. If you haven't yet, open Anki so it creates its default folder 
   in `%UserProfile%\Documents\Anki\User 1` or `~/Documents/Anki/User 1`
1. Copy the contents of `Pivots_files` into 
   `%UserProfile%\Documents\User 1\collection.media` or
   `~/Documents/Anki/User 1/collection.media`
1. In Anki, click File > Import... and then navigate to your `Pivots-yyyy-mm-dd.txt` file.
1. Choose the _Basic (and reversed card) Type.
1. Add a new Deck called _Pivots_.
1. Choose _Fields separated by: Semicolon_.
1. Choose to _Ignore lines where first field matches existing note_
   to allow easier updating in the future.
1. Choose to _Allow HTML in fields_.
1. Field 1 of file is mapped to Front. Field 2 of file is mapped to Back.
1. All done! You might have some warnings of duplicates.

## Studying your Pivots

1. Open Anki if it isn't already.
1. Under Deck, click on **Pivots**.
1. Click **Study Now**.
1. Try to answer the question. Sound the answer aloud.
1. Click **Show Answer** or press the **spacebar**.
1. Were you right? How easy or hard was it? 
   Click **Again**, **Good** or **Easy** or press **1**, **2**, or **3**.

Anki will have you learn 20 brand-new flash cards each day
in addition to any cards that are scheduled for review.


[Anki]: http://ankisrs.net/docs/manual.html
[Pivots]: https://pivots.pivotallabs.com/users
[spaced repetition]: http://lifeinthefastlane.com/learning-by-spaced-repetition/
[studying]: http://ankisrs.net/docs/manual.html#studying
