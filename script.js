var other = document.getElementById('other');
var anime = document.getElementById('anime');
var dota = document.getElementById('dota');

var word = [];
var g = 5;
var a = 0;
var correctWord = [];

other.addEventListener('click',funcOther);
anime.addEventListener('click',funcAnime);
dota.addEventListener('click',funcDota);
var words = {
'anime':['evangelion','blackclover','swordartonline','deathnote','another'],	
'dota':['pudge','invoker','techies','chen','antimage'],
'other':['sabaka','albert','globus','ghoul','kompot'],
}

alert('Приветствую смотрящих, для начала выбери категорию')

function funcAnime() {
word = words.anime[Math.floor(Math.random()*words.anime.length)]
funcMain();
}

function funcDota() {
word = words.dota[Math.floor(Math.random()*words.dota.length)]
funcMain();
}


function funcOther() {
word = words.other[Math.floor(Math.random()*words.other.length)]
funcMain();
}

function funcMain() {
	for( var i = 0; i<word.length;i++)
	{
    correctWord[i] = '_';
	}
alert('Правила: Тебе нужно нажимать на буковки если ты угадываешься то в слове буковки отображаются, если не угадываешь соответсвенно не показывает, у тебя есть 5 жизней, после того как ты потратишь их все ты проиграешь')



var output = document.getElementById('input')

var content = document.getElementById('content')






output.innerHTML = correctWord;


var input = document.getElementsByClassName('button');

for(var i = 0; i<input.length;i++){
	input[i].addEventListener('click',func1)
}


function func1() {

this.classList.add('noob')

if(word.includes(this.innerHTML)){
	for(var u = 0;u<word.length;u++){
		if(this.innerHTML == word[u])
		{
			alert('Отлично!')
			correctWord[u] = this.innerHTML;
			output.innerHTML = correctWord;
		}
	}
}

else {
	alert('В данном слове нет такой буквы!!')
	g--;
	alert('Осталось попыток: ' + g )
}

	if(g == 0)
	{
		content.classList.add('GG')
	}



}
}

