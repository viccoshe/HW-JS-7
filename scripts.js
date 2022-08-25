//Калькулятор
console.log('Калькулятор' + '\n')


let Calc = function() {

    this.get = function() {
        this.switch = confirm('Вы хотите включить калькулятор?');
        if (this.switch) {
            this.a = +prompt('Введите число a');
            this.b = +prompt('Введите число b');
            this.sign = prompt('Введите знак: +, -, *, /');
            this.operation();
        }
    };
    this.operation = function() {
        switch(this.sign) {
            case '+':
                this.result = this.a + this.b;
            break; 
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }
        this.show();
    };
    this.show = function() {
        alert(this.a + ' ' + this.sign + ' ' + this.b + ' = ' + this.result)
    };
};

let calc = new Calc();
calc.get();



//Лампочка
console.log('Лампочка' + '\n')

let LightBulb = function() {
    this.get = function() {
      this.name = name;
      this.switcher = confirm('Включить лампочку?');
      if(this.switcher) {
        this.power = +prompt('Введите мощность лампочки, Вт');
        this.cost = +prompt('Введите стоимость электроэнергии, 1 кВ/час; руб');
        this.time = +prompt('Сколько часов лампочка работает в день?');
        this.monthDays = +prompt('Введите количество дней в текущем месяце');
        this.operation();
      }
    };
    this.operation = function() {
      this.day = (this.power / 1000) * this.time;
      this.month = this.day * this.monthDays;
      this.monthCost = this.cost * this.month;
      this.show();
    };
    this.show = function() {
      alert('Горение лампочки за месяц: ' + this.month + ' кВт. ')
      alert('Расход горения лампочки за месяц: ' + this.monthCost + ' руб. ')
    };
  };
  
  let lightBulb = new LightBulb('Kitchen');
  lightBulb.get();
  
//Лампочка
console.log('Лампочка' + '\n')
  
  let Teapot = function() {
    this.get = function() {
      this.switcher = confirm('Включить чайник?');
      if (this.switcher) {
        this.power = +prompt('Введите мощность чайника, Вт');
        this.volume = +prompt('Введите объём чайника, л');
        this.water = +prompt('Введите кол-во наливаемой воды, л');
        this.operation();
      }
    };
    this.operation = function() {
      this.result = (0.00117 * this.volume * 74.4) / this.power;
      this.show();
    };
    this.show = function() {
      alert('Время закипания воды: ' + this.result + 'ч');
    };
  };
  
  let teaPot1 = new Teapot();
  teaPot1.get();


//Автомобиль
console.log('Автомобиль' + '\n')
  
  let Auto = function() {
    this.get  = function() {
      this.brand = prompt('Введите марку');
      this.num = prompt('Введите номер');
      this.engine = confirm('Включить двигатель?');
      if (this.engine) {
        this.gearbox = prompt('Введите передачу: вперед, назад, нейтральная');
        this.speed = prompt('Скорость движения, км/ч');
        this.time = prompt('Время в движении, ч?');
        this.operation();
      }
    };
    this.operation = function() {
      this.result = this.speed * this.time;
      this.show();
    };
    this.show = function() {
      alert('Пройденные км: ' + this.result);
    };
  };
  
  let auto1 = new Auto();
 auto1.get();
  

 //Контакты

let regExp1 = /^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/,
    regExp2 = /^(?:1(?:00?|\d)|[2-5]\d|[6-9]\d?)$/,
    regExp3 = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
    regExp4 = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;


let Contact = function() {
    
    this.get = function() {
      this.newContactFio = 'Кошевых Виктория александровна';//prompt('Введите ФИО');
      this.newContactAge = "50"; //prompt('Введите возраст');
      this.newContactPhone = '+375292563436'; //prompt('Введите телефон');
      this.newContactEmail = 'viccoshe@gmail.com'; //prompt('Введите email');
      return;
      this.check();
    };

    this.check = function() {

        this.valid = regExp1.test(this.newContactFio);
        if (!this.valid) {
            console.log ('Неправильно введены ФИО');
            this.get();
        } 

        this.valid = regExp2.test(this.newContactAge);
        if (!this.valid || this.newContactAge <= 18) {
            console.log ('Неправильно введен возраст / Вам меньше 18');
            this.get();
        } 

        this.valid = regExp3.test(this.newContactPhone);
        if (!this.valid) {
            console.log ('Неправильно введен телефон');
            this.get();
        } 

        this.valid = regExp4.test(this.newContactEmail);
        if (!this.valid) {
            console.log ('Неправильно введен email');
            this.get();
        }    
       // this.show();  
    };
/* не перебирает значения
    this.show = function() {
        for (let keyName in this.get) {
        console.log(keyName + ': ' + this.get[keyName]);
        }
   };
  */  
};
  
let contact1 = new Contact();
contact1.get();

  for (let key in Contact) {
  console.log(keyName);
  }



