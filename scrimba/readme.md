# What I Learned

1) nth-of-type

```css
.my-book:nth-of-type(even) .my-book-cover {
    background-color: lightblue;  
}
```

2) normalize and font awesome links from my portfolio

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous" />
```

3) the way to make a bcg img an overlay style

```css
    background-color: var(--clr-dark);
    background-image: url(../img/services-bg.jpg);
    background-size: cover;

    background-blend-mode: multiply;
    /* background-blend-mode: overlay; */
```

4) a plus operator for styling html elements

```css
    .service + .service {
        margin-left: 2em;
    }
```

5) set up the focus state for elements

```css
:focus {
    outline: 3px solid var(--clr-accent);
    outline-offset: 3px;
}
```