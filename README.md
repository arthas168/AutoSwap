## What is AutoSwap?

AutoSwap is a next generation atomic swap widget, working in an entirely decentralized manner, using smart contracts on the Ethereum and Tron blockchains. AutoSwap is currently in Beta Version 0.0.2, in future releases it will include swapping options for Bitcoin, AEternity, EOS, and many more. If you are new to the atomic swap technology, please check out this informative article - https://www.investopedia.com/terms/a/atomic-swaps.asp 

## Open AutoSwap

AutoSwap is already up and running thanks to Firebase Hosting - https://atomic-swap.web.app/

## User Story

To help you get started with AutoSwap, here's a brief user story, where we'll be going through the workflow of the application step by step so any new user can follow along with ease. Along with that, you will learn about all of the components and elements in our website in detail.

### 1. Public data

When you enter https://atomic-swap.web.app/, you'll be greeted with a simple home page - a menu on the top, footer on the bottom, and in the middle a greeting with two buttons - for log in and for register. You'll also see a dashboard (on the top left), where you can view the number of swaps being made on AutoSwap in real time. From the menu, you can also access the other public pages - About and Contacts. In About you'll find a brief overview of why we do what we do at AutoSwap and how we manage it. In Contacts you can fill a form to tell us what you think about the product, how we can improve it, etc. But also you can use the form to report bugs and issue complaints. All we need is an email so we can get back to you with a response.
From the header, an unregistered user can also toggle dark and light color theme modes, but more on that in the Header section of this user story.

### 2. User registration

Once you're on the home page, you will see two buttons. One with text "Log In", and another - "Registrater now". When you click on the register button you'll see a simple register form. After providing the needed information and clicking "Register", you will automatically be redirected to the home page with the account you've just created.

### 3. Deposit

In order to use AutoSwap, you need to deposit funds which you will then swap. Currently, AutoSwap does not support browser wallet integration and relies on test funds, whose behaviour is simulated with Javascript. In the menu you will se a "My Profile" link. Once you click it you will see a profile page, where for now you'll notice two boxes - one for ETH and the other for TRX, both containing input and values of 0. In "transaction history" you won't see anything for the moment, because you haven't swapped yet. Now you need to click on the "Deposit" button below the currency you wish to deposit onto the system, and enter the chosen amount. Once that's done you'll be redirected to the home page with a pop-up saying you've successfully deposited your funds. You can now go to the My Profile page again to see that your balance has been updated.

### 4. Swap

Here's the most important part - the actual swapping process. When you click the "Swap" button in the menu you will see a pretty simple and straightforward form. From the dropdowns you choose the currencies you want to exchange, the top being the one you will give, and the bottom - the one you wish to receive. When you've chosen the currency pair, you have to type the amount you wish to exchange.  When you start typing the system will automatically calculate the amount of the second token you will receive, in exchange for the amount of the first token you've entered. Once you're satisfied with the values click "Swap Now". This begins the swap process. Or rather, the simulation of the swap process. Normally, in atomic swap applications, when the user initiates the swap, two transactions get fired - let's say you want to swap ETH for TRX - you create a transaction both on the Ethereum and Tron blockchain networks. The networks need time to verify the authenticity of both of them, and transfer the funds (5-10 blocks have to be mined by the miners on both networks, and various nodes need to approve the process). This usually takes about 1-5 minutes, but we've accelerated the waiting time to 5-20 seconds. Once that's done with, you will get redirected to the user profile page, also you will receive a notification that the swap was successful. In the profile page you'll see that the amount of TRX and ETH in your virtual wallets have changed. That's all there is to it, really! You've made your first swap.

### 5. Withdraw

After a successful swap, what's left is to withdraw your newly owned coins. So back in the My Profile page you'll see a Withdraw button below both currencies you own. Click the one you want to withdraw and you'll see a new window below the currency sections, where you can write the amount you wish to withdraw, after that click the Withdraw button, and you'll again be redirected to the home page, with a pop-up that informs you that the withdraw was successful. In the next versions of AutoSwap, you will be able to withdraw the chosen amount straight into your browser wallet (on both main and test nets). 

### 5. My Profile

The My Profile page holds information about the users balance, it's value in USD, along with the same for each coin you have stored in your "virtual wallet". To the right you'll see a scrollable list with all the transactions (swaps) you've made, ordered in descending order, sorted by the date on which they were executed. On every swap block you'll see a "More Info" button, which on clicked reveals detailed information about the swap, including the prices of both coins at the time of the swap and many more useful data. 

### 6. Header

Not much to say about the header, but in case you missed it - AutoSwap comes in both dark and light color themes. You can change them to you preference by clicking on the toggle icon next to your email, if you're logged in, or simply to the right of the menu options if you're not. Every page and every component has been tailored to suit both color theme modes and provide a smooth transition between both of them.

### 7. Footer

The lucky number 7 is hereby the last one of this quick overview! In the footer you'll see a message from the creator of AutoSwap - @arthas168, to the left. And to the right you'll see a button that brings you here, to learn more about the product from this informative and, I daresay, witty documentation! That'll be all for now, thank you for reading. Go along below to learn how you can try out AutoSwap locally, and the things you need to know to have a smooth testing experience.
And remember, we're still in Beta!

## Try it out locally

In order to run AutoSwap locally for testing purposes, clone this repo and simply run

### `yarn start`

and the project will start on port 3000.

For now, AutoSwap is dependant on Firebase for its backend functionalities, so it's not needed to have a backend service running locally.

But please be cautios, Firebase has a maximum allowed function calls per day (5,000). Don't get too playful. :)

IMPORTANT!!! If the backend isn't working properly and the data doesn't load, it's probably because AutoSwap is using https://cors-anywhere.herokuapp.com to handle the CORS Access-Control-Allow-Origin error. In order to solve this, try using the browser extension - Moesif Orign & CORS Changer. If that doesn't work, wait for the cors-anywhere service to work again, or better yet - help arthas168 fix this error with a pull request, or a message with a hint on how to solve it.
