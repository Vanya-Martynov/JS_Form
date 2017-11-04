	
													// Ввод ФИО


	let userInputFirstName = prompt('Введите Ваше имя');
		nameTest(userInputFirstName);
	let userInputSecondName = prompt('Введите Вашу фамилию');
		nameTest(userInputSecondName);
	let userInputMiddleName = prompt('Введите Ваше отчество');
		nameTest(userInputMiddleName);


													// Ввод Даты рождения



let year = prompt('Введите год Вашего рождения'),
	test,
	isYear;
	
		test = 2017 - Number(year);
		while (test < 0)
	{
		alert('Введено неверное значение, пожалуйста повторите ввод');
		year = prompt('Введите год вашего рождения');
		test = 2017 - Number(year);
	}




let month = prompt('Введите месяц вашего рождения');
	
	while (Number(month) <= 0 || (Number(month) > 12))
	{
		alert('Введено неверное значение, пожалуйста повторите ввод');
		month = prompt('Введите месяц вашего рождения');
	}
		nameMonth('январь', 1, 'января');
		nameMonth('февраль', 2, 'февраля');
		nameMonth('март', 3, 'марта');
		nameMonth('апрель', 4, 'апреля');
		nameMonth('май', 5, 'мая');
		nameMonth('июнь', 6, 'июня');
		nameMonth('июль', 7, 'июля');
		nameMonth('август', 8, 'августа');
		nameMonth('сентябрь', 9, 'сентября');
		nameMonth('октябрь', 10, 'октября');
		nameMonth('ноябрь', 11, 'ноября');
		nameMonth('декабрь', 12, 'декабря');
		


let day = prompt('Введите день вашего рождения');
	daysNumber();
	if (Number(day) <= 0 || (Number(day) > 31))
    {
		while (Number(day) <= 0 || (Number(day) > 31))
		{
			alert('Введено неверное значение, пожалуйста повторите ввод');
			day = prompt('Введите день вашего рождения');
		}
	}

		// Проверка ввода месяца 'февраль'

let integer, divideOnFour, divideOnHundred,
	checkYear,		boolean_400 , boolean_4, boolean_100 , check = false;

	//Год должен делится на 4, но не на 100, либо на 400

	integer = Number(year) / 400;
	divideOnFour = Number(year) / 4;
	divideOnHundred = Number(year) / 100;
	boolean_400 = isInteger(integer);
	

	boolean_100 = isInteger(divideOnHundred);
	boolean_4   = isInteger(divideOnFour);
	


	if ((boolean_100 === false && boolean_4 === true) || (boolean_400))
	{	
		check = true;
		if ((Number(month) === 2 || month === 'февраля') && Number(day) > 29)
		{	
			while ((Number(month) === 2 || month === 'февраля') && Number(day) > 29)
			{
			alert('В феврале не больше 29 дней, введено неверное значение');
			day = prompt('Пожалуйста, введите верное количество дней');
			}
		}
	} 
	if ((Number(month) === 2 || month === 'февраля') && ((Number(day) > 28) && (check === false)))
	{
		while ((Number(month) === 2 || month === 'февраля') && Number(day) > 28)
		{
			alert('Так как год не високосный, в феврале не больше 28 дней');
			day = prompt('Пожалуйста, введите верное количество дней');
		}
	}
	if ((Number(month) === 2 || month === 'февраля') && Number(day) > 29)
	{
		while ((Number(month) === 2 || month === 'февраля') && Number(day) > 29)
			{
			alert('В феврале не больше 29 дней, введено неверное значение');
			day = prompt('Пожалуйста, введите верное количество дней');
			}
	}



															// Ввод места жительства

	let country = prompt('Введите страну, где Вы проживаете');
	nameTest(country);
	let ask = prompt('Укажите тип населенного пункта: 1 - Город, 2 - Село, 3 - Деревня'),
		conclusion,
		display;
		while (ask !== 'Город' && ask !== 'Село' && ask !== 'Деревня' && Number(ask) !== 1 && Number(ask) !== 2 && Number(ask) !== 3)
		{
			alert('Введено неверное значение');
			ask = prompt('Укажите тип населенного пункта: 1 - Город, 2 - Село, 3 - Деревня');
		}
		
	switch (ask)
	{
		case 'Город' :
		conclusion = ', г. ';
		display = 'город';
		break;
		case '1' :
		conclusion = ', г. ';
		display = 'город';
		break;
		case 'Село' :
		conclusion = ', с. ';
		display = 'село';
		break;
		case '2' :
		conclusion = ', с. ';
		display = 'село';
		break;
		case 'Деревня' :
		conclusion = ', д. ';
		display = 'деревня';
		break;
		case '3' :
		conclusion = ', д. ';
		display = 'деревня';
		break;
		
	}
	town = prompt('Введите '+ display + ' в котором Вы проживаете');
	nameTest(town);


	let house = prompt('Укажите Ваш дом');
	nameTest(house);

														//Ввод пола

		let male = prompt('Выберите пол: мужской или женский');
		if (Number(male) === 1)
		{
			male = 'муж';
		}else if (Number(male) === 2)
		{
			male = 'жен';
		}else (male !== 'мужской' && male !== 'женский' && male !=='муж' && male !== 'жен')
		{
		while (male !== 'мужской' && male !== 'женский' && male !=='муж' && male !== 'жен')
		{
			alert('Не верное значение');
			male = prompt('Выберите пол: мужской или женский');
		}
		}

														//Подсчет пенсии

	let pension;
	if (test > 200)
	{
		pension = 'Нуууу, скорее нет, чем да)'
	}else if ((male === 'мужской' || male === 'муж') && test >=60)
	{
		pension = 'Да';
	} else if ((male === 'женский' || male ==='жен' ) && test >=55)
	{
		pension = 'Да';
	} else
	{
		pension = 'Нет';
	}

															// Вывод

alert(  'ФИО: ' + userInputSecondName +
  		' ' + userInputFirstName +
  		' ' + userInputMiddleName + 
  		'\r\nДата рождения: ' + day + ' ' + month + ' ' + year + ' года' + 
  		'\r\nПол: '+ male + '\r\n' +'Адрес: ' + country + conclusion + town + ' д. ' + house +
  		'\r\nПенсия: '+ pension);
		
	
	









function daysNumber()
{
	if (month === 'февраля' ||
		month === 'апреля' ||
		month === 'мая' ||
		month === 'июня' ||
		month === 'сентября' ||
		month === 'ноября')
	{
		while (Number(day) <= 0 || (Number(day) > 30))
		{
			alert('Введено неверное значение, в этом месяце не больше 30 дней, пожалуйста повторите ввод');
			day = prompt('Введите день вашего рождения');
		}
	}
	return day;
}


function isInteger(num) 
{
  return (num ^ 0) === num;
}

function nameMonth(monthName, numb, result)
{
	if ((Number(month) === numb) || (month === monthName))
	{
		month = result;
	}
	return month;
}

function question()
{
	if (test > 100 || test < 4)
		{
			isYear = confirm('Вы уверены что вам ' + test + ' лет?');
		}
	return (isYear);
}


function nameTest (name){
	if (name.length === 0){
	while (name.length === 0)
	{
		alert('Введено пустое поле, пожалуйста введите данные');
		name = prompt('Введите данные ещё раз');
	}
	return name;
}
}