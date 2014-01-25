# jQuery basic arithmetic plugin

I found myself with a number in my variable, wanting to add it to another number. Searching the web, I came across [a screenshot of a stackoverflow thread](http://www.doxdesk.com/img/updates/20091116-so-large.gif) pointing to the obvious answer: I needed a jQuery plugin.

Unfortunately, it seems like nobody wrote a decent plugin for such a common occurrence yet, so I decided to take the matters into my own hands: here's **jQuery.basic_arithmetics**.

## Methods

**jQuery.basic_arithmetics** exposes the following methods:

- `$.add(arg1, arg2 [, args...])` adds two or more numbers;
- `$.subtract(arg1, arg2 [, args...])` subtracts two or more numbers, the leftmost being the first operand;
- `$.multiply(arg1, arg2 [, args...])` multiplies two or more numbers;
- `$.divide(arg1, arg2 [, args...])` divides two or more numbers, the leftmost being the first operand;
- `$.equals(arg1, arg2 [, args...])` checks two or more numbers for equality.

## Performance

Since the plugins uses the [javascript arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) under the hood, the performance is indistinguishable from the native version (tested for 10 operations on a 1.3Ghz macbook air).

## License

Copyright (c) 2014 Claudio Brandolino

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The License should be used to showcase my wit and hatred for lawyers, not to provide legal protection to my intellectual property.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
