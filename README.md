## Gen 
###### Easy tool to generate strings. It can't get more simplier than this.

### Usage
> We support different languages
- Javascript
- NodeJS
- PHP
- more coming soon

##### Javascript
> (jsGen > Gen, this is an advanced tutorial usage of Gen. If you don't understand it, I am sorry)

- `Gen.genRandomCharCodes(length, callback)` - Generate random ACII characters by length. Callback is option

- `Gen.genRGB()` - Generate a random RGB code. Optional callback

- `Gen.genRandomUTF8(length, prefix, callback)` - Generate a random UTF8 characters, with a custom prefix, followed by option callback.

###### Prefix
> Prefixs are words in which will be used for your generatered constant characters. For ex

- `Gen.genRandomUTF8(5, "ABCD")` // output: BBBAC

- `Gen.genSerial(dash, length, prefix, callback)` = Generated a random serial. Include dash, and length of serial

- `Gen.genSerials(dash ,length, amount, prefix,callback)` = Generate a random serial. Include dash, length of serial, amount of serials.

- `Gen.genRandomNumbers(length, prefix, callback)` = Generate random numbers with a length, with option prefix, and callback

- `Gen.genRandomAOA(length, callback)` = Generate a random (All of the above) characters, with a length of characters to generate

##### Each use
> Each is a tool used to generate more than one of a function, for example `genRandomUTF8`. You might want to generated more than 1, now, when using each, you still have to follow the function rules, as to it's params(arguments).

###### Example use
```
Gen.each(Gen.genRandomUTF8, 5, 10); // outputs: 5, 10 character long random utf8's. Customs, are allowed aswell,
Gen.each(Gen.genRandomUTF8, 5, 10, "ABC123"); // as now, your generated utf8 will only contain your prefix.

```

##### Callback Usage
> Gen is not intended to be used as a callback, but you're allowed to use it as soo. Each function has a callback, except if you're using each. Here's an example callback usage with `genSerial`
```
Gen.genSerial(3, 5, null, function(callback){
  if(callback) console.log(callback); // log results.
})
```

