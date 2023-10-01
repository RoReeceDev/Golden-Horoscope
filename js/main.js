//Step 1: Make variables to hold value of each selection box

const bMonth = document.querySelector('#birthmonth')

const bDay = document.querySelector('#birthday')

// Step 2: Create an event listener that will run function when user clicks What's My Sign button

document.querySelector('#sign').addEventListener('click', checkHoroscope)

// Step 3: Write function to check horoscope based on values of users and the dates of each horoscope sign 

function checkHoroscope(){
    if((bMonth.value == 'January' && bDay.value <= 19) || (bMonth.value == 'December' && bDay.value >= 22)){
        document.querySelector('#yoursign').innerText = 'You are a Capricorn!'
        document.querySelector('#yourhoroscope').innerText = 'Your perfectionism and high standards, though sometimes an obstacle, can be one of your superpowers when handled wisely. You have a strong sense of self, which enables you to make meaningful connections and lead the way.'
        console.log('Capricorn')
    } else if((bMonth.value == 'January' && bDay.value >= 20) || (bMonth.value == 'February' && bDay.value <= 18)){
        document.querySelector('#yoursign').innerText = 'You are a Aquarius'
        document.querySelector('#yourhoroscope').innerText = 'You may fall on the introvert side of the spectrum, but that doesn\’t mean you don\’t know how to have fun. You have an enviable combination of intelligence and intuition, and you are able to identify positive opportunities even in dark times.'
        console.log('Aquarius')
    } else if(bMonth.value == 'February' && bDay.value > 29){
        document.querySelector('#yoursign').innerText = 'Please enter a valid date of birth'
        console.log('Date not found')
    } else if((bMonth.value == 'February' && bDay.value >= 19) || (bMonth.value == 'March' && bDay.value <= 20)){
        document.querySelector('#yoursign').innerText = 'You are a Pisces'
        document.querySelector('#yourhoroscope').innerText = 'You wouldn\’t hurt a fly! Empathy is your superpower, and you are an asset to any team you join or cause you support. Your gentleness is a virtue. However, be careful to not let your feelings get hurt too easily. Be sure to spend time building your self\‒confidence.'
        console.log('Pisces')
    } else if((bMonth.value == 'March' && bDay.value >= 21) || (bMonth.value == 'April' && bDay.value <= 19)){
        document.querySelector('#yoursign').innerText = 'You are a Aries'
        document.querySelector('#yourhoroscope').innerText = 'Independent and strong\‒willed, you are a force to be reckoned with! You love nothing more than an exciting new goal to tackle, and you do your best work when you\’re flying solo. Your passion and energy keep the rest of us on our toes!'
        console.log('Aries')
    } else if(bMonth.value == 'April' && bDay.value > 30){
        document.querySelector('#yoursign').innerText = 'Please enter a valid date of birth'
        console.log('Date not found')
    } else if((bMonth.value == 'April' && bDay.value >= 20) || (bMonth.value == 'May' && bDay.value <= 20)){
        document.querySelector('#yoursign').innerText = 'You are a Taurus'
        document.querySelector('#yourhoroscope').innerText = 'As a Taurus, you\’re a wonderful combination of laid\‒back and hard\‒working. You\’re honest and loyal, occasionally to a fault. Your determination and attention to detail will take you far in life.'
        console.log('Taurus')
    } else if((bMonth.value == 'May' && bDay.value >= 21) || (bMonth.value == 'June' && bDay.value <= 20)){
        document.querySelector('#yoursign').innerText = 'You are a Gemini'
        document.querySelector('#yourhoroscope').innerText = 'Your ability to get along with a wide variety of people makes you a bit of a social butterfly, but you\’ll take advantage of some alone time when it comes your way. Curious and deeply emotional, you love ritual and celebration.'
        console.log('Gemini')
    } else if(bMonth.value == 'June' && bDay.value > 30){
        document.querySelector('#yoursign').innerText = 'Please enter a valid date of birth'
        console.log('Date not found')
    } else if((bMonth.value == 'June' && bDay.value >= 21) || (bMonth.value == 'July' && bDay.value <= 22)){
        document.querySelector('#yoursign').innerText = 'You are a Cancer'
        document.querySelector('#yourhoroscope').innerText = 'Your intuition is downright uncanny! You do your best socializing in small groups and prefer intimate relationships even if it means your social circle is on the smaller side. Your creative spirit will bring joy to all you meet.'
        console.log('Cancer')
    } else if((bMonth.value == 'July' && bDay.value >= 23) || (bMonth.value == 'August' && bDay.value <= 22)){
        document.querySelector('#yoursign').innerText = 'You are a Leo'
        document.querySelector('#yourhoroscope').innerText = 'It\’s no wonder your symbol is a lion. Your personality and presence are impressive to all. This may intimidate some, but your inviting spirit will help you easily make friends. Your confidence will be an asset to you throughout your life.'
        console.log('Leo')
    } else if((bMonth.value == 'August' && bDay.value >= 23) || (bMonth.value == 'September' && bDay.value <= 22)){
        document.querySelector('#yoursign').innerText = 'You are a Virgo'
        document.querySelector('#yourhoroscope').innerText = 'You are the picture of poise and elegance. You love to stay organized and have a strong focus on keeping things aesthetic. But you\’re not just beauty. You\’ve got brains, too! You\’ll continue seeking knowledge and intellectual growth as you age.'
        console.log('Virgo')
    } else if(bMonth.value == 'September' && bDay.value > 30){
        document.querySelector('#yoursign').innerText = 'Please enter a valid date of birth'
        console.log('Date not found')
    } else if((bMonth.value == 'September' && bDay.value >= 23) || (bMonth.value == 'October' && bDay.value <= 22)){
        document.querySelector('#yoursign').innerText = 'You are a Libra'
        document.querySelector('#yourhoroscope').innerText = 'You have a large social circle, and your open\‒mindedness helps you get along with just about anyone. But don\’t get lost in the crowd! A focus on self\‒care and personal reflection will help you build your confidence over time.'
        console.log('Libra')
    } else if((bMonth.value == 'October' && bDay.value >= 23) || (bMonth.value == 'November' && bDay.value <= 21)){
        document.querySelector('#yoursign').innerText = 'You are a Scorpio'
        document.querySelector('#yourhoroscope').innerText = 'As a Scorpio, you can have a sharp edge, but this isn\’t always a negative quality. It gives you an appreciation for authenticity and a strong sense of independence. However, you\’re not always as tough as you appear. Once you let people into your life, you\’re a bit of a softy.'
        console.log('Scorpio')
    } else if(bMonth.value == 'November' && bDay.value > 30){
        document.querySelector('#yoursign').innerText = 'Please enter a valid date of birth'
        console.log('Date not found')
    } else if((bMonth.value == 'November' && bDay.value >= 22) || (bMonth.value == 'December' && bDay.value <= 21)){
        document.querySelector('#yoursign').innerText = 'You are a Sagittarius'
        document.querySelector('#yourhoroscope').innerText = 'The road less traveled is your favorite place to be! Your bravery is admirable and will make you a good fit for leadership roles. You also have a bit of an itch in your shoes and will always be ready to take on a new adventure.'
        console.log('Sagittarius')
    } else if((bMonth.value =='Month' && bDay.value === 'Day') || (bMonth.value === 'Month' || bDay.value === 'Day')){
        document.querySelector('#yoursign').innerText = 'Please enter a valid date of birth'
        document.querySelector('#yourhoroscope').innerText = ''
        console.log('Date not entered')
    }
}

/* DISCLAIMER: HOROSCOPE DESCRIPTIONS ARE NOT MINE! CREDIT GOES TO ERICA MARTIN OF TEN THOUSAND VILLAGES. SEE LINK FOR ORIGINAL ARTICLE: https://www.tenthousandvillages.com/blogs/mosaic/your-guide-to-the-12-zodiac-dates-traits */