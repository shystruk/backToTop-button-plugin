BackToTop-by-jQuery
===================
ScrollTop method by jQuery

###Version 1.0.0.0

This plugin can help you to:
- customize css and animation scroll **"Back to top"** link or image for scroll your page to top;
- check **footer** block and corectly situat button;
- **fadeIn** and **fadeOut** button when page scroll from height what you want.

#####How to use it:
1.First what you should do it's create your ***Back to top*** button by text or image.<br/>
For this example we used text link:
```html
<div id="back" class="back">Back To Top</div>
```
You may use any *class* and *id*.<br/>

2.Add basic css styles for plugin:
```css
.sticky {
    position: absolute;
    bottom: auto;
}
```
and styles for button:
```css
.back {
  display: none; /* first we hide button and show when user scroll page for need height */
  position: fixed;
}
```
3.
