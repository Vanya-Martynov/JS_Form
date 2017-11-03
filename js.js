	
													// Ввод ФИО


	let userInputFirstName = prompt('Введите Ваше имя');
		while (userInputFirstName.length === 0)
		{
	
		alert('Введено пустое поле, пожалуйста введите данные');
		userInputFirstName = prompt('Введите Ваше имя');
	
		}
	let userInputSecondName = prompt('Введите Вашу фамилию');
		while (userInputSecondName.length === 0){
	
		alert('Введено пустое поле, пожалуйста введите данные');
		userInputSecondName = prompt('Введите Вашу фамилию');
	
		}
	let userInputMiddleName = prompt('Введите Ваше отчество');
		while (userInputMiddleName.length === 0){
	
		alert('Введено пустое поле, пожалуйста введите данные');
		userInputMiddleName = prompt('Введите Ваше отчество');
	
		}


													// Ввод Даты рождения



let year = prompt('Введите год Вашего рождения'),
	test,
	isYear;
		test = 2017 - Number(year);
		while (Number(year) <= 1900 || test <= 0)
	{
		alert('Введено неверное значение, пожалуйста повторите ввод');
		year = prompt('Введите год вашего рождения');
		test = 2017 - Number(year);
	}
	
	if (test > 100 || test < 4){
		isYear = confirm('Вы уверены что вам ' + test + ' лет?');
	}
	if (isYear){

	} else {
		while (test > 100 || test < 4){
		year = prompt('Введите год вашего рождения ещё раз, пожалуйста')
	}
	}




let month = prompt('Введите месяц вашего рождения');
	
	while (Number(month) <= 0 || (Number(month) > 12)){
		alert('Введено неверное значение, пожалуйста повторите ввод');
		month = prompt('Введите месяц вашего рождения');
	}
		if ((Number(month) === 1) || (month === 'январь')){
			month = 'января';
		}
		if (Number(month) === 2 || (month === 'февраль')){
			month = 'февраля';
		}
		if (Number(month) === 3 || (month === 'март')){
			month = 'марта';
		}
		if (Number(month) === 4 || (month === 'апрель')){
			month = 'апреля';
		}
		if (Number(month) === 5 || (month === 'май')){
			month = 'мая';
		}
		if (Number(month) === 6 || (month === 'июнь')){
			month = 'июня';
		}
		if (Number(month) === 7 || (month === 'июль')){
			month = 'июля';
		}
		if (Number(month) === 8 || (month === 'август')){
			month = 'августа';
		}
		if (Number(month) === 9 || (month === 'сентябрь')){
			month = 'сентября';
		}
		if (Number(month) === 10 || (month === 'октябрь')){
			month = 'октября';
		}
		if (Number(month) === 11 || (month === 'ноябрь')){
			month = 'ноября';
		}
		if (Number(month) === 12 || (month === 'декабрь')){
			month = 'декабря';
		}


let day = prompt('Введите день вашего рождения');
	if (Number(day) <= 0 || (Number(day) > 31)){
	while (Number(day) <= 0 || (Number(day) > 31)){
		alert('Введено неверное значение, пожалуйста повторите ввод');
		day = prompt('Введите день вашего рождения');
	}}

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
	while (country.length === 0 )
	{
		alert('Не верное значение');
		country = prompt('Введите страну, где Вы проживаете');
	}
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
	while (town.length === 0 )
	{
		alert('Не верное значение');
		town = prompt('Укажите Ваш дом');
	}


	let house = prompt('Укажите Ваш дом');
	while (house.length === 0 )
	{
		alert('Не верное значение');
		house = prompt('Укажите Ваш дом');
	}

														//Ввод пола

		let male = prompt('Выберите пол: мужской или женский');
		if (Number(male) === 1){
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
	if ((male === 'мужской' || male === 'муж') && test >=60)
	{
		pension = 'Да';
	} else if ((male === 'женский' || male ==='жен' ) && test >=55)
	{
		pension = 'Да';
	} else{
		pension = 'Нет';
	}

															// Вывод

alert(  'ФИО: ' + userInputSecondName +
  		' ' + userInputFirstName +
  		' ' + userInputMiddleName + 
  		'\r\nДата рождения: ' + day + ' ' + month + ' ' + year + 
  		'\r\nПол: '+ male + '\r\n' +'Адрес: ' + country + conclusion + town + ' д. ' + house +
  		'\r\nПенсия: '+ pension);
		
	
	












function isInteger(num) {
  return (num ^ 0) === num;
}



//function nameTest (name){
	//if (name.length === 0){
	//while (name.length === 0){
	
		//alert('Введено пустое поле, пожалуйста введите данные');
		//name = prompt('Введите данные ещё раз');
	

//}
//}}