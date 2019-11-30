## What is AutoSwap?

AutoSwap is a next generation atomic swap widget, working in an entirely decentralized manner, using smart contracts on the Ethereum and Tron blockchains. AutoSwap is currently in Beta Version 0.0.2, in future releases it will include swapping options for Bitcoin, AEternity, EOS, and many more. If you are new to the atomic swap technology, please check out this informative article - https://www.investopedia.com/terms/a/atomic-swaps.asp 

## Try it out

In order to run AutoSwap locally, clone this repo and simply run

### `yarn start`

For now, AutoSwap is dependant on Firebase for its backend functionalities, so it's not needed to have a backend service running locally.

IMPORTANT!!! If the backend isn't working properly and the data doesn't load, it's probably because AutoSwap is using https://cors-anywhere.herokuapp.com to handle the CORS Access-Control-Allow-Origin error. In order to solve this, try using the browser extension - Moesif Orign & CORS Changer. If that doesn't work, wait for the cors-anywhere service to work again, or better yet - help arthas168 fix this error with a pull request, or a message with a hint on how to solve it.
