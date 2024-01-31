//variables
let btn=document.querySelector("#new-quote");
let quote=document.querySelector('.quote');
let person=document.querySelector('.person')
// let heading=document.querySelector('.header')
// heading.style="Red"
// heading.innerText="Hell"

const quotes = [
    {
        quote: '"Cricket is a pressure game, and when it comes to an India-Pakistan match, the pressure is doubled."',
        person: 'Imran Khan'
    },
    {
        quote: '"You don\'t win or lose the games because of 11 you select. You win or lose with what those 11 do on the field."',
        person: 'Rahul Dravid'
    },
    {
        quote: '"Before you lay a foundation on the cricket field, there should be a solid foundation in your heart and you start building on that. After that as you start playing more and more matches, you learn how to score runs and how to take wickets."',
        person: 'Sachin Tendulkar'
    },
    {
        quote: '"The only way to prove you are a good sport is to lose."',
        person: 'Ernie Banks'
    },
    {
        quote: '"In cricket, my superhero is Sachin Tendulkar. He has always been my hero and will continue to remain so."',
        person: 'Virat Kohli'
    },
    {
        quote: '"Every morning I woke up, I believed that I would score runs that day."',
        person: 'Virender Sehwag'
    },
    {
        quote: '"Cricket is not just a sport in India, it\'s a religion."',
        person: 'Navjot Singh Sidhu'
    },
    {
        quote: '"I am not a perfectionist, but I like to feel that things are done well. More important than that, I feel an endless need to learn, to improve, to evolve, not only to please the coach and the fans but also to feel satisfied with myself."',
        person: 'MS Dhoni'
    },
    {
        quote: '"To me, cricket is a simple game. Keep it simple and just go out and play."',
        person: 'Shane Warne'
    },
    {
        quote: '"I want to be the best version of myself, on and off the field."',
        person: 'Joe Root'
    },
    {
        quote: '"You can cut all the flowers but you cannot keep Spring from coming."',
        person: 'Ricky Ponting'
    },
    {
        quote: '"Cricket is really the gentleman\'s game and I am a big fan of the gentleman\'s game."',
        person: 'Yuvraj Singh'
    },
    {
        quote: '"The era of playing aggressive cricket and to have the mid-on up is gone. You now try to read the mindset of a batsman."',
        person: 'Sourav Ganguly'
    },
    {
        quote: '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
        person: 'Don Bradman'
    },
    {
        quote: '"The most important thing, in any sport, is not to win but to take part."',
        person: 'Baron Pierre de Coubertin'
    },
];

// You now have an array with 15 cricket quotes and their respective personalities.
btn.addEventListener('click',function()
{
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

