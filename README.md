# თბს-აკადემია

[tbcacademy]-ის პროგრამის თანახმად, აღნიშნული პროექტის რეალიზება ხორციელდება მოცემული ტექნიკური დავალების გათვალისწინებით, რომელიც ეხება არსებული [ვებ გვერდი]-ს იდენტურად აწყობას.

## პროექტის სტრუქტურა

- src: პროექტის ძირითადი რესურსები.
  - **CSS**: პროექტის სტილები.
  - **JS**: JavaScript-ის ფაილები.
  - **assets**: დამხმარე რესურსები (logo, img, fonts და ა.შ)
- **.eslintrc.js**: კონფიგურაციის ფაილი [ESLint]-თვის.
- **.gitignore**: ფაილი, რომელიც აკონტროლებს, თუ რა ფოლდერები და ფაილები არ მოხვდეს როპოზიტორში.
- **.prettierrc.js**: კონფიგურაციის ფაილი [Prettier]-თვის.
- **.commitlint.config.js**: კონფიგურაციის ფაილი [Commitlint]-თვის.
- **package-lock.json**: აფიქსირებს პროექტის დეფენდენსების კონკრეტულ ვერსიებს და მათ ქვედეფენდენსებს.
- **package.json**: შეიცავს მეტამონაცემებს პროექტის შესახებ და მის დეფენდენსებს.
- **README.md**: პროექტის დოკუმენტაცია.
- **webpack.config.js**: კონფიგურაციის ფაილი JS ბილდერისთვის.

## გამოყენებული ტექნოლოგიები

- [HTML] - ძირითადი გვერდის კონტენტის სტრუქტურირებისთვის. ის გვაძლევს, თანამედროვე ტეგების გამოყენების შესაძლებლობას, სემანტიკის გასაუმჯობესებლად.
- [CSS] (Flexbox, CSS Grid) - გვაძლევს შესაძლებლობას ვისარგებლოთ თანამედროვე და მრავალფეროვანი ინსტრუმენტებით, სტილისათვის. ასევე გამოიყენება იმისათვის, რომ გვერდის დიზაინი იყოს რესფონსიული.
- [JavaScript (ES6+)] - იმისთვის, რომ გავხადოთ გვერდი დინამიური და ინტერაქტიული. კერძოდ, ES6+ გვთავაზობს თანამედროვე ფუნქციებს და მიდგომებს, რის შედეგადაც გაცილებით მარტივდება პროექტის რეალიზება, მაშტაბირება (მოდულების დამატება და სხვა) და უზრუნველყოფა.
- [Webpack]: - აღნიშნული პროდუქტი გვეხმარება პროექტის ეფექტურად აწყობაში (ბილდინგში) და დეფენდენსების მართვისთვის. ასევე გააჩნია ფართო ფუნქციონალი, რაც გვაძლევს საშუალებას შევქმნათ მოდულების ოპტიმიზებული ბანდლი, რის შედეგადაც შეგვიძლია პროექტის ეფექტური განვითარება და რესურსების მართვა.
- ინსტრუმენტები კოდის სტანდარტირებისთვის:
  - [ESLint]: - ინსტრუმენტი კოდის ფორმატირებისათვის.
  - [Prettier]: - ინსტრუმენტი კოდის სტატიკური ანალიზისთვის, კოდში პატერნების აღოჩენისთვისა და კორექტირებისთვის.
  - [Commitlint]: - ინსტრუმენტი კომიტის სათაურის შესამოწმებლად, გარკვეული რეკომენდაციების შესასრულებლად.

## პროექტის გაშვების ინსტრუქცია

გახსენით ტერმინალი და ინსტრუქციის მიხედვით ნაბიჯ-ნაბიჯ შეიყვანეთ შემდეგი ბრძანებები.

1. რეპოზიტორის კლონირება: `git clone https://github.com/dgebia/tbcacademy`.
2. გადადით პროექტის დირექტორიაში: `cd tbcacademy`.
3. დეფენდენსების ინსტალირება: `npm install`.
4. პროექტის გაშვება დაბილდვის გარეშე: `npm run dev`.
5. პროექტის დაბილდვა: `npm run build`

[tbcacademy]: https://www.tbcacademy.ge/
[ვებ გვერდი]: https://www.tbcacademy.ge/usaid
[HTML]: https://html.spec.whatwg.org/multipage/dom.html#flow-content-2
[CSS]: https://www.w3schools.com/css/css_selectors.asp
[JavaScript (ES6+)]: https://262.ecma-international.org/
[Webpack]: https://webpack.js.org/
[ESLint]: https://eslint.org/
[Prettier]: https://prettier.io/
[Commitlint]: https://commitlint.js.org/
