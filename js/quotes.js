const quotes = [
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote : "Life is what happens when you're busy making other plans.",
        author : "John Lennon",
    },
    {
        quote : "The world is a book and those who do not travel read only",
        author : "Saint Augustine",
    },
    {
        quote : "You'll never find a rainbow if you're looking down.",
        author : "Charlie Chaplin",
    },
    {
        quote : "There is always light behind the clouds.",
        author : "Louisa May Alcott",
    },
    {
        quote : "Change before you have to.",
        author : "Jack Welch",
    },
    {
        quote : "My life did not pleas me, so I created my life",
        author : "Coco Chanel",
    },
    {
        quote : "It always seems impossible until it's done.",
        author : "Nelson Mandela",
    },
    {
        quote : "Peace begins with a smile.",
        author : "Mother Teresa",
    },
    {
        quote : "Love dies only when growth stops.",
        author : "Peral S.Buck",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;