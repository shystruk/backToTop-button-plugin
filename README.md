BackToTop-by-jQuery
===================
ScrollTop method by jQuery

###Version 1.0.0.0

This plugin can help you to:
- customize css and animation scroll **"Back to top"** link or image for scroll your page to top;
- check **footer** block and corectly allocate button relative to footer;
- **fadeIn** and **fadeOut** button when page scroll from height what you want.

How to use it:
======================
1.First what you should do it's create your ***Back to top*** button by text or image.<br/>
For this example we used text link:
```html
<div id="back" class="back">Back To Top</div>
```
You may use any *class* and *id*.<br/>


2.Add basic css styles for plugin:
```css
.sticky { /* this class use in plugin (try to keep back the name) */
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

3.Include JS files in html (you may include all files or only one compress file ***scripts.min.js***):
```html
<!-- JS files -->
<script type="text/javascript" src="js/lib/jquery.js"></script>
<script type="text/javascript" src="js/backtotop.js"></script>
<script type="text/javascript" src="js/main.js"></script>

<!-- compressed files by GruntJS -->
<script type="text/javascript" src="js/grunt/scripts.min.js"></script>
```

4.Include plugin object for your button class or id:
```javascript
jQuery(function($) {
    $('#back').backToTop();
});
```
Properties
============================
***left*** - you may allocate your button for left direction;<br/>
*Examples: left: '10px'*<br/> 
***right*** - you may allocate your button for right direction;<br/>
***bottom*** - you may allocate your button for bottom direction.<br/>


Information
============
If you have some questions, problems or improvement for this plugin create issues and we will discuss.<br/>
Thank you!

License
========
[MIT License](http://opensource.org/licenses/mit-license.php)



